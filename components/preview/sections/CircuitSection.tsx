export default function CircuitSection() {
  return (
    <div style={{ background: '#fff', padding: '56px 48px' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <p style={{ fontSize: 10, fontWeight: 700, color: '#ef4444', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>
          Cómo funciona
        </p>
        <h2 style={{ fontSize: 36, fontWeight: 900, color: '#111827' }}>El circuito completo</h2>
      </div>

      {/* 4 Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>

        {/* Card 01 — Carga */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 8, background: '#ef4444', color: '#fff', fontSize: 11, fontWeight: 900 }}>01</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <span style={{ fontWeight: 700, color: '#111827', fontSize: 13 }}>Carga</span>
          </div>
          <p style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.55 }}>
            Cargá promociones desde la marca, por sucursal o en lote, con total flexibilidad operativa.
          </p>
          {/* Mockup */}
          <div style={{ marginTop: 'auto', background: '#f9fafb', borderRadius: 12, padding: 12, border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[true, false, false, false].map((active, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', flexShrink: 0, background: active ? '#ef4444' : '#e5e7eb' }} />
                <div style={{ flex: 1, height: 6, borderRadius: 4, background: active ? '#fee2e2' : '#f3f4f6' }} />
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={active ? '#ef4444' : '#d1d5db'} strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
              <span style={{ fontSize: 8, color: '#9ca3af' }}>Subiendo promo...</span>
              <div style={{ flex: 1, height: 4, background: '#f3f4f6', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: '65%', height: '100%', background: '#ef4444', borderRadius: 4 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Card 02 — Distribución */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 8, background: '#f59e0b', color: '#fff', fontSize: 11, fontWeight: 900 }}>02</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.2">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            <span style={{ fontWeight: 700, color: '#111827', fontSize: 13 }}>Distribución</span>
          </div>
          <p style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.55 }}>
            Link o QR inteligentes en todos los canales y puntos de contacto.
          </p>
          {/* Mockup — channels grid */}
          <div style={{ marginTop: 'auto', background: '#f9fafb', borderRadius: 12, padding: 12, border: '1px solid #f3f4f6' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 10 }}>
              {[
                <svg key="home" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                <svg key="ig" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                <svg key="tt" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>,
                <svg key="globe" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                <svg key="phone" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
                <svg key="qr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/></svg>,
              ].map((icon, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, background: '#fff', borderRadius: 8, border: '1px solid #f3f4f6', margin: '0 auto' }}>
                  {icon}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ background: '#ef4444', color: '#fff', fontSize: 9, fontWeight: 900, padding: '4px 16px', borderRadius: 999, letterSpacing: '0.1em' }}>PROMO</span>
            </div>
          </div>
        </div>

        {/* Card 03 — Interacción */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 8, background: '#ef4444', color: '#fff', fontSize: 11, fontWeight: 900 }}>03</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span style={{ fontWeight: 700, color: '#111827', fontSize: 13 }}>Interacción</span>
          </div>
          <p style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.55 }}>
            Los clientes descubren y acceden a las promos desde su teléfono.
          </p>
          {/* Mockup — TOP PARTNERS */}
          <div style={{ marginTop: 'auto', background: '#f9fafb', borderRadius: 12, padding: 12, border: '1px solid #f3f4f6', display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 7, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Top Partners</p>
              {[
                { name: 'ICBC', pct: 32, color: '#3b82f6' },
                { name: 'MP',   pct: 24, color: '#22d3ee' },
                { name: 'MODO', pct: 18, color: '#38bdf8' },
                { name: 'NX',   pct: 15, color: '#fb923c' },
                { name: 'PP',   pct: 11, color: '#a78bfa' },
              ].map((p) => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 5 }}>
                  <span style={{ fontSize: 7, fontWeight: 700, color: '#6b7280', width: 22 }}>{p.name}</span>
                  <div style={{ flex: 1, height: 5, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${p.pct * 2.8}%`, height: '100%', background: p.color, borderRadius: 4 }} />
                  </div>
                  <span style={{ fontSize: 7, color: '#9ca3af', width: 18, textAlign: 'right' }}>{p.pct}%</span>
                </div>
              ))}
            </div>
            <div style={{ width: 28, flexShrink: 0, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 3 }}>
              <div style={{ background: '#3b82f6', color: '#fff', fontSize: 5, fontWeight: 700, padding: '2px 3px', borderRadius: 3, textAlign: 'center', marginBottom: 3 }}>ICBC</div>
              <div style={{ height: 4, background: '#f3f4f6', borderRadius: 3, marginBottom: 2 }} />
              <div style={{ height: 4, background: '#f3f4f6', borderRadius: 3, width: '75%', marginBottom: 2 }} />
              <div style={{ height: 4, background: '#f3f4f6', borderRadius: 3 }} />
            </div>
          </div>
        </div>

        {/* Card 04 — Optimización */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #f3f4f6', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 8, background: '#f59e0b', color: '#fff', fontSize: 11, fontWeight: 900 }}>04</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.2">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
              <polyline points="16 7 22 7 22 13"/>
            </svg>
            <span style={{ fontWeight: 700, color: '#111827', fontSize: 13 }}>Optimización</span>
          </div>
          <p style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.55 }}>
            Cada interacción genera datos accionables para mejorar la estrategia continuamente.
          </p>
          {/* Mockup — stats dashboard */}
          <div style={{ marginTop: 'auto', background: '#f9fafb', borderRadius: 12, padding: 12, border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 7, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Estado de operación</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { v: '12', l: 'Activos', red: false },
                { v: '5',  l: 'Por vencer', red: true },
                { v: '10', l: 'Inactivos', red: false },
                { v: '75', l: 'Sucursales', red: true },
              ].map((item, i) => (
                <div key={i}>
                  <p style={{ fontSize: 20, fontWeight: 900, lineHeight: 1, color: item.red ? '#ef4444' : '#111827' }}>{item.v}</p>
                  <p style={{ fontSize: 8, color: '#9ca3af', lineHeight: 1.3 }}>{item.l}</p>
                </div>
              ))}
            </div>
            <div style={{ background: '#111827', borderRadius: 8, padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#fff' }}>1.4K 🔥</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#fff' }}>2.5K ⭐</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: '#fff' }}>120 🏆</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
