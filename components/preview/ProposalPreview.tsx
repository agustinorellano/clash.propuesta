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
      case 'cover':
        return <CoverSection brand={config.brand} />
      case 'concept':
        return <ConceptSection />
      case 'solution':
        return <SolutionSection />
      case 'circuit':
        return <CircuitSection />
      case 'distrib':
        return <DistribSection />
      case 'analytics':
        return <AnalyticsSection />
      case 'plans':
        return <PlansSection plans={config.plans} proposalType={config.proposalType} />
      case 'case':
        return <CaseSection />
      default:
        return null
    }
  }

  return (
    <div
      id="proposal-preview"
      className="bg-white shadow-xl overflow-hidden mx-auto"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", width: 794 }}
    >
      {enabledSections.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-gray-400">
          <div className="text-5xl mb-4">📄</div>
          <p className="text-sm">Activa al menos una sección para ver la vista previa</p>
        </div>
      ) : (
        enabledSections.map((section) => (
          <div key={section.id} id={`preview-section-${section.id}`} data-export-section>{renderSection(section.id)}</div>
        ))
      )}

      {/* Footer */}
      {enabledSections.length > 0 && (
        <div className="bg-[#0f0f11] px-12 py-6 flex items-center justify-between">
          <span className="text-gray-600 text-xs">
            clash.app — Infraestructura de beneficios digitales
          </span>
          <span className="text-gray-700 text-xs font-black tracking-tight">
            CL<span className="text-red-600">A</span>SH
          </span>
        </div>
      )}
    </div>
  )
}
