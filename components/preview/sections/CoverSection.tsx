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
      {/* Glow muy sutil — acento, no dominante */}
      <div style={{
        position: 'absolute', top: -160, right: -160,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '36px 60px 0', position: 'relative', zIndex: 1,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/clash-logo.svg" alt="Clash" style={{ height: 20, width: 'auto', opacity: 0.9 }} />
        <span style={{
          fontSize: 10, color: '#2a2f38', fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>
          Propuesta Comercial
        </span>
      </div>

      {/* Main content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '60px 80px', position: 'relative', zIndex: 1, textAlign: 'center',
      }}>
        {/* Brand logo */}
        {effectiveLogo && (
          <div style={{
            marginBottom: 44, padding: '16px 40px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={effectiveLogo}
              alt={brand.name}
              style={{ height: 40, maxWidth: 180, objectFit: 'contain', display: 'block', margin: '0 auto' }}
            />
          </div>
        )}

        {/* Divider */}
        <div style={{ width: 40, height: 2, background: '#dc2626', borderRadius: 1, marginBottom: 36 }} />

        {/* Label */}
        <p style={{
          fontSize: 10, fontWeight: 600, color: '#2a2f38',
          letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 20,
        }}>
          Propuesta para
        </p>

        {/* Brand name */}
        {brand.name ? (
          <h1 style={{
            fontSize: 52, fontWeight: 900, color: '#f1f1f1',
            lineHeight: 1.05, marginBottom: 16, letterSpacing: '-1.5px',
          }}>
            {brand.name}
          </h1>
        ) : (
          <h1 style={{
            fontSize: 52, fontWeight: 900, color: '#2a2f38',
            lineHeight: 1.05, marginBottom: 16, letterSpacing: '-1.5px', fontStyle: 'italic',
          }}>
            [Empresa]
          </h1>
        )}

        {brand.operationType && (
          <p style={{ color: '#5a6374', fontSize: 14 }}>{brand.operationType}</p>
        )}
      </div>

      {/* Bottom footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', zIndex: 1,
      }}>
        <span style={{ fontSize: 10, color: '#2a2f38' }}>{today}</span>
        <span style={{ fontSize: 10, color: '#2a2f38', letterSpacing: '0.05em' }}>clash.app</span>
      </div>
    </div>
  )
}
