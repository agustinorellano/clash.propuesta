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
    }}>
      {/* Badge */}
      <div style={{ marginBottom: 40 }}>
        <span style={{
          display: 'inline-block',
          background: '#fef2f2', border: '1px solid #fecaca',
          borderRadius: 999, padding: '6px 16px',
          fontSize: 11, fontWeight: 700, color: '#dc2626', letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>
          Concepto
        </span>
      </div>

      {/* Main heading */}
      <div style={{ maxWidth: 640, marginBottom: 48 }}>
        <h1 style={{ fontSize: 48, fontWeight: 900, color: '#111827', lineHeight: 1.08, marginBottom: 24, letterSpacing: '-1px' }}>
          Una solución pensada para marcas que necesitan{' '}
          <span style={{ color: '#dc2626' }}>ordenar y escalar</span>{' '}
          su comunicación de beneficios.
        </h1>
        <p style={{ color: '#6b7280', fontSize: 16, lineHeight: 1.75 }}>
          No se trata solo de publicar promociones.
          Se trata de tener control total sobre lo que se comunica en todos los puntos de contacto — en tiempo real.
        </p>
      </div>

      {/* Divider line */}
      <div style={{ height: 1, background: '#fde8e4', marginBottom: 48 }} />

      {/* 3 pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1 }}>
        {pillars.map((p) => (
          <div key={p.number} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: '#dc2626', letterSpacing: '0.1em' }}>{p.number}</span>
            <div style={{ width: 32, height: 2, background: '#fecaca', borderRadius: 1 }} />
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#111827', lineHeight: 1.25 }}>{p.title}</h3>
            <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>{p.body}</p>
          </div>
        ))}
      </div>

      {/* Quote block at bottom */}
      <div style={{ marginTop: 48, padding: '28px 32px', background: '#fff', border: '1px solid #fde8e4', borderLeft: '4px solid #dc2626', borderRadius: 12 }}>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#111827', lineHeight: 1.55 }}>
          "El beneficio que nadie comunica, es un beneficio perdido."
        </p>
        <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 8 }}>— Premisa de diseño de Clash</p>
      </div>
    </div>
  )
}
