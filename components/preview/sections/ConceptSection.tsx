export default function ConceptSection() {
  const pillars = [
    {
      number: '01',
      title: 'Centralización digital',
      body: 'Todos los beneficios de tu marca en un único panel. Sin planillas, sin PDFs, sin dispersión.',
    },
    {
      number: '02',
      title: 'Distribución multi-canal',
      body: 'QR, link, widget. El cliente accede en segundos desde cualquier punto de contacto.',
    },
    {
      number: '03',
      title: 'Analytics en tiempo real',
      body: 'Sabés quién ve tus beneficios, cuándo y desde dónde. Datos que se convierten en decisiones.',
    },
  ]

  return (
    <div style={{
      background: '#fef8f6',
      height: 1123,
      padding: '72px 60px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Label */}
      <div style={{ marginBottom: 36 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#dc2626',
          letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>
          Concepto
        </span>
      </div>

      {/* Main heading */}
      <div style={{ maxWidth: 620, marginBottom: 56 }}>
        <h1 style={{
          fontSize: 46, fontWeight: 900, color: '#0d0d0f',
          lineHeight: 1.08, marginBottom: 24, letterSpacing: '-1px',
        }}>
          Una solución pensada para marcas que necesitan{' '}
          <span style={{ color: '#dc2626' }}>ordenar y escalar</span>{' '}
          su comunicación de beneficios.
        </h1>
        <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75 }}>
          No se trata solo de publicar promociones.
          Se trata de tener control total sobre lo que se comunica —
          en todos los puntos de contacto, en tiempo real.
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: '#e8dbd8', marginBottom: 52 }} />

      {/* 3 pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, flex: 1 }}>
        {pillars.map((p) => (
          <div key={p.number} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <span style={{
              fontSize: 11, fontWeight: 800, color: '#dc2626',
              letterSpacing: '0.08em', marginBottom: 16,
            }}>
              {p.number}
            </span>
            <div style={{ width: 24, height: 2, background: '#dc2626', borderRadius: 1, marginBottom: 20 }} />
            <h3 style={{
              fontSize: 16, fontWeight: 800, color: '#0d0d0f',
              lineHeight: 1.25, marginBottom: 14,
            }}>
              {p.title}
            </h3>
            <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.75 }}>{p.body}</p>
          </div>
        ))}
      </div>

      {/* Quote block */}
      <div style={{
        marginTop: 52,
        padding: '24px 28px',
        background: '#fff',
        borderLeft: '3px solid #dc2626',
        borderRadius: '0 8px 8px 0',
      }}>
        <p style={{ fontSize: 15, fontWeight: 600, color: '#0d0d0f', lineHeight: 1.6 }}>
          "El beneficio que nadie comunica, es un beneficio perdido."
        </p>
        <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 8 }}>— Premisa de diseño de Clash</p>
      </div>
    </div>
  )
}
