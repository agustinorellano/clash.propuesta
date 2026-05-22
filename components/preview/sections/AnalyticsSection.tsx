export default function AnalyticsSection() {
  const partners = [
    { name: 'Banco ICBC',   pct: 32, color: '#0052A5', text: 'IC' },
    { name: 'Mercado Pago', pct: 24, color: '#009ee3', text: 'MP' },
    { name: 'MODO',         pct: 18, color: '#6C27BE', text: 'M'  },
    { name: 'Naranja X',    pct: 15, color: '#FF6200', text: 'NX' },
    { name: 'Personal Pay', pct: 11, color: '#5C2D91', text: 'PP' },
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
    { label: 'Masc.', pct: 55, color: '#ef4444'  },
    { label: 'Fem.',  pct: 35, color: '#f59e0b'  },
    { label: 'Otros', pct: 10, color: '#4b5563'  },
  ]

  return (
    <div style={{ background: '#0a0a0c', padding: '56px 48px' }}>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
          borderRadius: 999, padding: '5px 14px', marginBottom: 18,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#ef4444', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Analytics</span>
        </div>
        <h2 style={{ fontSize: 40, fontWeight: 900, color: '#fff', marginBottom: 8 }}>Tu Dashboard</h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 6 }}>Tené un seguimiento de tu negocio</p>
        <p style={{ fontSize: 13, fontWeight: 600 }}>
          <span style={{ color: '#ef4444' }}>Promociones → Interacción → Datos → Optimización</span>
          <span style={{ color: '#374151' }}> · Un sistema vivo</span>
        </p>
      </div>

      {/* 3-column dashboard */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>

        {/* Col 1 — Estado de operación */}
        <div style={{ background: '#111114', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', gap: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 8, fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Estado de operación</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { val: '12',  label: 'Beneficios publicados activos', red: false },
              { val: '5',   label: 'Activos por vencer en 30 días', red: true  },
              { val: '10',  label: 'Inactivos / no publicados',      red: false },
              { val: '75',  label: 'Sucursales activas',             red: true  },
              { val: '30',  label: 'QR habilitados',                 red: false },
              { val: '400', label: 'Usuarios con alertas',           red: true  },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontSize: 22, fontWeight: 900, lineHeight: 1, marginBottom: 4, color: item.red ? '#ef4444' : '#fff' }}>{item.val}</p>
                <p style={{ fontSize: 8, color: '#4b5563', lineHeight: 1.3 }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 13, fontWeight: 900, color: '#fff', marginBottom: 2 }}>1.4K</p>
              <p style={{ fontSize: 8, color: '#4b5563' }}>Me gusta</p>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 13, fontWeight: 900, color: '#fff', marginBottom: 2 }}>2.5K</p>
              <p style={{ fontSize: 8, color: '#4b5563' }}>Cal. positivas</p>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 13, fontWeight: 900, color: '#fff', marginBottom: 2 }}>120</p>
              <p style={{ fontSize: 8, color: '#4b5563' }}>Cal. negativas</p>
            </div>
          </div>
        </div>

        {/* Col 2 — Perfil del cliente */}
        <div style={{ background: '#111114', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 8, fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 18 }}>Perfil del cliente</p>

          <p style={{ fontSize: 8, fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Edad</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 22 }}>
            {ageRows.map((r) => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, color: '#6b7280', width: 30, flexShrink: 0 }}>{r.label}</span>
                <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${r.pct * 2.5}%`, height: '100%', background: r.highlight ? '#ef4444' : '#4b5563', borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 10, width: 26, textAlign: 'right', fontWeight: r.highlight ? 700 : 400, color: r.highlight ? '#ef4444' : '#6b7280' }}>{r.pct}%</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 8, fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Género</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {genderRows.map((r) => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, color: '#6b7280', width: 30, flexShrink: 0 }}>{r.label}</span>
                <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${r.pct * 1.7}%`, height: '100%', background: r.color, borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 10, color: '#6b7280', width: 26, textAlign: 'right' }}>{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 — Top Partners */}
        <div style={{ background: '#111114', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', gap: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 8, fontWeight: 700, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Top Partners por interacción
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {partners.map((p) => (
              <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 7, fontWeight: 900, color: '#fff' }}>{p.text}</span>
                </div>
                <span style={{ fontSize: 11, color: '#9ca3af', flex: 1 }}>{p.name}</span>
                <div style={{ width: 72, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${p.pct * 3}%`, height: '100%', background: '#ef4444', borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', width: 28, textAlign: 'right' }}>{p.pct}%</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{ marginTop: 'auto', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.18)', borderRadius: 12, padding: '14px 16px' }}>
            <p style={{ fontSize: 12, color: '#d1d5db', lineHeight: 1.6 }}>
              <span style={{ color: '#f87171', fontWeight: 700 }}>Los datos no son el final.</span>{' '}
              Son el punto de partida para mejorar.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
