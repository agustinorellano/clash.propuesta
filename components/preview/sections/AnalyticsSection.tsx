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
    { label: 'Masc.', pct: 55 },
    { label: 'Fem.',  pct: 35 },
    { label: 'Otros', pct: 10 },
  ]

  const kpis = [
    { val: '12',   label: 'Beneficios activos'  },
    { val: '5',    label: 'Por vencer',     accent: true },
    { val: '75',   label: 'Sucursales activas', accent: true },
    { val: '30',   label: 'QR habilitados' },
    { val: '1.4K', label: 'Me gusta'       },
    { val: '2.5K', label: 'Cal. positivas' },
  ]

  return (
    <div style={{
      background: '#0d0d0f',
      height: 1123,
      padding: '72px 60px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#dc2626',
          letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>
          Analytics
        </span>
        <h2 style={{
          fontSize: 44, fontWeight: 900, color: '#f1f1f1',
          lineHeight: 1.08, marginTop: 16, letterSpacing: '-1px',
        }}>
          Tu Dashboard
        </h2>
        <p style={{ color: '#5a6374', fontSize: 13, marginTop: 10 }}>
          Promociones → Interacción → Datos → Optimización
        </p>
      </div>

      {/* 2-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>

        {/* Col 1 — KPIs + Partners */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* KPIs */}
          <div style={{
            background: '#111114', borderRadius: 12, padding: 20,
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <p style={{
              fontSize: 9, fontWeight: 700, color: '#374151',
              textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 16,
            }}>
              Estado de operación
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
              {kpis.map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 8,
                  padding: '12px 10px', border: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <p style={{
                    fontSize: 20, fontWeight: 900, lineHeight: 1, marginBottom: 5,
                    color: item.accent ? '#dc2626' : '#f1f1f1',
                  }}>
                    {item.val}
                  </p>
                  <p style={{ fontSize: 8, color: '#374151', lineHeight: 1.3 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Partners */}
          <div style={{
            background: '#111114', borderRadius: 12, padding: 20,
            border: '1px solid rgba(255,255,255,0.06)', flex: 1,
          }}>
            {/* Título — copia exacta de clash-conecta .dash-panel-title */}
            <p style={{
              fontSize: 9, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '1.5px', color: '#9CA3AF', marginBottom: 16,
            }}>
              Rendimiento — Top partners por interacción
            </p>

            {/* Filas — copia exacta de clash-conecta .dash-partner */}
            {partners.map((p) => (
              <div key={p.name} style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
              }}>
                {/* .dp-logo — el PNG ya trae su fondo de marca */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{
                    width: 26, height: 26,
                    objectFit: 'contain',
                    flexShrink: 0,
                  }}
                />
                {/* .dp-name */}
                <span style={{
                  fontSize: 13, color: '#f1f1f1', fontWeight: 500, flex: 1,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {p.name}
                </span>
                {/* .dp-bar-bg + .dp-bar-fill */}
                <div style={{
                  width: 72, height: 4,
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: 2, overflow: 'hidden', flexShrink: 0,
                }}>
                  <div style={{
                    width: `${p.pct * 3}%`, height: '100%',
                    background: '#DC2626', borderRadius: 2,
                  }} />
                </div>
                {/* .dp-pct */}
                <span style={{
                  fontSize: 12, fontWeight: 700, color: '#DC2626',
                  width: 28, textAlign: 'right', flexShrink: 0,
                }}>
                  {p.pct}%
                </span>
              </div>
            ))}

            {/* .dash-caption — copia exacta */}
            <div style={{
              background: '#1C1C1E', borderRadius: 10,
              padding: '14px 16px', marginTop: 4,
            }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                <strong style={{ color: '#DC2626' }}>Los datos no son el final.</strong>{' '}
                Son el punto de partida para mejorar.
              </p>
            </div>
          </div>
        </div>

        {/* Col 2 — Perfil del cliente */}
        <div style={{
          background: '#111114', borderRadius: 12, padding: 20,
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{
            fontSize: 9, fontWeight: 700, color: '#374151',
            textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 24,
          }}>
            Perfil del cliente
          </p>

          {/* Age */}
          <p style={{
            fontSize: 8, fontWeight: 700, color: '#2a2f38',
            textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14,
          }}>
            Edad
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {ageRows.map((r) => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, color: '#5a6374', width: 32, flexShrink: 0 }}>{r.label}</span>
                <div style={{
                  flex: 1, height: 4, background: 'rgba(255,255,255,0.05)',
                  borderRadius: 2, overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${r.pct * 2.5}%`, height: '100%',
                    background: r.highlight ? '#dc2626' : '#2a2f38', borderRadius: 2,
                  }} />
                </div>
                <span style={{
                  fontSize: 10, width: 28, textAlign: 'right', fontVariantNumeric: 'tabular-nums',
                  fontWeight: r.highlight ? 700 : 400,
                  color: r.highlight ? '#dc2626' : '#5a6374',
                }}>
                  {r.pct}%
                </span>
              </div>
            ))}
          </div>

          {/* Gender */}
          <p style={{
            fontSize: 8, fontWeight: 700, color: '#2a2f38',
            textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14,
          }}>
            Género
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {genderRows.map((r) => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, color: '#5a6374', width: 32, flexShrink: 0 }}>{r.label}</span>
                <div style={{
                  flex: 1, height: 4, background: 'rgba(255,255,255,0.05)',
                  borderRadius: 2, overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${r.pct * 1.7}%`, height: '100%',
                    background: '#2a2f38', borderRadius: 2,
                  }} />
                </div>
                <span style={{
                  fontSize: 10, color: '#5a6374', width: 28, textAlign: 'right',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {r.pct}%
                </span>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 24 }} />

          {/* Summary stats */}
          <p style={{
            fontSize: 8, fontWeight: 700, color: '#2a2f38',
            textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14,
          }}>
            Resumen
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { val: '25-35', label: 'Segmento principal' },
              { val: '55%', label: 'Masculino' },
              { val: '38%', label: 'Pico de interacción' },
              { val: '35%', label: 'Femenino' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', borderRadius: 8,
                padding: '10px 12px', border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: '#f1f1f1', lineHeight: 1 }}>{s.val}</p>
                <p style={{ fontSize: 8, color: '#374151', marginTop: 4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
