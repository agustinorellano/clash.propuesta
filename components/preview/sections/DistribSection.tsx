// Estructura clonada de clash-conecta — adaptada para PDF A4 con identidad Clash

export default function DistribSection() {
  const channels = [
    {
      label: 'Redes sociales',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18, color: '#dc2626', flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>,
    },
    {
      label: 'Locales físicos',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18, color: '#dc2626', flexShrink: 0 }}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    },
    {
      label: 'Material gráfico',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18, color: '#dc2626', flexShrink: 0 }}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    },
    {
      label: 'WhatsApp',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18, color: '#dc2626', flexShrink: 0 }}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    },
    {
      label: 'Campañas digitales',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18, color: '#dc2626', flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    },
  ]

  const accItems = [
    {
      title: 'Link único',
      sub: 'Un solo enlace para todo',
      body: 'Cada sucursal accede a un link único que concentra todas sus promociones activas. Sin necesidad de actualizar manualmente en cada canal.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20, color: '#dc2626' }}><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
    },
    {
      title: 'Códigos QR',
      sub: 'Acceso simple y directo',
      body: 'QR personalizados con la identidad gráfica de cada marca. Fácil de imprimir y usar en vidriera, mostrador o material de comunicación.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20, color: '#dc2626' }}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    },
    {
      title: 'Stickers físicos',
      sub: 'Producción y entrega incluida',
      body: 'Stickers personalizados con QR para vidriera y mostrador. Producción y entrega incluida en planes de gestión asistida y propuesta a medida.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20, color: '#dc2626' }}><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    },
  ]

  return (
    <div style={{
      background: '#0d0d0f',
      height: 1123,
      padding: '72px 60px 60px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Glow sutil */}
      <div style={{
        position: 'absolute', top: -120, left: -120,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#dc2626',
          letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>
          Distribución
        </span>
        <h2 style={{
          fontSize: 44, fontWeight: 900, color: '#f1f1f1',
          marginTop: 16, lineHeight: 1.08, letterSpacing: '-1px',
        }}>
          Llevá los beneficios a todos<br />los puntos de contacto.
        </h2>
      </div>

      {/* 2-col grid — clonado de clash-conecta */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        flex: 1,
      }}>

        {/* Columna izquierda — Canales */}
        <div>
          <div style={{
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '1.5px', color: 'rgba(255,255,255,0.35)',
            marginBottom: 18,
          }}>
            Canales
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {channels.map((ch, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 10,
                padding: '14px 18px',
                color: 'rgba(255,255,255,0.78)',
                fontSize: 14, fontWeight: 500,
              }}>
                {ch.icon}
                {ch.label}
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha — A través de (todos expandidos = PDF) */}
        <div>
          <div style={{
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '1.5px', color: 'rgba(255,255,255,0.35)',
            marginBottom: 18,
          }}>
            A través de
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {accItems.map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${i === 0 ? 'rgba(220,38,38,0.4)' : 'rgba(255,255,255,0.09)'}`,
                borderRadius: 13,
                overflow: 'hidden',
              }}>
                {/* Head */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px' }}>
                  <div style={{
                    width: 40, height: 40,
                    background: 'rgba(220,38,38,0.12)',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#fff', fontSize: 15, fontWeight: 700 }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 2 }}>{item.sub}</div>
                  </div>
                </div>
                {/* Body — expandido para PDF */}
                <div style={{
                  padding: '0 20px 18px 74px',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 13, lineHeight: 1.65,
                }}>
                  {item.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — sincronización */}
      <div style={{
        marginTop: 20,
        padding: '14px 22px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 10,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" style={{ flexShrink: 0 }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
          <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Todos los canales sincronizados:</strong>{' '}
          cualquier cambio en el panel se refleja en tiempo real en todos los puntos de distribución.
        </p>
      </div>
    </div>
  )
}
