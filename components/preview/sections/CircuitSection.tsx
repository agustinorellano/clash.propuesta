export default function CircuitSection() {
  const steps = [
    {
      number: '01',
      color: '#ef4444',
      title: 'Carga',
      description: 'Cargá promociones desde la marca, por sucursal o en lote. Control total sobre qué se comunica y cuándo.',
      mockup: (
        <div style={{ background: '#f9fafb', borderRadius: 12, padding: 16, border: '1px solid #f3f4f6', marginTop: 'auto' }}>
          {[true, false, false].map((active, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: i < 2 ? 10 : 0 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', flexShrink: 0, background: active ? '#ef4444' : '#e5e7eb' }} />
              <div style={{ flex: 1, height: 7, borderRadius: 4, background: active ? '#fee2e2' : '#f3f4f6' }} />
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={active ? '#ef4444' : '#d1d5db'} strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
            <span style={{ fontSize: 9, color: '#9ca3af' }}>Subiendo promo...</span>
            <div style={{ flex: 1, height: 4, background: '#f3f4f6', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: '65%', height: '100%', background: '#ef4444', borderRadius: 4 }} />
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      color: '#f59e0b',
      title: 'Distribución',
      description: 'Link o QR inteligente para todos los canales. Vidriera, WhatsApp, Instagram, pantallas digitales — un solo punto de salida.',
      mockup: (
        <div style={{ background: '#f9fafb', borderRadius: 12, padding: 16, border: '1px solid #f3f4f6', marginTop: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 12 }}>
            {['WA', 'QR', 'IG', 'WEB', 'APP', '+3'].map((label, i) => (
              <div key={i} style={{ height: 28, background: '#fff', borderRadius: 7, border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, color: '#6b7280' }}>
                {label}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{ background: '#ef4444', color: '#fff', fontSize: 9, fontWeight: 900, padding: '5px 18px', borderRadius: 999 }}>PROMO ACTIVA</span>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      color: '#ef4444',
      title: 'Interacción',
      description: 'El cliente escanea, accede y consume el beneficio. Sin apps, sin registro. Experiencia fluida en segundos.',
      mockup: (
        <div style={{ background: '#f9fafb', borderRadius: 12, padding: 14, border: '1px solid #f3f4f6', marginTop: 'auto' }}>
          <p style={{ fontSize: 8, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Top Partners</p>
          {[
            { name: 'ICBC', pct: 32 },
            { name: 'MP',   pct: 24 },
            { name: 'MODO', pct: 18 },
          ].map((p) => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <span style={{ fontSize: 8, fontWeight: 700, color: '#6b7280', width: 24 }}>{p.name}</span>
              <div style={{ flex: 1, height: 6, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: `${p.pct * 2.8}%`, height: '100%', background: '#ef4444', borderRadius: 4 }} />
              </div>
              <span style={{ fontSize: 8, color: '#9ca3af', width: 20, textAlign: 'right' }}>{p.pct}%</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: '04',
      color: '#f59e0b',
      title: 'Optimización',
      description: 'Cada interacción genera datos accionables. Dashboard en tiempo real para tomar decisiones estratégicas.',
      mockup: (
        <div style={{ background: '#f9fafb', borderRadius: 12, padding: 14, border: '1px solid #f3f4f6', marginTop: 'auto' }}>
          <p style={{ fontSize: 8, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Dashboard</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
            {[{ v: '12', l: 'Activos', red: false }, { v: '75', l: 'Sucursales', red: true }].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '8px 10px', border: '1px solid #f3f4f6' }}>
                <p style={{ fontSize: 18, fontWeight: 900, color: item.red ? '#ef4444' : '#111827', lineHeight: 1 }}>{item.v}</p>
                <p style={{ fontSize: 8, color: '#9ca3af', marginTop: 3 }}>{item.l}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#111827', borderRadius: 8, padding: '8px 10px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#fff' }}>1.4K 🔥</span>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#fff' }}>2.5K ⭐</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div style={{
      background: '#fff',
      height: 1123,
      padding: '72px 60px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#ef4444', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
          Cómo funciona
        </span>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#111827', marginTop: 16, lineHeight: 1.1, letterSpacing: '-1px' }}>
          El circuito completo
        </h2>
        <p style={{ color: '#6b7280', fontSize: 15, marginTop: 16, maxWidth: 440, margin: '16px auto 0' }}>
          Desde la carga hasta la optimización — un flujo continuo y medible.
        </p>
      </div>

      {/* 2×2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: 1 }}>
        {steps.map((step) => (
          <div key={step.number} style={{
            background: '#fff',
            borderRadius: 20,
            border: '1px solid #f3f4f6',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}>
            {/* Step badge */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 36, height: 36, borderRadius: 10,
              background: step.color, color: '#fff',
              fontSize: 12, fontWeight: 900,
            }}>
              {step.number}
            </span>
            <h3 style={{ fontWeight: 800, color: '#111827', fontSize: 18, marginTop: 4 }}>{step.title}</h3>
            <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.65 }}>{step.description}</p>
            {step.mockup}
          </div>
        ))}
      </div>
    </div>
  )
}
