export default function CircuitSection() {
  return (
    <div style={{
      background: '#fff',
      height: 1123,
      padding: '52px 56px 48px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxSizing: 'border-box',
      position: 'relative',
    }}>


      {/* Dot grid texture */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <pattern id="circ-dot-bg" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(0,0,0,0.032)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circ-dot-bg)" />
      </svg>

      {/* Left accent bar */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: '#dc2626' }} />

      {/* ── Header ── */}
      <div style={{ marginBottom: 16, flexShrink: 0, position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Cómo funciona
        </span>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#0d0d0f', marginTop: 10, marginBottom: 10, lineHeight: 1.05, letterSpacing: '-1.5px' }}>
          El circuito completo
        </h2>
        <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.6, marginBottom: 14, maxWidth: 460 }}>
          Desde la carga hasta la optimización — un flujo continuo, medible y autogestionable.
        </p>

        {/* Flow strip */}
        <div style={{ display: 'inline-flex', alignItems: 'center', background: '#f9fafb', border: '1px solid #ebebeb', borderRadius: 10, padding: '7px 14px', gap: 0 }}>
          {[
            { n: '01', l: 'Carga',        c: '#dc2626' },
            { n: '02', l: 'Distribución', c: '#d97706' },
            { n: '03', l: 'Interacción',  c: '#dc2626' },
            { n: '04', l: 'Optimización', c: '#d97706' },
          ].map((step, i) => (
            <div key={step.n} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              {i > 0 && (
                <svg viewBox="0 0 16 16" fill="none" style={{ width: 10, height: 10, margin: '0 6px', flexShrink: 0 }}>
                  <polyline points="5 3 11 8 5 13" stroke="#c4c4c4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 18, height: 18, borderRadius: 5,
                background: step.c, color: '#fff', fontSize: 8, fontWeight: 900,
              }}>{step.n}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#0d0d0f', letterSpacing: '-0.1px' }}>{step.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 2×2 Grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1, position: 'relative', zIndex: 1, overflow: 'hidden' }}>

        {/* ── 01 CARGA ── */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,.07)', padding: '20px 20px 18px', boxShadow: '0 4px 24px rgba(0,0,0,.06),0 1px 4px rgba(0,0,0,.04)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 9, background: '#dc2626', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900, flexShrink: 0 }}>01</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(220,38,38,.75)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13, flexShrink: 0 }}>
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#0d0d0f', letterSpacing: '-0.3px' }}>Carga</span>
            </div>
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.65, marginBottom: 14 }}>
            Cargá promociones desde la marca, por sucursal o en lote, con total flexibilidad operativa.
          </p>

          {/* Carga animation area */}
          <div style={{ flex: 1, background: 'linear-gradient(135deg,#fafafa 0%,#f4f4f5 100%)', borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '13px 13px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
              <span style={{ fontSize: 8, fontWeight: 700, color: '#374151', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Promociones activas</span>
              <span style={{ fontSize: 7.5, color: '#9ca3af' }}>3 de 8</span>
            </div>
            {[
              { name: 'Promo verano 2025', st: 'ACTIVO', sc: '#22c55e', dc: '#22c55e', views: '2.4K', active: true  },
              { name: 'Descuento ICBC',    st: 'ACTIVO', sc: '#22c55e', dc: '#22c55e', views: '1.8K', active: true  },
              { name: 'Combo especial',    st: 'DRAFT',  sc: '#f59e0b', dc: '#d1d5db', views: '—',    active: false },
              { name: 'Flash sale',        st: '',       sc: '#d1d5db', dc: '#e5e7eb', views: '—',    active: false, ghost: true },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 7, padding: '7px 8px',
                borderRadius: 7, marginBottom: 5,
                opacity: row.ghost ? 0.28 : 1,
                background: row.active ? '#fff8f8' : '#fff',
                border: `1px solid ${row.active ? '#fecaca' : '#f0f0f1'}`,
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%', background: row.dc, flexShrink: 0,
                  boxShadow: row.active ? '0 0 5px rgba(34,197,94,.4)' : 'none',
                }} />
                <span style={{ flex: 1, fontSize: 9, color: '#374151', fontWeight: 500, lineHeight: 1.2 }}>{row.name}</span>
                {row.st && <span style={{ fontSize: 7.5, fontWeight: 700, color: row.sc, letterSpacing: '0.04em' }}>{row.st}</span>}
                <span style={{ fontSize: 7.5, color: '#9ca3af', marginLeft: 4 }}>{row.views}</span>
                {row.active && (
                  <svg viewBox="0 0 12 12" fill="none" strokeLinecap="round" style={{ width: 10, height: 10, flexShrink: 0, color: '#22c55e' }}>
                    <polyline points="2,6 5,9 10,3" stroke="currentColor" strokeWidth="2.5"/>
                  </svg>
                )}
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderTop: '1px solid #ebebeb', marginTop: 2, flexShrink: 0 }}>
              <div style={{ flex: 1, height: 3, background: '#e8e8e8', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg,#dc2626,#ff7070)', borderRadius: 2 }} />
              </div>
              <span style={{ fontSize: 8, fontWeight: 600, color: '#9ca3af', whiteSpace: 'nowrap' }}>Sincronizando…</span>
            </div>
          </div>
        </div>

        {/* ── 02 DISTRIBUCIÓN ── */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,.07)', padding: '20px 20px 18px', boxShadow: '0 4px 24px rgba(0,0,0,.06),0 1px 4px rgba(0,0,0,.04)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 9, background: '#d97706', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900, flexShrink: 0 }}>02</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(220,38,38,.75)" strokeWidth="2" strokeLinecap="round" style={{ width: 13, height: 13, flexShrink: 0 }}>
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#0d0d0f', letterSpacing: '-0.3px' }}>Distribución</span>
            </div>
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.65, marginBottom: 14 }}>
            Distribuí tus beneficios a través de Link o QR inteligentes en todos los canales y puntos de contacto.
          </p>

          {/* Hub-spoke animation */}
          <div style={{ flex: 1, background: 'linear-gradient(135deg,#fafafa 0%,#f4f4f5 100%)', borderRadius: 10, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 280 210" fill="none" preserveAspectRatio="xMidYMid meet">
              {[
                { x2: 140, y2: 14,  opacity: 0.9 },
                { x2: 237, y2: 58,  opacity: 0.5 },
                { x2: 237, y2: 152, opacity: 0.8 },
                { x2: 140, y2: 196, opacity: 0.4 },
                { x2: 43,  y2: 152, opacity: 0.7 },
                { x2: 43,  y2: 58,  opacity: 0.6 },
              ].map((ln, i) => (
                <line key={i} x1="140" y1="105" x2={ln.x2} y2={ln.y2}
                  stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3"
                  opacity={ln.opacity}
                />
              ))}
            </svg>

            {/* Center PROMO node */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
              background: '#dc2626', color: '#fff', fontSize: 8, fontWeight: 900,
              letterSpacing: '0.8px', padding: '5px 9px', borderRadius: 8, whiteSpace: 'nowrap',
              zIndex: 3, boxShadow: '0 6px 24px rgba(220,38,38,.55), 0 0 0 5px rgba(220,38,38,.09)',
            }}>PROMO</div>

            {/* 6 channel nodes */}
            {[
              { style: { top: '1%',  left: '50%',  transform: 'translate(-50%,0)'  }, icon: 'ig'    }, // top
              { style: { top: '16%', right: '2%',  transform: 'translate(0,-50%)'  }, icon: 'tiktok' }, // top-right
              { style: { bottom: '16%', right: '2%', transform: 'translate(0,50%)' }, icon: 'qr'    }, // bottom-right
              { style: { bottom: '1%', left: '50%', transform: 'translate(-50%,0)' }, icon: 'phone' }, // bottom
              { style: { bottom: '16%', left: '2%', transform: 'translate(0,50%)'  }, icon: 'web'   }, // bottom-left
              { style: { top: '16%', left: '2%',   transform: 'translate(0,-50%)'  }, icon: 'home'  }, // top-left
            ].map((node, i) => (
              <div key={i} style={{
                position: 'absolute', ...node.style,
                width: 30, height: 30, background: '#fff', borderRadius: 8,
                border: '1.5px solid #e5e7eb',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 2, boxShadow: '0 2px 8px rgba(0,0,0,.06)',
              }}>
                {node.icon === 'ig' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
                    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                )}
                {node.icon === 'tiktok' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
                    <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
                  </svg>
                )}
                {node.icon === 'qr' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" style={{ width: 14, height: 14 }}>
                    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                    <rect x="14" y="14" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/>
                    <rect x="14" y="18" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/>
                  </svg>
                )}
                {node.icon === 'phone' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
                    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                )}
                {node.icon === 'web' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/>
                  </svg>
                )}
                {node.icon === 'home' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 03 INTERACCIÓN ── */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,.07)', padding: '20px 20px 18px', boxShadow: '0 4px 24px rgba(0,0,0,.06),0 1px 4px rgba(0,0,0,.04)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 9, background: '#dc2626', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900, flexShrink: 0 }}>03</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(220,38,38,.75)" strokeWidth="2" strokeLinecap="round" style={{ width: 13, height: 13, flexShrink: 0 }}>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#0d0d0f', letterSpacing: '-0.3px' }}>Interacción</span>
            </div>
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.65, marginBottom: 14 }}>
            Los clientes descubren y acceden a las promos desde su teléfono, en tiempo real, sin apps ni registro.
          </p>

          {/* Partners + phone animation */}
          <div style={{ flex: 1, background: 'linear-gradient(135deg,#fafafa 0%,#f4f4f5 100%)', borderRadius: 10, overflow: 'hidden', display: 'flex', alignItems: 'center', gap: 10, padding: '14px 14px' }}>

            {/* Left — TOP PARTNERS ranking */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 92, flexShrink: 0 }}>
              <div style={{ fontSize: 7, fontWeight: 800, letterSpacing: '0.6px', color: '#aaa', textTransform: 'uppercase', marginBottom: 1 }}>
                Top Partners
              </div>
              {[
                { chip: 'ICBC', bg: '#e00000', pct: 32, w: '100%' },
                { chip: 'MP',   bg: '#009ee3', pct: 24, w: '75%'  },
                { chip: 'MODO', bg: '#111111', pct: 18, w: '56%'  },
                { chip: 'NX',   bg: '#ff6600', pct: 15, w: '47%'  },
                { chip: 'PP',   bg: '#5b4fcf', pct: 11, w: '34%'  },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 6.5, fontWeight: 900, padding: '1px 3px', borderRadius: 3, background: p.bg, color: '#fff', flexShrink: 0, width: 24, textAlign: 'center', letterSpacing: '0.2px' }}>{p.chip}</span>
                  <div style={{ flex: 1, height: 4, background: '#e5e7eb', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ width: p.w, height: '100%', background: '#dc2626', borderRadius: 2 }} />
                  </div>
                  <span style={{ fontSize: 7, fontWeight: 800, color: '#0d0d0f', flexShrink: 0 }}>{p.pct}%</span>
                </div>
              ))}
              {/* User avatars */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
                {['#fca5a5','#86efac','#93c5fd'].map((bg, i) => (
                  <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: bg, border: '1.5px solid #fff', marginLeft: i > 0 ? -3 : 0 }} />
                ))}
                <span style={{ fontSize: 8, color: '#9ca3af', marginLeft: 5, lineHeight: '12px' }}>+2.4K</span>
              </div>
            </div>

            {/* Center — phone with pulse rings */}
            <div style={{ position: 'relative', flexShrink: 0, width: 58, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {[
                { size: 46, opacity: 0.40 },
                { size: 66, opacity: 0.22 },
                { size: 86, opacity: 0.10 },
              ].map((ring, i) => (
                <div key={i} style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: ring.size, height: ring.size, borderRadius: '50%',
                  border: `1.5px solid rgba(220,38,38,${ring.opacity})`,
                  transform: 'translate(-50%,-50%)',
                }} />
              ))}
              <div style={{ width: 34, height: 58, background: '#1a1a1a', borderRadius: 8, zIndex: 2, position: 'relative', boxShadow: '0 4px 16px rgba(0,0,0,.25)' }}>
                <div style={{ width: 28, height: 50, background: '#fff', borderRadius: 5, margin: '4px 3px', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 4, gap: 2 }}>
                  <div style={{ height: 5, borderRadius: 3, background: '#fee2e2' }} />
                  <div style={{ height: 5, borderRadius: 3, background: '#dbeafe' }} />
                  <div style={{ height: 5, borderRadius: 3, background: '#d1fae5' }} />
                  <div style={{ height: 3, borderRadius: 2, background: '#f3f4f6', marginTop: 3 }} />
                  <div style={{ height: 3, borderRadius: 2, background: '#f3f4f6', width: '70%' }} />
                </div>
              </div>
            </div>

            {/* Right — notification toasts */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7, justifyContent: 'center' }}>
              {[
                { chip: 'ICBC', bg: '#e00000' },
                { chip: 'MODO', bg: '#111111' },
                { chip: 'MP',   bg: '#009ee3' },
              ].map((n, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: '#fff', borderRadius: 8, padding: '6px 8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,.1)',
                }}>
                  <span style={{ fontSize: 6.5, fontWeight: 900, padding: '1px 4px', borderRadius: 3, background: n.bg, color: '#fff', flexShrink: 0 }}>{n.chip}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div style={{ height: 3, width: 38, background: '#e5e7eb', borderRadius: 2 }} />
                    <div style={{ height: 3, width: 26, background: '#f3f4f6', borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 04 OPTIMIZACIÓN ── */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,.07)', padding: '20px 20px 18px', boxShadow: '0 4px 24px rgba(0,0,0,.06),0 1px 4px rgba(0,0,0,.04)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 9, background: '#d97706', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900, flexShrink: 0 }}>04</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(220,38,38,.75)" strokeWidth="2" strokeLinecap="round" style={{ width: 13, height: 13, flexShrink: 0 }}>
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
              </svg>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#0d0d0f', letterSpacing: '-0.3px' }}>Optimización</span>
            </div>
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.65, marginBottom: 14 }}>
            Cada interacción genera datos accionables para mejorar la estrategia de manera continua.
          </p>

          {/* KPI dashboard animation */}
          <div style={{ flex: 1, background: 'linear-gradient(135deg,#fafafa 0%,#f4f4f5 100%)', borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 7, fontWeight: 800, letterSpacing: '0.7px', color: '#aaa', textTransform: 'uppercase', padding: '10px 13px 6px' }}>
              Estado de operación
            </div>
            {/* 2×3 KPI grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#e8e8e8', flex: 1 }}>
              {[
                { v: '12',   l: 'Beneficios activos', accent: false },
                { v: '5',    l: 'Por vencer',          accent: true  },
                { v: '75',   l: 'Sucursales activas',  accent: true  },
                { v: '30',   l: 'QR habilitados',      accent: false },
                { v: '1.4K', l: 'Me gusta',            accent: false },
                { v: '2.5K', l: 'Cal. positivas',      accent: false },
              ].map((tile, i) => (
                <div key={i} style={{
                  background: '#fff', padding: '10px 12px',
                  display: 'flex', flexDirection: 'column', gap: 2,
                }}>
                  <span style={{ fontSize: 22, fontWeight: 900, lineHeight: 1, color: tile.accent ? '#dc2626' : '#0d0d0f' }}>{tile.v}</span>
                  <span style={{ fontSize: 8, color: '#9ca3af', lineHeight: 1.25 }}>{tile.l}</span>
                </div>
              ))}
            </div>
            {/* Dark bottom bar */}
            <div style={{ display: 'flex', background: '#0d0d0f', padding: '7px 12px', flexShrink: 0 }}>
              {[
                { label: '1.4K 👍', border: true  },
                { label: '2.5K ⭐', border: true  },
                { label: '120 👎',  border: false },
              ].map((item, i) => (
                <div key={i} style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 8.5, color: 'rgba(255,255,255,.75)', fontWeight: 700,
                  borderRight: item.border ? '1px solid rgba(255,255,255,.1)' : 'none',
                }}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
