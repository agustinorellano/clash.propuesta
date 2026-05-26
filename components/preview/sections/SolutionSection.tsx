export default function SolutionSection() {
  const solutions = [
    {
      title: 'Centralización digital',
      description: 'Todos los beneficios de tu marca en un único lugar digital, accesible al instante desde cualquier dispositivo.',
    },
    {
      title: 'Distribución sin fricción',
      description: 'Comparte beneficios vía QR, link o widget. Sin apps, sin registros complejos. El cliente accede en segundos.',
    },
    {
      title: 'Gestión en tiempo real',
      description: 'Actualizá, activá o desactivá beneficios al instante desde tu panel. Los cambios se reflejan inmediatamente.',
    },
    {
      title: 'Analytics de uso',
      description: 'Medí cuántas personas ven y usan cada beneficio. Tomá decisiones basadas en datos reales de comportamiento.',
    },
    {
      title: 'Escalable a toda tu red',
      description: 'Funciona igual para 1 sucursal que para 100. Cada punto tiene su propio acceso y sus propias métricas.',
    },
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
      <div style={{ marginBottom: 60 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          La solución
        </span>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#f1f1f1', marginTop: 16, lineHeight: 1.08, letterSpacing: '-1px' }}>
          Clash permite
        </h2>
        <p style={{ color: '#5a6374', fontSize: 14, marginTop: 16, maxWidth: 460, lineHeight: 1.75 }}>
          Una plataforma construida para marcas con sucursales,
          redes de franquicias o múltiples puntos de venta.
        </p>
      </div>

      {/* Solutions — numbered editorial list */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
        {solutions.map((sol, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: 32,
            alignItems: 'flex-start',
            padding: '22px 0',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: '#2a2f38',
              width: 24, flexShrink: 0, paddingTop: 2,
              fontVariantNumeric: 'tabular-nums',
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#f1f1f1', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>
                {sol.title}
              </h3>
              <p style={{ color: '#5a6374', fontSize: 13, lineHeight: 1.7 }}>
                {sol.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
