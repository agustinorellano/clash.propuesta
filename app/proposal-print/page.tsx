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
  searchParams: { token?: string }
}) {
  const token = searchParams.token
  if (!token) return <div className="p-8 text-red-600">Missing token</div>

  const config = getRenderConfig(token)
  if (!config) return <div className="p-8 text-red-600">Token inválido o expirado</div>

  const enabledSections: any[] = (config.sections ?? [])
    .filter((s: any) => s.enabled)
    .sort((a: any, b: any) => a.order - b.order)

  return (
    <div style={{ margin: 0, padding: 0, background: 'white' }}>
      {enabledSections.map((section) => {
        const id = `section-${section.id}`
        switch (section.id) {
          case 'cover':
            return <div key={id} id={id}><CoverSection brand={config.brand} /></div>
          case 'concept':
            return <div key={id} id={id}><ConceptSection /></div>
          case 'solution':
            return <div key={id} id={id}><SolutionSection /></div>
          case 'circuit':
            return <div key={id} id={id}><CircuitSection /></div>
          case 'distrib':
            return <div key={id} id={id}><DistribSection /></div>
          case 'analytics':
            return <div key={id} id={id}><AnalyticsSection /></div>
          case 'plans':
            return <div key={id} id={id}><PlansSection plans={config.plans ?? []} /></div>
          case 'case':
            return <div key={id} id={id}><CaseSection /></div>
          default:
            return null
        }
      })}
    </div>
  )
}
