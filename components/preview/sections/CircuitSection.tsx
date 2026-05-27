export default function CircuitSection() {
  const steps = [
    {
      number: '01',
      color: '#dc2626',
      title: 'Carga',
      description: 'Cargá promociones desde la marca, por sucursal o en lote. Control total sobre qué se comunica y cuándo.',
      mockup: (
        <div style={{
          background: '#fff', borderRadius: 8, border: '1px solid #ebebeb',
          overflow: 'hidden', marginTop: 'auto',
        }}>
          {/* Header */}
          <div style={{ padding: '10px 14px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#374151', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Promociones activas</span>
            <span style={{ fontSize: 9, color: '#9ca3af' }}>3 de 8</span>
          </div>
          {/* Rows */}
          {[
            { name: 'Promo verano 2025', status: true, views: '2.4K' },
            { name: 'Descuento ICBC', status: true, views: '1.8K' },
            { name: 'Combo especial', status: false, views: '—' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 14px',
              borderBottom: i < 2 ? '1px solid #f8f8f8' : 'none',
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                background: item.status ? '#16a34a' : '#d1d5db',
              }} />
              <span style={{ flex: 1, fontSize: 10, color: '#374151', fontWeight: 500 }}>{item.name}</span>
              <span style={{ fontSize: 9, color: '#9ca3af', fontVariantNumeric: 'tabular-nums' }}>{item.views}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: '02',
      color: '#d97706',
      title: 'Distribución',
      description: 'Link o QR inteligente para todos los canales. Vidriera, WhatsApp, Instagram, pantallas — un único punto de salida.',
      mockup: (
        <div style={{
          background: '#fff', borderRadius: 8, border: '1px solid #ebebeb',
          overflow: 'hidden', marginTop: 'auto',
        }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid #f0f0f0' }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#374151', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Canales activos</span>
          </div>
          {[
            { channel: 'WhatsApp', reach: '1.2K', active: true },
            { channel: 'QR Mostrador', reach: '890', active: true },
            { channel: 'Instagram', reach: '2.1K', active: true },
            { channel: 'Widget Web', reach: '340', active: false },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 14px',
              borderBottom: i < 3 ? '1px solid #f8f8f8' : 'none',
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                background: item.active ? '#d97706' : '#d1d5db',
              }} />
              <span style={{ flex: 1, fontSize: 10, color: '#374151', fontWeight: 500 }}>{item.channel}</span>
              <span style={{ fontSize: 9, color: '#9ca3af', fontVariantNumeric: 'tabular-nums' }}>{item.reach}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: '03',
      color: '#dc2626',
      title: 'Interacción',
      description: 'El cliente escanea, accede y consume el beneficio. Sin apps, sin registro. Experiencia fluida en segundos.',
      mockup: (
        <div style={{
          background: '#fff', borderRadius: 8, border: '1px solid #ebebeb',
          overflow: 'hidden', marginTop: 'auto',
        }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#374151', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Top partners</span>
            <span style={{ fontSize: 9, color: '#9ca3af' }}>últimos 30 días</span>
          </div>
          {[
            { name: 'Banco ICBC', pct: 32 },
            { name: 'Mercado Pago', pct: 24 },
            { name: 'MODO', pct: 18 },
            { name: 'Naranja X', pct: 15 },
          ].map((p, i) => (
            <div key={p.name} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 14px',
              borderBottom: i < 3 ? '1px solid #f8f8f8' : 'none',
            }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: i === 0 ? '#dc2626' : '#d1d5db', width: 12 }}>{i + 1}</span>
              <span style={{ flex: 1, fontSize: 10, color: '#374151', fontWeight: 500 }}>{p.name}</span>
              <div style={{ width: 40, height: 3, background: '#f3f4f6', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: `${p.pct * 3}%`, height: '100%', background: i === 0 ? '#dc2626' : '#d1d5db', borderRadius: 2 }} />
              </div>
              <span style={{ fontSize: 9, color: '#9ca3af', width: 24, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{p.pct}%</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: '04',
      color: '#d97706',
      title: 'Optimización',
      description: 'Cada interacción genera datos accionables. Dashboard en tiempo real para decisiones estratégicas.',
      mockup: (
        <div style={{
          background: '#fff', borderRadius: 8, border: '1px solid #ebebeb',
          overflow: 'hidden', marginTop: 'auto',
        }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid #f0f0f0' }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#374151', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Estado operativo</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#f0f0f0' }}>
            {[
              { v: '12', l: 'Beneficios activos', accent: false },
              { v: '75', l: 'Sucursales', accent: true },
              { v: '1.4K', l: 'Me gusta', accent: false },
              { v: '2.5K', l: 'Cal. positivas', accent: false },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', padding: '12px 14px' }}>
                <p style={{ fontSize: 16, fontWeight: 800, color: item.accent ? '#dc2626' : '#0d0d0f', lineHeight: 1 }}>{item.v}</p>
                <p style={{ fontSize: 8, color: '#9ca3af', marginTop: 4, fontWeight: 500 }}>{item.l}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <div style={{
      background: '#fff',
      height: 1123,
      padding: '56px 60px 52px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 36, flexShrink: 0 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#dc2626',
          letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>
          Cómo funciona
        </span>
        <h2 style={{
          fontSize: 44, fontWeight: 900, color: '#0d0d0f',
          marginTop: 16, lineHeight: 1.08, letterSpacing: '-1px',
        }}>
          El circuito completo
        </h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 14, maxWidth: 400, margin: '14px auto 0', lineHeight: 1.7 }}>
          Desde la carga hasta la optimización — un flujo continuo y medible.
        </p>
      </div>

      {/* 2×2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>
        {steps.map((step) => (
          <div key={step.number} style={{
            background: '#fafafa',
            borderRadius: 12,
            border: '1px solid #ebebeb',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            {/* Step badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 28, height: 28, borderRadius: 8,
                background: step.color, color: '#fff',
                fontSize: 11, fontWeight: 800,
              }}>
                {step.number}
              </span>
            </div>
            <h3 style={{ fontWeight: 800, color: '#0d0d0f', fontSize: 16, marginTop: 2 }}>{step.title}</h3>
            <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.65 }}>{step.description}</p>
            {step.mockup}
          </div>
        ))}
      </div>
    </div>
  )
}
