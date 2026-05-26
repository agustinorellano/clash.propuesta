export default function AnalyticsSection() {
  const partners = [
    { name: 'Banco ICBC',   pct: 32, logo: '/assets/brands/icbc.png',       bg: '#0052A5' },
    { name: 'Mercado Pago', pct: 24, logo: '/assets/brands/mercadopago.png', bg: '#009ee3' },
    { name: 'MODO',         pct: 18, logo: '/assets/brands/modo.png',        bg: '#6C27BE' },
    { name: 'Naranja X',    pct: 15, logo: '/assets/brands/naranjax.png',    bg: '#FF6200' },
    { name: 'Personal Pay', pct: 11, logo: '/assets/brands/personalpay.png', bg: '#5C2D91' },
  ]

  const ageRows = [
    { label: '<18',   pct: 3  },
    { label: '18-25', pct: 15 },
    { label: '25-35', pct: 38, highlight: true },
    { label: '35-45', pct: 32 },
    { label: '45-55', pct: 8  },
    { label: '>55',   pct: 4  },
  ]

  const genderRows = [
    { label: 'Masc.', pct: 55, color: '#ef4444' },
    { label: 'Fem.',  pct: 35, color: '#f59e0b' },
    { label: 'Otros', pct: 10, color: '#4b5563' },
  ]

  const kpis = [
    { val: '12',  label: 'Beneficios activos', red: false },
    { val: '5',   label: 'Por vencer',          red: true  },
    { val: '75',  label: 'Sucursales activas',  red: true  },
    { val: '30',  label: 'QR habilitados',      red: false },
    { val: '1.4K',label: 'Likes',               red: false },
    { val: '2.5K',label: 'Cal. positivas',      red: false },
  ]

  return (
    <div style={{
      background: '#0a0a0c',
      height: 1123,
      padding: '72px 60px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
          borderRadius: 999, padding: '6px 16px', marginBottom: 20,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#ef4444', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Analytics</span>
        </div>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-1px' }}>Tu Dashboard</h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 12 }}>
          Promociones → Interacción → Datos → Optimización
        </p>
      </div>

      {/* 3-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, flex: 1 }}>

        {/* Col 1 — KPIs */}
        <div style={{ background: '#111114', borderRadius: 18, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Estado de operación</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {kpis.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '14px 14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, marginBottom: 5, color: item.red ? '#ef4444' : '#fff' }}>{item.val}</p>
                <p style={{ fontSize: 9, color: '#4b5563', lineHeight: 1.3 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2 — Perfil del cliente */}
        <div style={{ background: '#111114', borderRadius: 18, padding: 24, border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20 }}>Perfil del cliente</p>

          <p style={{ fontSize: 8, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Edad</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {ageRows.map((r) => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, color: '#6b7280', width: 32, flexShrink: 0 }}>{r.label}</span>
                <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${r.pct * 2.5}%`, height: '100%', background: r.highlight ? '#ef4444' : '#374151', borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 10, width: 28, textAlign: 'right', fontWeight: r.highlight ? 700 : 400, color: r.highlight ? '#ef4444' : '#6b7280' }}>{r.pct}%</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 8, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Género</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {genderRows.map((r) => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, color: '#6b7280', width: 32, flexShrink: 0 }}>{r.label}</span>
                <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${r.pct * 1.7}%`, height: '100%', background: r.color, borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 10, color: '#6b7280', width: 28, textAlign: 'right' }}>{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 — Top Partners */}
        <div style={{ background: '#111114', borderRadius: 18, padding: 24, display: 'flex', flexDirection: 'column', gap: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Top Partners
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
            {partners.map((p, idx) => (
              <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: idx === 0 ? '#ef4444' : '#374151', width: 14, flexShrink: 0, textAlign: 'right' }}>
                  {idx + 1}
                </span>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={p.name} style={{ width: '75%', height: '75%', objectFit: 'contain', display: 'block' }} />
                </div>
                <span style={{ fontSize: 11, color: '#9ca3af', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
                <div style={{ width: 52, height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
                  <div style={{ width: `${p.pct * 3}%`, height: '100%', background: '#ef4444', borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: idx === 0 ? '#ef4444' : '#6b7280', width: 28, textAlign: 'right', flexShrink: 0 }}>{p.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
