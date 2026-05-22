import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export async function exportToPDF(elementId: string, filename: string) {
  const el = document.getElementById(elementId)
  if (!el) {
    console.error(`Element #${elementId} not found`)
    return
  }

  try {
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      allowTaint: true,
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    const pageW = pdf.internal.pageSize.getWidth()
    const pageH = pdf.internal.pageSize.getHeight()
    const canvasW = canvas.width
    const canvasH = canvas.height
    const ratio = pageW / (canvasW / 2) // scale=2 so divide by 2
    const totalPdfH = (canvasH / 2) * ratio

    let yOffset = 0
    while (yOffset < totalPdfH) {
      if (yOffset > 0) pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, -yOffset, pageW, totalPdfH)
      yOffset += pageH
    }

    pdf.save(filename)
  } catch (err) {
    console.error('PDF export failed:', err)
  }
}
