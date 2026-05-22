export default function CaseSection() {
  const metrics = [
    { icon: '📈', value: '+340%', label: 'Aumento en visualizaciones de beneficios' },
    { icon: '👥', value: '2.800', label: 'Clientes únicos registrados en 3 meses' },
    { icon: '📍', value: '12',    label: 'Sucursales integradas a la plataforma' },
    { icon: '⭐', value: '4.8/5', label: 'Satisfacción del cliente final' },
  ]

  return (
    <div style={{ background: '#f9fafb', padding: '64px 56px' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          Caso de éxito
        </span>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginTop: 8, lineHeight: 1.15 }}>
          Barber King
        </h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 4 }}>
          Cadena de barberías premium — Argentina
        </p>
      </div>

      {/* Quote */}
      <div style={{
        background: '#fff', border: '1px solid #e5e7eb',
        borderRadius: 16, padding: '28px 28px',
        marginBottom: 24, position: 'relative',
      }}>
        <div style={{ fontSize: 48, color: '#dc2626', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: 10, userSelect: 'none' }}>
          "
        </div>
        <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, marginBottom: 18 }}>
          Antes nuestros clientes no sabían que tenían beneficios en cada visita. Con Clash,
          en menos de un mes triplicamos las visualizaciones y los clientes comenzaron a
          preguntar por los beneficios proactivamente. Es una herramienta que realmente
          cambia la relación con el cliente.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 34, height: 34, background: '#e5e7eb', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 700, color: '#374151',
          }}>
            MG
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>Marcos García</div>
            <div style={{ fontSize: 11, color: '#6b7280' }}>CEO, Barber King</div>
          </div>
        </div>
      </div>

      {/* Metrics 2x2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 }}>
        {metrics.map((m, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 18 }}>{m.icon}</span>
              <span style={{ fontSize: 24, fontWeight: 900, color: '#111827' }}>{m.value}</span>
            </div>
            <p style={{ fontSize: 12, color: '#6b7280' }}>{m.label}</p>
          </div>
        ))}
      </div>

      {/* Context note */}
      <div style={{ padding: '14px 18px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12 }}>
        <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6 }}>
          <span style={{ fontWeight: 600, color: '#dc2626' }}>Implementación:</span>{' '}
          Barber King comenzó con el plan Gestión Asistida. En 60 días migró las 12 sucursales,
          capacitó al equipo y lanzó su primer programa de beneficios segmentado por tipo de cliente.
        </p>
      </div>
    </div>
  )
}
