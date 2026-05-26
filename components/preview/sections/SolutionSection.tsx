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

  const stats = [
    { value: '300+', label: 'Marcas activas' },
    { value: '10K+', label: 'Sucursales' },
    { value: '2M+',  label: 'Interacciones / mes' },
    { value: '<2s',  label: 'Tiempo de acceso' },
  ]

  return (
    <div style={{
      background: '#0f0f11',
      height: 1123,
      padding: '72px 60px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ marginBottom: 56, position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
          La solución
        </span>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', marginTop: 16, lineHeight: 1.1, letterSpacing: '-1px', maxWidth: 560 }}>
          Clash — infraestructura de beneficios digitales
        </h2>
        <p style={{ color: '#6b7280', fontSize: 15, marginTop: 16, maxWidth: 480, lineHeight: 1.65 }}>
          Una plataforma construida para marcas que tienen sucursales, redes de franquicias o múltiples puntos de venta.
        </p>
      </div>

      {/* Solutions list */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 56px', flex: 1, position: 'relative', zIndex: 1 }}>
        {solutions.map((sol, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 8, background: 'rgba(220,38,38,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div>
              <h3 style={{ color: '#f9fafb', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{sol.title}</h3>
              <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.7 }}>{sol.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: 48, border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.02)', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
            <p style={{ fontSize: 24, fontWeight: 900, color: '#ef4444', lineHeight: 1 }}>{s.value}</p>
            <p style={{ fontSize: 11, color: '#4b5563', marginTop: 6 }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
