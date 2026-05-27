import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import { encodeConfig } from '@/lib/config-encoder'

export const runtime = 'nodejs'

export type ExportFormat = 'a4' | 'slides'

const ADMIN_ORIGIN = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3002'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const config = body.config ?? body
  const format: ExportFormat = body.format ?? 'a4'

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

  // A4 at 96dpi = 794px wide
  // Landscape 16:9 slide
  const viewportW = format === 'slides' ? 1120 : 794
  const viewportH = format === 'slides' ? 630  : 1123

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--font-render-hinting=none',   // sharper text
    ],
  })

  try {
    const page = await browser.newPage()

    // deviceScaleFactor: 1 para PDF vectorial — el motor de impresión
    // maneja su propia resolución. Con 2 el contenido se reduce a la mitad.
    await page.setViewport({ width: viewportW, height: viewportH, deviceScaleFactor: 1 })

    const printUrl = `${ADMIN_ORIGIN}/proposal-print?d=${encodedData}&fmt=${format}`
    await page.goto(printUrl, { waitUntil: 'networkidle0', timeout: 90000 })

    // Esperar fuentes
    await page.evaluate(() => document.fonts.ready)

    // Congelar animaciones y transiciones antes del render
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0s !important;
        }
      `,
    })

    // Pequeña pausa para que imágenes y SVGs terminen de pintar
    await new Promise(r => setTimeout(r, 600))

    // ─── page.pdf() — vectorial, fuentes embebidas, sin rasterización ───────
    const pdfBytes = await page.pdf({
      format: 'A4',
      landscape: format === 'slides',
      printBackground: true,        // preserva colores de fondo
      preferCSSPageSize: false,     // usamos format:'A4' explícito
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    })

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
