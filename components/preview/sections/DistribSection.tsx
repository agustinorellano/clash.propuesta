export default function DistribSection() {
  const channels = [
    {
      title: 'Link personalizado',
      description: 'Cada sucursal recibe un link único con tu marca. Compartilo por WhatsApp, email, Instagram o donde quieras.',
      tag: 'Universal',
      tagBg: '#dbeafe', tagColor: '#1d4ed8',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    },
    {
      title: 'Código QR',
      description: 'QR listo para imprimir o usar en pantallas. El cliente lo escanea y accede inmediatamente a sus beneficios.',
      tag: 'Físico + Digital',
      tagBg: '#ede9fe', tagColor: '#6d28d9',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/></svg>,
    },
    {
      title: 'Widget embebido',
      description: 'Integración directa en tu web o app. El cliente ve sus beneficios sin salir de tu ecosistema digital.',
      tag: 'Sin fricciones',
      tagBg: '#dcfce7', tagColor: '#15803d',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    },
    {
      title: 'Sin app requerida',
      description: 'El cliente no necesita descargar nada. Funciona en cualquier navegador, en cualquier dispositivo.',
      tag: 'Acceso inmediato',
      tagBg: '#ffedd5', tagColor: '#c2410c',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    },
  ]

  return (
    <div style={{
      background: '#f9fafb',
      height: 1123,
      padding: '72px 60px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 52 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
          Distribución
        </span>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#111827', marginTop: 16, lineHeight: 1.1, letterSpacing: '-1px' }}>
          El cliente accede donde está
        </h2>
        <p style={{ color: '#6b7280', fontSize: 15, marginTop: 16, maxWidth: 480, lineHeight: 1.65 }}>
          Sin descargas. Sin registros. Acceso inmediato desde cualquier canal de contacto con tu marca.
        </p>
      </div>

      {/* 2×2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: 1 }}>
        {channels.map((ch, i) => (
          <div key={i} style={{
            background: '#fff',
            borderRadius: 20,
            border: '1px solid #e5e7eb',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ width: 52, height: 52, background: '#f3f4f6', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#374151' }}>
                {ch.icon}
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 999, background: ch.tagBg, color: ch.tagColor, whiteSpace: 'nowrap' }}>
                {ch.tag}
              </span>
            </div>
            <h3 style={{ fontWeight: 800, color: '#111827', fontSize: 17 }}>{ch.title}</h3>
            <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>{ch.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ marginTop: 32, padding: '16px 24px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 24 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.5 }}>
          <strong>Todos los canales sincronizados:</strong>{' '}
          cualquier cambio en el panel se refleja en tiempo real en todos los puntos de distribución.
        </p>
      </div>
    </div>
  )
}
