import { ProposalConfig } from '@/lib/types'

interface CustomSectionProps {
  sectionId: string
  config:    ProposalConfig
}

export default function CustomSection({ sectionId, config }: CustomSectionProps) {
  const section = config.sections.find((s) => s.id === sectionId)
  const custom  = section?.custom ?? { title: '', subtitle: '', body: '' }

  const isEmpty = !custom.title && !custom.body

  return (
    <div
      style={{
        width: 794, height: 1123,
        boxSizing: 'border-box',
        background: '#fff',
        padding: '72px 64px 64px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: 3, background: '#dc2626',
      }} />

      {/* Dot grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.6) 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.6) 85%, transparent 100%)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>

        {isEmpty ? (
          /* Empty state placeholder */
          <div style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12,
            color: '#d1d5db',
          }}>
            <div style={{ fontSize: 40 }}>✏️</div>
            <p style={{ fontSize: 13, fontWeight: 500 }}>Sección personalizada vacía</p>
            <p style={{ fontSize: 11, color: '#e5e7eb' }}>Editá el título y contenido desde el panel de Secciones</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{ marginBottom: 40 }}>
              {custom.subtitle && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  marginBottom: 14,
                }}>
                  <div style={{ width: 18, height: 2, background: '#dc2626', borderRadius: 1 }} />
                  <span style={{
                    fontSize: 10, fontWeight: 700,
                    color: '#dc2626', letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}>
                    {custom.subtitle}
                  </span>
                </div>
              )}

              <h1 style={{
                fontSize: 36, fontWeight: 800,
                color: '#0d0d0f', lineHeight: 1.15,
                letterSpacing: '-0.8px', margin: 0,
                maxWidth: 580,
              }}>
                {custom.title}
              </h1>
            </div>

            {/* Divider */}
            <div style={{
              width: 40, height: 2, background: '#e5e7eb', borderRadius: 1, marginBottom: 36,
            }} />

            {/* Body text */}
            <div style={{
              flex: 1,
              fontSize: 14, lineHeight: 1.78,
              color: '#374151',
              whiteSpace: 'pre-wrap',
              letterSpacing: '-0.1px',
              maxWidth: 620,
            }}>
              {custom.body}
            </div>
          </>
        )}

        {/* Clash footer stamp */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          gap: 6, marginTop: 'auto', paddingTop: 32,
          opacity: 0.3,
        }}>
          <div style={{ width: 8, height: 8, background: '#dc2626', borderRadius: 2 }} />
          <span style={{ fontSize: 9, fontWeight: 800, color: '#0d0d0f', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Clash Propuesta
          </span>
        </div>
      </div>
    </div>
  )
}
