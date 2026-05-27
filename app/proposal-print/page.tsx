import CoverSection     from '@/components/preview/sections/CoverSection'
import ConceptSection   from '@/components/preview/sections/ConceptSection'
import SolutionSection  from '@/components/preview/sections/SolutionSection'
import CircuitSection   from '@/components/preview/sections/CircuitSection'
import DistribSection   from '@/components/preview/sections/DistribSection'
import AnalyticsSection from '@/components/preview/sections/AnalyticsSection'
import PlansSection     from '@/components/preview/sections/PlansSection'
import CaseSection      from '@/components/preview/sections/CaseSection'
import ClientViewSection from '@/components/preview/sections/ClientViewSection'
import { decodeConfig } from '@/lib/config-encoder'
import { getRenderConfig } from '@/lib/render-cache'

export default function ProposalPrintPage({
  searchParams,
}: {
  searchParams: { d?: string; token?: string; fmt?: string }
}) {
  let config: any = null

  if (searchParams.d) {
    try {
      config = decodeConfig(searchParams.d)
    } catch {
      return <div style={{ padding: 32, color: '#dc2626' }}>Error al decodificar la propuesta</div>
    }
  } else if (searchParams.token) {
    config = getRenderConfig(searchParams.token)
    if (!config) return <div style={{ padding: 32, color: '#dc2626' }}>Token inválido o expirado</div>
  } else {
    return <div style={{ padding: 32, color: '#dc2626' }}>Configuración no especificada</div>
  }

  const format = searchParams.fmt ?? 'a4'
  const isSlides = format === 'slides'

  const enabledSections: any[] = (config.sections ?? [])
    .filter((s: any) => s.enabled)
    .sort((a: any, b: any) => a.order - b.order)

  return (
    <>
      {/* ── Print CSS — paginación exacta A4 ── */}
      <style>{`
        /* Preservar colores exactos al imprimir */
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: #fff;
          /* Ancho exacto A4 a 96dpi */
          width: ${isSlides ? 1120 : 794}px;
        }

        @page {
          size: ${isSlides ? 'A4 landscape' : 'A4 portrait'};
          margin: 0mm;
        }

        @media print {
          html, body {
            width: ${isSlides ? 1120 : 794}px;
            margin: 0;
          }

          /* Cada sección = una hoja exacta */
          .print-section {
            page-break-before: always;
            break-before: page;
            page-break-after: always;
            break-after: page;
            /* Contener overflow estrictamente */
            overflow: hidden;
            position: relative;
          }

          .print-section:first-child {
            page-break-before: avoid;
            break-before: avoid;
          }
        }

        /* Fuente del sistema como fallback limpio */
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      {/* ── Secciones ── */}
      <div style={{ margin: 0, padding: 0, background: '#fff' }}>
        {enabledSections.map((section) => {
          const sectionEl = (() => {
            switch (section.id) {
              case 'cover':     return <CoverSection brand={config.brand} />
              case 'concept':   return <ConceptSection />
              case 'solution':  return <SolutionSection />
              case 'circuit':   return <CircuitSection />
              case 'distrib':   return <DistribSection />
              case 'analytics': return <AnalyticsSection />
              case 'plans':     return <PlansSection plans={config.plans ?? []} proposalType={config.proposalType} promotion={config.promotion} />
              case 'clientview': return <ClientViewSection />
              case 'case':       return <CaseSection />
              default:           return null
            }
          })()

          if (!sectionEl) return null

          return (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="print-section"
            >
              {sectionEl}
            </div>
          )
        })}
      </div>
    </>
  )
}
