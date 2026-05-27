import { ProposalConfig } from '@/lib/types'
import CoverSection from './sections/CoverSection'
import ConceptSection from './sections/ConceptSection'
import SolutionSection from './sections/SolutionSection'
import CircuitSection from './sections/CircuitSection'
import DistribSection from './sections/DistribSection'
import AnalyticsSection from './sections/AnalyticsSection'
import PlansSection from './sections/PlansSection'
import CaseSection from './sections/CaseSection'

interface ProposalPreviewProps {
  config: ProposalConfig
}

export default function ProposalPreview({ config }: ProposalPreviewProps) {
  const enabledSections = [...config.sections]
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order)

  function renderSection(id: string) {
    switch (id) {
      case 'cover':    return <CoverSection brand={config.brand} />
      case 'concept':  return <ConceptSection />
      case 'solution': return <SolutionSection />
      case 'circuit':  return <CircuitSection />
      case 'distrib':  return <DistribSection />
      case 'analytics':return <AnalyticsSection />
      case 'plans':    return <PlansSection plans={config.plans} proposalType={config.proposalType} />
      case 'case':     return <CaseSection />
      default:         return null
    }
  }

  if (enabledSections.length === 0) {
    return (
      <div
        style={{
          width: 794,
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af',
          fontFamily: "'Inter', system-ui, sans-serif",
          background: 'white',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
        <p style={{ fontSize: 13 }}>Activá al menos una sección para ver la vista previa</p>
      </div>
    )
  }

  return (
    // Cada sección es una hoja A4 independiente — sin wrapper común
    <div
      id="proposal-preview"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", width: 794 }}
    >
      {enabledSections.map((section) => (
        // Cada hoja: sombra de página, overflow contenido, separación visual
        <div
          key={section.id}
          id={`preview-section-${section.id}`}
          data-export-section
          style={{
            marginBottom: 20,
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10), 0 8px 32px rgba(0,0,0,0.08)',
          }}
        >
          {renderSection(section.id)}
        </div>
      ))}
    </div>
  )
}
