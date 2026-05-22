export default function DistribSection() {
  const channels = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      ),
      title: 'Link personalizado',
      description: 'Cada sucursal recibe un link único con tu marca. Compartilo por WhatsApp, email, Instagram o donde quieras.',
      tag: 'Universal',
      tagBg: '#dbeafe',
      tagColor: '#1d4ed8',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/>
          <path d="M17 17h3v3h-3z"/><path d="M14 17h3"/><path d="M17 14h3"/>
        </svg>
      ),
      title: 'Código QR',
      description: 'QR listo para imprimir o usar en pantallas. El cliente lo escanea y accede inmediatamente a sus beneficios.',
      tag: 'Físico + Digital',
      tagBg: '#ede9fe',
      tagColor: '#6d28d9',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: 'Widget embebido',
      description: 'Integración directa en tu web o app. El cliente ve sus beneficios sin salir de tu ecosistema digital.',
      tag: 'Sin fricciones',
      tagBg: '#dcfce7',
      tagColor: '#15803d',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      title: 'Sin app requerida',
      description: 'El cliente no necesita descargar nada. Funciona en cualquier navegador, en cualquier dispositivo.',
      tag: 'Acceso inmediato',
      tagBg: '#ffedd5',
      tagColor: '#c2410c',
    },
  ]

  return (
    <div style={{ background: '#f9fafb', padding: '64px 56px' }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          Distribución
        </span>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginTop: 8, lineHeight: 1.15 }}>
          El cliente accede donde está
        </h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 8 }}>
          Sin descargas, sin registros. Acceso inmediato desde cualquier canal.
        </p>
      </div>

      {/* 2x2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {channels.map((ch, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: '24px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, background: '#f3f4f6', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {ch.icon}
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 999, background: ch.tagBg, color: ch.tagColor }}>
                {ch.tag}
              </span>
            </div>
            <h3 style={{ fontWeight: 700, color: '#111827', fontSize: 14, marginBottom: 6 }}>{ch.title}</h3>
            <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>{ch.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
