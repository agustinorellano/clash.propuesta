// Caso real Burger King Argentina — extraído directamente de Clash Conecta

export default function CaseSection() {
  const stats = [
    { value: '120+', label: 'locales activos' },
    { value: '4',    label: 'formatos físicos' },
    { value: '100%', label: 'on-brand' },
  ]

  const materials = [
    { name: 'QR personalizado',    sub: 'Identidad BK × Clash' },
    { name: 'Cartel de mostrador', sub: 'Soporte acrílico'      },
    { name: 'Sticker de mesa',     sub: 'Autoadhesivo circular' },
    { name: 'Póster enmarcado',    sub: 'Salón y punto de venta'},
  ]

  // BK brand colors
  const BK_ORANGE = '#D62300'
  const BK_AMBER  = '#FF8C00'

  return (
    <div style={{ background: '#0f0f11', padding: '56px 48px' }}>

      {/* ── Badge ── */}
      <div style={{ marginBottom: 24 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(214,35,0,0.15)', color: BK_ORANGE,
          fontSize: 10, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          padding: '5px 12px', borderRadius: 999,
          border: `1px solid rgba(214,35,0,0.25)`,
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            style={{ width: 11, height: 11 }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Caso Real
        </span>
      </div>

      {/* ── Header row: title + stats ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          {/* BK logo placeholder + title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/brands/bk-logo.png"
              alt="Burger King"
              style={{ height: 36, width: 'auto', objectFit: 'contain' }}
            />
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: 0 }}>
                Burger King Argentina
              </h2>
              <p style={{ color: '#6b7280', fontSize: 12, marginTop: 3 }}>
                Cadena de fast food — +120 locales en Argentina
              </p>
            </div>
          </div>
          <p style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.65, maxWidth: 440 }}>
            Implementación personalizada de materiales físicos de comunicación de beneficios
            para más de 120 locales en todo el país.
          </p>
        </div>

        {/* Stats strip */}
        <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              textAlign: 'center',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: '14px 18px', minWidth: 70,
            }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: BK_ORANGE }}>{s.value}</div>
              <div style={{ fontSize: 10, color: '#6b7280', marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Context + Solution cards ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>
        {/* Context */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14, padding: '20px 22px',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: 10, fontWeight: 700,
            color: '#6b7280', letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: 10,
          }}>
            El contexto
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#f3f4f6', marginBottom: 8 }}>
            Escala nacional, identidad local
          </h3>
          <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.65 }}>
            BK Argentina opera más de 120 locales con la necesidad de mantener coherencia visual
            y comunicar beneficios específicos por sucursal de forma ágil y autogestionable.
          </p>
        </div>

        {/* Solution */}
        <div style={{
          background: 'rgba(214,35,0,0.06)',
          border: `1px solid rgba(214,35,0,0.2)`,
          borderRadius: 14, padding: '20px 22px',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: 10, fontWeight: 700,
            color: BK_ORANGE, letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: 10,
          }}>
            Solución implementada
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#f3f4f6', marginBottom: 10 }}>
            Materiales físicos BK × Clash
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {materials.map((m, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={BK_ORANGE} strokeWidth="2.5"
                  style={{ width: 13, height: 13, flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span style={{ fontSize: 12, color: '#d1d5db' }}>
                  <strong style={{ color: '#f3f4f6', fontWeight: 600 }}>{m.name}</strong>
                  {' — '}{m.sub}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── QR + Physical materials showcase ── */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16, padding: '24px',
        display: 'flex', alignItems: 'center', gap: 28,
      }}>
        {/* QR visual */}
        <div style={{ flexShrink: 0, textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/qr-bk-sticker.png"
            alt="QR Burger King × Clash"
            style={{ width: 110, height: 'auto', objectFit: 'contain', borderRadius: 10 }}
          />
          <div style={{ fontSize: 10, color: '#6b7280', marginTop: 8, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            QR personalizado
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, background: 'rgba(255,255,255,0.08)', alignSelf: 'stretch', flexShrink: 0 }} />

        {/* Right: headline + material cards */}
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: 'rgba(214,35,0,0.12)', color: BK_ORANGE,
            fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '3px 10px', borderRadius: 999, marginBottom: 10,
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ width: 10, height: 10 }}>
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <path d="M14 14h.01M18 14h.01M14 18h.01M18 18h.01"/>
            </svg>
            Implementación física
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#f3f4f6', marginBottom: 6 }}>
            El mismo material, tres aplicaciones reales
          </h3>
          <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 14, lineHeight: 1.55 }}>
            Diseño "Tus promos acá" aplicado en cada punto de contacto dentro del local.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Cartel de mostrador', 'Sticker de mesa', 'Póster enmarcado'].map((label, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8, padding: '6px 12px',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={BK_AMBER} strokeWidth="2.5"
                  style={{ width: 11, height: 11, flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span style={{ fontSize: 11, color: '#d1d5db', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
