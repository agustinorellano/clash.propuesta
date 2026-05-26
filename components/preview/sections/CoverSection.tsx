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
      background: '#0f0f11',
      height: 1123,
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glows */}
      <div style={{ position: 'absolute', top: -120, right: -120, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '36px 60px 0', position: 'relative', zIndex: 1 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/clash-logo.svg" alt="Clash" style={{ height: 22, width: 'auto' }} />
        <span style={{ fontSize: 10, color: '#374151', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Propuesta Comercial
        </span>
      </div>

      {/* Main content — centered */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 60px', position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Brand logo card */}
        {effectiveLogo && (
          <div style={{ marginBottom: 40, padding: '16px 40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={effectiveLogo} alt={brand.name} style={{ height: 44, maxWidth: 200, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
        )}

        {/* Divider */}
        <div style={{ width: 48, height: 3, background: '#dc2626', borderRadius: 2, marginBottom: 32 }} />

        {/* Label */}
        <p style={{ fontSize: 11, fontWeight: 700, color: '#4b5563', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 20 }}>
          Para
        </p>

        {/* Brand name */}
        {brand.name ? (
          <h1 style={{ fontSize: 56, fontWeight: 900, color: '#ffffff', lineHeight: 1.05, marginBottom: 16, letterSpacing: '-1.5px' }}>
            {brand.name}
          </h1>
        ) : (
          <h1 style={{ fontSize: 56, fontWeight: 900, color: '#374151', lineHeight: 1.05, marginBottom: 16, letterSpacing: '-1.5px', fontStyle: 'italic' }}>
            [Empresa]
          </h1>
        )}

        {brand.operationType && (
          <p style={{ color: '#6b7280', fontSize: 15, marginBottom: 8 }}>{brand.operationType}</p>
        )}
        {brand.branches > 1 && (
          <p style={{ color: '#4b5563', fontSize: 13 }}>{brand.branches} sucursales</p>
        )}

      </div>

      {/* Bottom footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 60px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 10, color: '#374151' }}>{today}</span>
        <span style={{ fontSize: 10, color: '#374151' }}>clash.app</span>
      </div>
    </div>
  )
}
