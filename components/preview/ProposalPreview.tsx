import { ProposalConfig } from '@/lib/types'
import { renderSection }  from './renderSection'

interface ProposalPreviewProps {
  config: ProposalConfig
}

export default function ProposalPreview({ config }: ProposalPreviewProps) {
  const enabledSections = [...config.sections]
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order)

  if (enabledSections.length === 0) {
    return (
      <div style={{
        width: 794, height: 400,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        color: '#9ca3af',
        fontFamily: "'Inter', system-ui, sans-serif",
        background: 'white',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
      }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
        <p style={{ fontSize: 13 }}>Activá al menos una sección para ver la vista previa</p>
      </div>
    )
  }

  return (
    <div
      id="proposal-preview"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", width: 794 }}
    >
      {enabledSections.map((section) => (
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
          {renderSection(section.id, config)}
        </div>
      ))}
    </div>
  )
}
