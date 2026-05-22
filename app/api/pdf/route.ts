import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'
import { randomUUID } from 'crypto'
import { storeRenderConfig } from '@/lib/render-cache'

export const runtime = 'nodejs'

// A4 width in PDF points
const A4_W = 595.28
// Viewport width — matches Tailwind's xl breakpoint
const VIEWPORT_W = 1440

const ADMIN_ORIGIN = 'http://localhost:3002'

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const config = await req.json()

  // Store config temporarily so the print page can access it
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
    // 2× pixel density → crisp text and images
    await page.setViewport({ width: VIEWPORT_W, height: 900, deviceScaleFactor: 2 })

    // Navigate to the print render page (no auth needed — token-based)
    await page.goto(`${ADMIN_ORIGIN}/proposal-print?token=${token}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    })

    // Kill any remaining CSS animations/transitions
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0.001ms !important;
          animation-delay: 0s !important;
          animation-fill-mode: both !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
        body { background: white !important; margin: 0 !important; }
      `,
    })

    // Let fonts & images settle
    await new Promise(r => setTimeout(r, 500))

    // Expand viewport to full content height so nothing is clipped
    const totalHeight = await page.evaluate(() => document.body.scrollHeight)
    await page.setViewport({ width: VIEWPORT_W, height: totalHeight, deviceScaleFactor: 2 })
    await new Promise(r => setTimeout(r, 200))

    // Build PDF — one page per section, sized to exact section height
    const pdfDoc = await PDFDocument.create()

    for (const section of enabledSections) {
      const el = await page.$(`#section-${section.id}`)
      if (!el) continue

      const box = await el.boundingBox()
      if (!box || box.height < 10) continue

      // Screenshot clips to the element's exact bounding box
      const png = await el.screenshot({ type: 'png' }) as Buffer
      const img = await pdfDoc.embedPng(png)
      const { width: imgW, height: imgH } = img.size()

      // Page height preserves the section's aspect ratio at A4 width
      const pageH = A4_W * (imgH / imgW)
      const pdfPage = pdfDoc.addPage([A4_W, pageH])
      pdfPage.drawImage(img, { x: 0, y: 0, width: A4_W, height: pageH })
    }

    const pdfBytes = await pdfDoc.save()

    const brandSlug = (config?.brand?.name ?? 'cliente')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
    const filename = `propuesta-clash-${brandSlug}.pdf`

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } finally {
    await browser.close()
  }
}
