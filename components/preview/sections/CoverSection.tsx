import { ProposalConfig } from '@/lib/types'

interface CoverSectionProps {
  brand: ProposalConfig['brand']
}

export default function CoverSection({ brand }: CoverSectionProps) {
  const today = new Date().toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const effectiveLogo = brand.logoBase64 || brand.logoUrl

  return (
    <div
      className="bg-[#0f0f11] text-white flex flex-col items-center justify-center relative"
      style={{ padding: '72px 48px', minHeight: 480 }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: 'absolute', top: 0, right: 0,
          width: 360, height: 360,
          background: 'radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0,
          width: 280, height: 280,
          background: 'radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Clash logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/clash-logo.svg"
          alt="Clash"
          style={{ width: 220, marginBottom: 36 }}
        />

        {/* Brand logo */}
        {effectiveLogo && (
          <div style={{ marginBottom: 32 }}>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '16px 32px',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={effectiveLogo}
                alt={brand.name}
                style={{ maxHeight: 48, maxWidth: 180, objectFit: 'contain', display: 'block', margin: '0 auto' }}
              />
            </div>
          </div>
        )}

        {/* Separator */}
        <div style={{ width: 40, height: 2, background: '#dc2626', marginBottom: 20 }} />

        {/* Label */}
        <p style={{ color: '#6b7280', fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 16 }}>
          Propuesta Comercial
        </p>

        {/* Brand name */}
        {brand.name ? (
          <h1 style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.1 }}>{brand.name}</h1>
        ) : (
          <h1 style={{ fontSize: 36, fontWeight: 800, color: '#374151', marginBottom: 8, lineHeight: 1.1, fontStyle: 'italic' }}>[Nombre de empresa]</h1>
        )}

        {brand.operationType && (
          <p style={{ color: '#9ca3af', fontSize: 15, marginBottom: 6 }}>{brand.operationType}</p>
        )}
        {brand.branches > 1 && (
          <p style={{ color: '#6b7280', fontSize: 13 }}>{brand.branches} sucursales</p>
        )}

        {/* Date */}
        <div style={{ marginTop: 48, color: '#4b5563', fontSize: 11 }}>{today}</div>
      </div>
    </div>
  )
}
