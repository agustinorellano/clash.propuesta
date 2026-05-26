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

  const BK_RED = '#D62300'

  return (
    <div style={{
      background: '#0f0f11',
      minHeight: 1123,
      padding: '72px 60px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(214,35,0,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Badge */}
      <div style={{ marginBottom: 36, position: 'relative', zIndex: 1 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(214,35,0,0.12)', color: BK_RED,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
          padding: '6px 14px', borderRadius: 999, border: `1px solid rgba(214,35,0,0.22)`,
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 11, height: 11 }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Caso Real
        </span>
      </div>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 32, marginBottom: 40, position: 'relative', zIndex: 1 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/brands/bk-logo.png" alt="Burger King" style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.1, margin: 0 }}>
                Burger King Argentina
              </h2>
              <p style={{ color: '#6b7280', fontSize: 13, marginTop: 4 }}>Cadena de fast food · +120 locales</p>
            </div>
          </div>
          <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.65, maxWidth: 460 }}>
            Implementación personalizada de materiales físicos para más de 120 locales en todo el país.
          </p>
        </div>

        {/* Stats strip */}
        <div style={{ display: 'flex', gap: 0, flexShrink: 0, border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '16px 22px', background: 'rgba(255,255,255,0.03)', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none', textAlign: 'center', minWidth: 80 }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: BK_RED }}>{s.value}</div>
              <div style={{ fontSize: 9, color: '#6b7280', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Context + Solution */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20, position: 'relative', zIndex: 1 }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '24px 24px' }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>El contexto</p>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f3f4f6', marginBottom: 10 }}>Escala nacional, identidad local</h3>
          <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.65 }}>
            BK Argentina opera más de 120 locales con la necesidad de mantener coherencia visual y comunicar beneficios específicos por sucursal de forma ágil y autogestionable.
          </p>
        </div>
        <div style={{ background: 'rgba(214,35,0,0.05)', border: `1px solid rgba(214,35,0,0.18)`, borderRadius: 16, padding: '24px 24px' }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: BK_RED, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>Solución implementada</p>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f3f4f6', marginBottom: 12 }}>Materiales físicos BK × Clash</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {materials.map((m, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={BK_RED} strokeWidth="2.5" style={{ width: 12, height: 12, flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span style={{ fontSize: 12, color: '#d1d5db' }}>
                  <strong style={{ color: '#f3f4f6', fontWeight: 600 }}>{m.name}</strong> — {m.sub}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* QR showcase */}
      <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18, padding: '28px 28px', display: 'flex', alignItems: 'center', gap: 32, position: 'relative', zIndex: 1 }}>
        {/* QR visual */}
        <div style={{ flexShrink: 0, textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/qr-bk-sticker.png" alt="QR BK × Clash" style={{ width: 120, height: 'auto', objectFit: 'contain', borderRadius: 12 }} />
          <div style={{ fontSize: 9, color: '#6b7280', marginTop: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>QR personalizado</div>
        </div>

        <div style={{ width: 1, background: 'rgba(255,255,255,0.07)', alignSelf: 'stretch', flexShrink: 0 }} />

        <div style={{ flex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: 'rgba(214,35,0,0.1)', color: BK_RED,
            fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '3px 10px', borderRadius: 999, marginBottom: 12,
          }}>
            Implementación física
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f3f4f6', marginBottom: 8 }}>
            El mismo material, tres aplicaciones reales
          </h3>
          <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 16, lineHeight: 1.6 }}>
            Diseño "Tus promos acá" aplicado en cada punto de contacto dentro del local.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Cartel de mostrador', 'Sticker de mesa', 'Póster enmarcado'].map((label) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8, padding: '6px 12px',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="2.5" style={{ width: 11, height: 11, flexShrink: 0 }}>
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
