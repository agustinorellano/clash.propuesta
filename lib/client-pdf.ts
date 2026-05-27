'use client'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import type { ExportFormat } from '@/app/api/pdf/route'

const A4_W = 794   // px @ 96 dpi
const A4_H = 1123  // px @ 96 dpi

/**
 * Genera PDF directamente en el navegador capturando los elementos del preview.
 *
 * Garantías de fidelidad:
 *  - document.fonts.ready  → Inter cargada antes de capturar (sin fallback)
 *  - onclone               → fuerza 794 × 1123 exacto en el clon, elimina
 *                            cualquier ancho heredado del scroll container
 *  - PNG                   → sin artefactos JPEG que desplacen texto fino
 *  - addImage(pdfW, pdfH)  → llena la página A4 exacta, sin ratio aproximado
 */
export async function generatePDFClient(
  brandName: string,
  format: ExportFormat,
): Promise<void> {
  // ── 1. Esperar a que todas las web fonts estén resueltas ──────────────────
  await document.fonts.ready

  // ── 2. Localizar secciones visibles en el preview ─────────────────────────
  const sectionEls = Array.from(
    document.querySelectorAll<HTMLElement>('[data-export-section]'),
  )

  if (sectionEls.length === 0) {
    throw new Error(
      'No se encontraron secciones para exportar. ' +
      'Asegurate de estar en vista de desplazamiento (no en la vista grid).',
    )
  }

  const isSlides = format === 'slides'

  const pdf = new jsPDF({
    orientation: isSlides ? 'landscape' : 'portrait',
    unit: 'pt',
    format: 'a4',
    compress: true,
  })

  const pdfW = pdf.internal.pageSize.getWidth()   // 595.28 pt
  const pdfH = pdf.internal.pageSize.getHeight()  // 841.89 pt
  let firstPage = true

  // ── 3. Capturar cada sección ───────────────────────────────────────────────
  for (const el of sectionEls) {
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,

      // Forzar viewport A4 para media-queries y text wrapping
      windowWidth:  A4_W,
      windowHeight: A4_H,

      // Dimensiones explícitas del canvas de salida
      width:  A4_W,
      height: A4_H,

      onclone: (_doc, clone) => {
        // Fijar dimensiones exactas A4 en el elemento clonado.
        // Esto elimina cualquier ancho real heredado del scroll container
        // (scrollbars, padding del padre, zoom del navegador), que es la
        // causa principal de que el texto quiebre diferente al PDF.
        Object.assign(clone.style, {
          width:     `${A4_W}px`,
          minWidth:  `${A4_W}px`,
          maxWidth:  `${A4_W}px`,
          height:    `${A4_H}px`,
          minHeight: `${A4_H}px`,
          maxHeight: `${A4_H}px`,
          overflow:  'hidden',
          transform: 'none',
          margin:    '0',
          padding:   '0',
          boxShadow: 'none',
          position:  'relative',
          top:       '0',
          left:      '0',
        })

        // Propagar también al contenedor hijo directo (la sección real)
        const inner = clone.firstElementChild as HTMLElement | null
        if (inner) {
          Object.assign(inner.style, {
            width:     `${A4_W}px`,
            minWidth:  `${A4_W}px`,
            maxWidth:  `${A4_W}px`,
            height:    `${A4_H}px`,
            transform: 'none',
          })
        }
      },
    })

    if (canvas.width === 0 || canvas.height === 0) continue

    // PNG: sin pérdida de calidad → letras nítidas sin artefactos de compresión
    const imgData = canvas.toDataURL('image/png')

    if (!firstPage) pdf.addPage()
    firstPage = false

    // Llenar la página A4 exacta (no ratio aproximado)
    pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH, undefined, 'FAST')
  }

  const slug =
    brandName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') ||
    'cliente'
  const suffix = isSlides ? 'slides' : 'propuesta'
  pdf.save(`clash-${suffix}-${slug}.pdf`)
}
