import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'
import { randomUUID } from 'crypto'
import { storeRenderConfig } from '@/lib/render-cache'

export const runtime = 'nodejs'

const A4_W = 595.28
const VIEWPORT_W = 1440
const ADMIN_ORIGIN = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3002'

export async function POST(req: NextRequest) {
  const config = await req.json()

  // Write config to tmp file BEFORE launching browser
  const token = randomUUID()
  storeRenderConfig(token, config)

  const enabledSections: any[] = (config.sections ?? [])
    .filter((s: any) => s.enabled)
    .sort((a: any, b: any) => a.order - b.order)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: VIEWPORT_W, height: 900, deviceScaleFactor: 2 })

    const printUrl = `${ADMIN_ORIGIN}/proposal-print?token=${token}`
    await page.goto(printUrl, { waitUntil: 'networkidle0', timeout: 60000 })

    // Verify page loaded correctly (not the error state)
    const bodyText = await page.evaluate(() => document.body.innerText)
    if (bodyText.includes('Token inválido') || bodyText.includes('Missing token')) {
      throw new Error('No se pudo cargar la propuesta: token inválido')
    }

    // Kill animations
    await page.addStyleTag({
      content: `*, *::before, *::after {
        animation-duration: 0.001ms !important;
        transition-duration: 0s !important;
      }
      body { background: white !important; margin: 0 !important; }`,
    })

    await new Promise(r => setTimeout(r, 600))

    // Expand viewport to full content height
    const totalHeight = await page.evaluate(() => document.body.scrollHeight)
    await page.setViewport({ width: VIEWPORT_W, height: totalHeight, deviceScaleFactor: 2 })
    await new Promise(r => setTimeout(r, 300))

    // Screenshot each section → one PDF page each
    const pdfDoc = await PDFDocument.create()

    for (const section of enabledSections) {
      const el = await page.$(`#section-${section.id}`)
      if (!el) { console.warn('[PDF] not found:', section.id); continue }

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
      .toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

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
