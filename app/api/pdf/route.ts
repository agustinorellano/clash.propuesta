import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'
import { renderToStaticMarkup } from 'react-dom/server'
import React from 'react'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

import CoverSection     from '@/components/preview/sections/CoverSection'
import ConceptSection   from '@/components/preview/sections/ConceptSection'
import SolutionSection  from '@/components/preview/sections/SolutionSection'
import CircuitSection   from '@/components/preview/sections/CircuitSection'
import DistribSection   from '@/components/preview/sections/DistribSection'
import AnalyticsSection from '@/components/preview/sections/AnalyticsSection'
import PlansSection     from '@/components/preview/sections/PlansSection'
import CaseSection      from '@/components/preview/sections/CaseSection'

export const runtime = 'nodejs'

const A4_W    = 595.28
const VIEWPORT_W = 1440

// ─── helpers ────────────────────────────────────────────────────────────────

function sectionToElement(section: any, config: any): React.ReactElement | null {
  switch (section.id) {
    case 'cover':     return React.createElement(CoverSection,     { brand: config.brand })
    case 'concept':   return React.createElement(ConceptSection,   {})
    case 'solution':  return React.createElement(SolutionSection,  {})
    case 'circuit':   return React.createElement(CircuitSection,   {})
    case 'distrib':   return React.createElement(DistribSection,   {})
    case 'analytics': return React.createElement(AnalyticsSection, {})
    case 'plans':     return React.createElement(PlansSection,     { plans: config.plans ?? [] })
    case 'case':      return React.createElement(CaseSection,      {})
    default:          return null
  }
}

function getCompiledCss(): string {
  try {
    const cssDir = join(process.cwd(), '.next/static/css')
    return readdirSync(cssDir)
      .filter(f => f.endsWith('.css'))
      .map(f => readFileSync(join(cssDir, f), 'utf-8'))
      .join('\n')
  } catch {
    return ''
  }
}

// ─── route ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const config = await req.json()

  const enabledSections: any[] = (config.sections ?? [])
    .filter((s: any) => s.enabled)
    .sort((a: any, b: any) => a.order - b.order)

  // 1. Render each section to HTML string (no network needed)
  const sectionsHtml = enabledSections
    .map((section) => {
      const el = sectionToElement(section, config)
      if (!el) return ''
      const html = renderToStaticMarkup(el)
      return `<div id="section-${section.id}">${html}</div>`
    })
    .join('\n')

  // 2. Read compiled Tailwind CSS from Next.js build
  const compiledCss = getCompiledCss()

  // 3. Full HTML document
  const fullHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  ${compiledCss
    ? `<style>${compiledCss}</style>`
    : `<script src="https://cdn.tailwindcss.com"></script>`
  }
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; background: white; }
  </style>
</head>
<body>
${sectionsHtml}
</body>
</html>`

  // 4. Puppeteer renders the HTML directly — no localhost navigation
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: VIEWPORT_W, height: 900, deviceScaleFactor: 2 })

    await page.setContent(fullHtml, { waitUntil: 'networkidle0', timeout: 30000 })

    // Kill any residual animation
    await page.addStyleTag({
      content: `*, *::before, *::after {
        animation-duration: 0.001ms !important;
        transition-duration: 0s !important;
      }`,
    })

    await new Promise(r => setTimeout(r, 400))

    // Expand to full content height
    const totalHeight = await page.evaluate(() => document.body.scrollHeight)
    await page.setViewport({ width: VIEWPORT_W, height: totalHeight, deviceScaleFactor: 2 })
    await new Promise(r => setTimeout(r, 200))

    // 5. Screenshot each section → PDF page
    const pdfDoc = await PDFDocument.create()

    for (const section of enabledSections) {
      const el = await page.$(`#section-${section.id}`)
      if (!el) continue
      const box = await el.boundingBox()
      if (!box || box.height < 10) continue

      const png = await el.screenshot({ type: 'png' }) as Buffer
      const img = await pdfDoc.embedPng(png)
      const { width: imgW, height: imgH } = img.size()

      const pageH = A4_W * (imgH / imgW)
      const pdfPage = pdfDoc.addPage([A4_W, pageH])
      pdfPage.drawImage(img, { x: 0, y: 0, width: A4_W, height: pageH })
    }

    const pdfBytes = await pdfDoc.save()

    const brandSlug = (config?.brand?.name ?? 'cliente')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="propuesta-clash-${brandSlug}.pdf"`,
      },
    })
  } catch (err) {
    console.error('[PDF] error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  } finally {
    await browser.close()
  }
}
