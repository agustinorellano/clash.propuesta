'use client'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import type { ExportFormat } from '@/app/api/pdf/route'

/**
 * Genera PDF directamente en el navegador capturando los elementos del preview.
 * No depende de Puppeteer ni de ningún servidor — funciona en Vercel sin restricciones.
 */
export async function generatePDFClient(
  brandName: string,
  format: ExportFormat,
): Promise<void> {
  // Busca los contenedores de sección que el ProposalPreview renderizó
  const sectionEls = Array.from(
    document.querySelectorAll<HTMLElement>('[data-export-section]'),
  )

  if (sectionEls.length === 0) {
    throw new Error('No se encontraron secciones para exportar. Asegurate de que el preview está visible.')
  }

  const isSlides = format === 'slides'

  // Orientación: portrait para A4, landscape para slides
  const pdf = new jsPDF({
    orientation: isSlides ? 'landscape' : 'portrait',
    unit: 'pt',
    format: 'a4',
    compress: true,
  })

  const pdfW = pdf.internal.pageSize.getWidth()
  let firstPage = true

  for (const el of sectionEls) {
    // html2canvas captura el elemento tal cual lo renderizó el browser
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      // Captura el elemento aunque esté fuera del viewport
      windowWidth: el.scrollWidth,
      windowHeight: el.scrollHeight,
    })

    if (canvas.width === 0 || canvas.height === 0) continue

    const imgData = canvas.toDataURL('image/jpeg', 0.92)
    // Escala proporcional al ancho del PDF
    const ratio = canvas.height / canvas.width
    const pageH = pdfW * ratio

    if (!firstPage) pdf.addPage()
    firstPage = false

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pageH, undefined, 'FAST')
  }

  const slug = brandName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'cliente'
  const suffix = isSlides ? 'slides' : 'propuesta'
  pdf.save(`clash-${suffix}-${slug}.pdf`)
}
