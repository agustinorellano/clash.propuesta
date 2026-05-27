import { ProposalConfig } from '@/lib/types'

interface CoverSectionProps {
  brand: ProposalConfig['brand']
}

export default function CoverSection({ brand }: CoverSectionProps) {
  const today = new Date().toLocaleDateString('es-AR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
  const effectiveLogo = brand.logoBase64 || brand.logoUrl

  return (
    <div style={{
      background: '#0d0d0f',
      height: 1123,
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── Dot grid texture ── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <pattern id="cover-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.035)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cover-dots)" />
      </svg>

      {/* ── Glow sutil ── */}
      <div style={{
        position: 'absolute', top: -160, right: -160,
        width: 520, height: 520, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* ── Barra de acento izquierda ── */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: 3, background: '#dc2626',
      }} />

      {/* ── Top bar ── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '40px 60px 0 64px', position: 'relative', zIndex: 1,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/clash-logo.svg" alt="Clash" style={{ height: 22, width: 'auto', opacity: 0.85 }} />
        <span style={{
          fontSize: 10, color: '#3a3f4a', fontWeight: 600,
          letterSpacing: '0.2em', textTransform: 'uppercase',
        }}>
          Propuesta Comercial
        </span>
      </div>

      {/* ── Main content ── */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '60px 80px', position: 'relative', zIndex: 1, textAlign: 'center',
      }}>

        {/* Brand logo — grande */}
        {effectiveLogo ? (
          <div style={{
            marginBottom: 52,
            padding: '24px 52px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 16,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={effectiveLogo}
              alt={brand.name}
              style={{ height: 64, maxWidth: 260, objectFit: 'contain', display: 'block', margin: '0 auto' }}
            />
          </div>
        ) : null}

        {/* Divider */}
        <div style={{ width: 40, height: 2, background: '#dc2626', borderRadius: 1, marginBottom: 28 }} />

        {/* "Propuesta para" */}
        <p style={{
          fontSize: 13, fontWeight: 600, color: '#6b7280',
          letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 18,
        }}>
          Propuesta para
        </p>

        {/* Brand name */}
        {brand.name ? (
          <h1 style={{
            fontSize: 64, fontWeight: 900, color: '#f1f1f1',
            lineHeight: 1.02, marginBottom: 20, letterSpacing: '-2px',
          }}>
            {brand.name}
          </h1>
        ) : (
          <h1 style={{
            fontSize: 64, fontWeight: 900, color: '#2a2f38',
            lineHeight: 1.02, marginBottom: 20, letterSpacing: '-2px', fontStyle: 'italic',
          }}>
            [Empresa]
          </h1>
        )}

        {brand.operationType && (
          <p style={{ color: '#4b5563', fontSize: 14, marginTop: 4 }}>{brand.operationType}</p>
        )}
      </div>

      {/* ── Data strip ── */}
      <div style={{
        position: 'relative', zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '20px 64px',
        display: 'grid',
        gridTemplateColumns: brand.operationType ? '1fr 1fr 1fr' : '1fr 1fr',
        gap: 24,
      }}>
        <div>
          <p style={{ fontSize: 8, fontWeight: 700, color: '#3a3f4a', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 5 }}>
            Fecha de emisión
          </p>
          <p style={{ fontSize: 11, color: '#5a6374' }}>{today}</p>
        </div>
        {brand.operationType && (
          <div>
            <p style={{ fontSize: 8, fontWeight: 700, color: '#3a3f4a', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 5 }}>
              Tipo de operación
            </p>
            <p style={{ fontSize: 11, color: '#5a6374' }}>{brand.operationType}</p>
          </div>
        )}
        <div>
          <p style={{ fontSize: 8, fontWeight: 700, color: '#3a3f4a', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 5 }}>
            Presentado por
          </p>
          <p style={{ fontSize: 11, color: '#5a6374' }}>Clash Beneficios</p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 64px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        position: 'relative', zIndex: 1,
      }}>
        <span style={{ fontSize: 10, color: '#222429' }}>{today}</span>
        <span style={{ fontSize: 10, color: '#222429', letterSpacing: '0.05em' }}>Clash Beneficios</span>
      </div>
    </div>
  )
}
