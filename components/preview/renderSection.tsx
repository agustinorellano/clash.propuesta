import { ProposalConfig } from '@/lib/types'
import CoverSection      from './sections/CoverSection'
import ConceptSection    from './sections/ConceptSection'
import SolutionSection   from './sections/SolutionSection'
import CircuitSection    from './sections/CircuitSection'
import DistribSection    from './sections/DistribSection'
import AnalyticsSection  from './sections/AnalyticsSection'
import PlansSection      from './sections/PlansSection'
import CaseSection       from './sections/CaseSection'
import ClientViewSection from './sections/ClientViewSection'

export function renderSection(id: string, config: ProposalConfig) {
  switch (id) {
    case 'cover':       return <CoverSection brand={config.brand} />
    case 'concept':     return <ConceptSection />
    case 'solution':    return <SolutionSection />
    case 'circuit':     return <CircuitSection />
    case 'distrib':     return <DistribSection />
    case 'analytics':   return <AnalyticsSection />
    case 'plans':       return <PlansSection plans={config.plans} proposalType={config.proposalType} promotion={config.promotion} />
    case 'clientview':  return <ClientViewSection />
    case 'case':        return <CaseSection />
    default:            return null
  }
}
