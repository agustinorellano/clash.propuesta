import { decodeConfig } from '@/lib/config-encoder'
import { getRenderConfig } from '@/lib/render-cache'
import CoverSection    from '@/components/preview/sections/CoverSection'
import ConceptSection  from '@/components/preview/sections/ConceptSection'
import SolutionSection from '@/components/preview/sections/SolutionSection'
import CircuitSection  from '@/components/preview/sections/CircuitSection'
import DistribSection  from '@/components/preview/sections/DistribSection'
import AnalyticsSection from '@/components/preview/sections/AnalyticsSection'
import PlansSection    from '@/components/preview/sections/PlansSection'
import CaseSection     from '@/components/preview/sections/CaseSection'

export default function ProposalPrintPage({
  searchParams,
}: {
  searchParams: { d?: string; token?: string; fmt?: string }
}) {
  let config: any = null

  // Primary: URL-encoded config (new approach, works on Vercel)
  if (searchParams.d) {
    try {
      config = decodeConfig(searchParams.d)
    } catch {
      return <div className="p-8 text-red-600">Error al decodificar la propuesta</div>
    }
  }
  // Legacy fallback: tmpdir token (works in local dev)
  else if (searchParams.token) {
    config = getRenderConfig(searchParams.token)
    if (!config) return <div className="p-8 text-red-600">Token inválido o expirado</div>
  }
  else {
    return <div className="p-8 text-red-600">Configuración no especificada</div>
  }

  const format = searchParams.fmt ?? 'a4'

  const enabledSections: any[] = (config.sections ?? [])
    .filter((s: any) => s.enabled)
    .sort((a: any, b: any) => a.order - b.order)

  // Slides format: wider container, each section acts as a slide
  const wrapperStyle: React.CSSProperties = {
    margin: 0,
    padding: 0,
    background: '#fff',
    ...(format === 'slides' ? { width: 1120, overflow: 'hidden' } : {}),
  }

  return (
    <div style={wrapperStyle}>
      {enabledSections.map((section) => {
        const id = `section-${section.id}`

        const sectionEl = (() => {
          switch (section.id) {
            case 'cover':     return <CoverSection brand={config.brand} />
            case 'concept':   return <ConceptSection />
            case 'solution':  return <SolutionSection />
            case 'circuit':   return <CircuitSection />
            case 'distrib':   return <DistribSection />
            case 'analytics': return <AnalyticsSection />
            case 'plans':     return <PlansSection plans={config.plans ?? []} />
            case 'case':      return <CaseSection />
            default:          return null
          }
        })()

        if (!sectionEl) return null

        return (
          <div
            key={id}
            id={id}
            style={format === 'slides' ? {
              // Slides: ensure each section is treated as a contained slide
              pageBreakAfter: 'always',
              breakAfter: 'page',
            } : {}}
          >
            {sectionEl}
          </div>
        )
      })}
    </div>
  )
}
