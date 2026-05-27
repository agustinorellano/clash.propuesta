// ClientViewSection — "¿Cómo ven mis clientes las promociones?"
// Usa screenshots reales de Clash Conecta (cv2-promo.jpg / cv2-micrositio.png)
import React from 'react'

export default function ClientViewSection() {
  const PAGE_W = 794
  const PAGE_H = 1123

  const BG  = '#0d0d0f'
  const RED = '#dc2626'

  // ── Share icon SVGs ───────────────────────────────────────────────────────
  const wspSvg = (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
  const igSvg = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" style={{ width: 17, height: 17 }}>
      <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
  const lnkSvg = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" style={{ width: 17, height: 17 }}>
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  )
  const qrSvg = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" style={{ width: 17, height: 17 }}>
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="5.5" y="5.5" width="2" height="2" fill="currentColor" stroke="none" />
      <rect x="16.5" y="5.5" width="2" height="2" fill="currentColor" stroke="none" />
      <rect x="5.5" y="16.5" width="2" height="2" fill="currentColor" stroke="none" />
      <line x1="14" y1="14" x2="17" y2="14" /><line x1="21" y1="14" x2="21" y2="17" />
      <line x1="14" y1="21" x2="17" y2="21" /><line x1="17" y1="17" x2="21" y2="17" /><line x1="17" y1="21" x2="17" y2="17" />
    </svg>
  )
  const phoneSvg = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 15, height: 15 }}>
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
  const shareSvg = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 15, height: 15 }}>
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )

  const btnStyle: React.CSSProperties = {
    width: 38, height: 38, borderRadius: '50%',
    border: '1.5px solid rgba(255,255,255,0.15)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(255,255,255,0.06)',
    color: 'rgba(255,255,255,0.7)',
    flexShrink: 0,
  }

  const cardStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: 18,
    border: '1px solid rgba(255,255,255,0.07)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.55), 0 3px 10px rgba(0,0,0,0.3)',
    overflow: 'hidden',
  }

  function LabelBlock({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 9,
          background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: RED, flexShrink: 0, marginTop: 1,
        }}>
          {icon}
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{title}</div>
          <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>{sub}</div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      width: PAGE_W, height: PAGE_H,
      background: BG,
      position: 'relative', overflow: 'hidden',
      fontFamily: "'Inter', system-ui, sans-serif",
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '48px 64px 44px',
      boxSizing: 'border-box',
    }}>

      {/* Dot grid texture */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <pattern id="cv2-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.025)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cv2-dots)" />
      </svg>

      {/* Red left bar */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: RED }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 40, zIndex: 1, flexShrink: 0, width: '100%' }}>
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '2.5px',
          color: RED, textTransform: 'uppercase', marginBottom: 12,
        }}>
          DISTRIBUCIÓN DE CONTENIDO
        </p>
        <h3 style={{
          fontSize: 30, fontWeight: 900, letterSpacing: '-1.2px',
          color: '#fff', lineHeight: 1.1, marginBottom: 12,
        }}>
          ¿Cómo ven mis clientes las promociones?
        </h3>
        <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 460, margin: '0 auto' }}>
          Las promociones pueden visualizarse desde múltiples formatos según la estrategia de distribución.
        </p>
      </div>

      {/* Two-column grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22,
        maxWidth: 548, width: '100%', zIndex: 1, flexShrink: 0,
      }}>

        {/* Col 1 — cv2-promo.jpg */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={cardStyle}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cv2-promo.jpg"
              alt="Promoción individual — Clash App"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
          {/* Share buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <div style={btnStyle}>{wspSvg}</div>
            <div style={btnStyle}>{igSvg}</div>
            <div style={btnStyle}>{lnkSvg}</div>
            <div style={btnStyle}>{qrSvg}</div>
          </div>
          <LabelBlock
            icon={phoneSvg}
            title="Desde el micrositio de tu marca"
            sub="Tus clientes encuentran todas las promociones disponibles organizadas por comercios, bancos y categorías."
          />
        </div>

        {/* Col 2 — cv2-micrositio.png */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={cardStyle}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cv2-micrositio.png"
              alt="Micrositio de marca — Clash App"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
          {/* Spacer to align label row with col 1 */}
          <div style={{ height: 52, flexShrink: 0 }} />
          <LabelBlock
            icon={shareSvg}
            title="Promoción individual para compartir"
            sub="Cada beneficio puede compartirse de forma simple y rápida por WhatsApp, redes sociales, QR o link directo."
          />
        </div>

      </div>

      {/* Footer */}
      <p style={{
        marginTop: 36, fontSize: 11.5,
        color: 'rgba(255,255,255,0.28)', textAlign: 'center',
        zIndex: 1, flexShrink: 0,
      }}>
        Clash conecta marcas y personas con experiencias que generan valor real.
      </p>

    </div>
  )
}
