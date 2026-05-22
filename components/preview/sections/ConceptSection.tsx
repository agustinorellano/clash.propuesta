export default function ConceptSection() {
  return (
    <div style={{ background: '#fef8f6', padding: '64px 56px' }}>
      <div style={{ maxWidth: 640 }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#fef2f2', border: '1px solid #fecaca',
          borderRadius: 999, padding: '5px 14px', marginBottom: 28,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Concepto
          </span>
        </div>

        {/* Heading */}
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#111827', lineHeight: 1.08, marginBottom: 24 }}>
          Una solución pensada para marcas que necesitan{' '}
          <span style={{ color: '#dc2626' }}>ordenar y escalar</span>{' '}
          su comunicación de beneficios.
        </h2>

        {/* Body */}
        <p style={{ color: '#6b7280', fontSize: 16, lineHeight: 1.7 }}>
          No se trata solo de publicar promociones.
          <br />
          Se trata de tener control sobre lo que se comunica en todos los puntos de contacto.
        </p>
      </div>
    </div>
  )
}
