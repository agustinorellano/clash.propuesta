export default function SolutionSection() {
  const solutions = [
    {
      title: 'Centralización digital',
      description:
        'Todos los beneficios de tu marca en un único lugar digital, accesible al instante desde cualquier dispositivo.',
    },
    {
      title: 'Distribución sin fricción',
      description:
        'Comparte beneficios vía QR, link o widget. Sin apps, sin registros complejos. El cliente accede en segundos.',
    },
    {
      title: 'Gestión en tiempo real',
      description:
        'Actualizá, activá o desactivá beneficios al instante desde tu panel. Los cambios se reflejan inmediatamente.',
    },
    {
      title: 'Analytics de uso',
      description:
        'Medí cuántas personas ven y usan cada beneficio. Tomá decisiones basadas en datos reales de comportamiento.',
    },
    {
      title: 'Escalable a toda tu red',
      description:
        'Funciona igual para 1 sucursal que para 100. Cada punto tiene su propio acceso y sus propias métricas.',
    },
  ]

  return (
    <div style={{ background: '#0f0f11', padding: '64px 56px' }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          La solución
        </span>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginTop: 8, lineHeight: 1.15 }}>
          Clash — infraestructura de beneficios digitales
        </h2>
      </div>

      {/* Solutions list — 2 columns for PDF efficiency */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 40px' }}>
        {solutions.map((sol, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, marginTop: 2 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{sol.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.6 }}>{sol.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
