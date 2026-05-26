import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'
import { encodeConfig } from '@/lib/config-encoder'

export const runtime = 'nodejs'

// A4 portrait: 595.28 × 841.89 pt
const A4_W = 595.28

// Landscape widescreen (presentación 16:9)
const SLIDE_W = 841.89
const SLIDE_H = 595.28   // landscape A4

const ADMIN_ORIGIN = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3002'

export type ExportFormat = 'a4' | 'slides'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const config = body.config ?? body          // support both { config, format } and legacy direct config
  const format: ExportFormat = body.format ?? 'a4'

  // Encode config into URL param (avoids tmpdir issues on Vercel)
  let encodedData: string
  try {
    encodedData = encodeConfig(config)
  } catch {
    return NextResponse.json({ error: 'No se pudo codificar la configuración' }, { status: 400 })
  }

  const enabledSections: any[] = (config.sections ?? [])
    .filter((s: any) => s.enabled)
    .sort((a: any, b: any) => a.order - b.order)

  if (enabledSections.length === 0) {
    return NextResponse.json({ error: 'No hay secciones habilitadas para exportar' }, { status: 400 })
  }

  // Viewport per format
  const viewportW = format === 'slides' ? 1120 : 794
  const viewportH = format === 'slides' ? 630  : 900

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: viewportW, height: viewportH, deviceScaleFactor: 2 })

    const printUrl = `${ADMIN_ORIGIN}/proposal-print?d=${encodedData}&fmt=${format}`
    await page.goto(printUrl, { waitUntil: 'networkidle0', timeout: 90000 })

    // Sanity-check that page loaded
    const bodyText = await page.evaluate(() => document.body?.innerText ?? '')
    if (bodyText.includes('Token inválido') || bodyText.includes('Missing') || bodyText.includes('Error')) {
      throw new Error('No se pudo renderizar la propuesta')
    }

    // Freeze animations
    await page.addStyleTag({
      content: `*, *::before, *::after {
        animation-duration: 0.001ms !important;
        transition-duration: 0s !important;
      }
      body { background: white !important; margin: 0 !important; }`,
    })
    await new Promise(r => setTimeout(r, 800))

    // Expand viewport to full content height
    const totalHeight = await page.evaluate(() => document.body.scrollHeight)
    await page.setViewport({ width: viewportW, height: Math.max(totalHeight, viewportH), deviceScaleFactor: 2 })
    await new Promise(r => setTimeout(r, 400))

    const pdfDoc = await PDFDocument.create()
    const pdfW = format === 'slides' ? SLIDE_W : A4_W

    for (const section of enabledSections) {
      const el = await page.$(`#section-${section.id}`)
      if (!el) { console.warn('[PDF] section not found:', section.id); continue }

      const box = await el.boundingBox()
      if (!box || box.height < 10) continue

      const png = await el.screenshot({ type: 'png' }) as Buffer
      const img = await pdfDoc.embedPng(png)
      const { width: imgW, height: imgH } = img.size()

      // Scale to fit PDF width, preserve aspect ratio
      const pageH = pdfW * (imgH / imgW)
      const pdfPage = pdfDoc.addPage([pdfW, pageH])
      pdfPage.drawImage(img, { x: 0, y: 0, width: pdfW, height: pageH })
    }

    const pdfBytes = await pdfDoc.save()
    const brandSlug = (config?.brand?.name ?? 'cliente')
      .toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    const suffix = format === 'slides' ? 'slides' : 'propuesta'

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="clash-${suffix}-${brandSlug}.pdf"`,
      },
    })
  } catch (err) {
    console.error('[PDF] error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  } finally {
    await browser.close()
  }
}
