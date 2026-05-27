// ─── Sección: "¿Cómo ven mis clientes las promociones?" ────────────────────
// Migrada desde Clash Conecta — Distribución de Contenido

// ── Phone frame wrapper ────────────────────────────────────────────────────
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 258, height: 468,
      background: '#1c1c1e',
      borderRadius: 38,
      padding: 8,
      boxShadow: '0 28px 72px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.3)',
      flexShrink: 0,
      position: 'relative',
    }}>
      {/* Dynamic island */}
      <div style={{
        position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
        width: 60, height: 18, background: '#1c1c1e',
        borderRadius: 12, zIndex: 10,
      }} />
      {/* Screen */}
      <div style={{
        width: '100%', height: '100%',
        background: '#fff',
        borderRadius: 31,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Status bar */}
        <div style={{
          height: 30, background: '#fff',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          padding: '0 14px 5px',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 8, fontWeight: 700, color: '#111' }}>9:41</span>
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
              <rect x="0" y="4" width="2" height="3" rx="0.5" fill="#111"/>
              <rect x="2.5" y="2.5" width="2" height="4.5" rx="0.5" fill="#111"/>
              <rect x="5" y="1" width="2" height="6" rx="0.5" fill="#111"/>
              <rect x="7.5" y="0" width="2" height="7" rx="0.5" fill="#111"/>
            </svg>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M6 1.5C8.2 1.5 10.1 2.5 11.3 4L12 3.2C10.6 1.6 8.4 0.5 6 0.5C3.6 0.5 1.4 1.6 0 3.2L0.7 4C1.9 2.5 3.8 1.5 6 1.5Z" fill="#111"/>
              <path d="M6 4C7.4 4 8.6 4.6 9.4 5.5L10.1 4.7C9.1 3.7 7.6 3 6 3C4.4 3 2.9 3.7 1.9 4.7L2.6 5.5C3.4 4.6 4.6 4 6 4Z" fill="#111"/>
              <circle cx="6" cy="7" r="1" fill="#111"/>
            </svg>
            <div style={{ width: 18, height: 9, border: '1px solid #111', borderRadius: 2.5, position: 'relative', display: 'flex', alignItems: 'center', padding: '0 1px' }}>
              <div style={{ width: '80%', height: 5, background: '#111', borderRadius: 1 }} />
              <div style={{ position: 'absolute', right: -3, top: '50%', transform: 'translateY(-50%)', width: 2, height: 4, background: '#111', borderRadius: 1 }} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

// ── Left phone: micrositio / lista de promos ────────────────────────────────
function PhoneMicrositio() {
  return (
    <PhoneFrame>
      {/* App header */}
      <div style={{ background: '#fff', padding: '7px 10px 6px', borderBottom: '1px solid #f0f0f0', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#f9edd4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(218,41,28,0.15)' }}>
            <svg width="16" height="16" viewBox="0 0 200 200" fill="none">
              <rect width="200" height="200" rx="30" fill="#F9EDD4"/>
              <path d="M8,78 Q4,8 100,5 Q196,8 192,78 Z" fill="#FF8C42"/>
              <rect x="10" y="162" width="180" height="30" rx="15" fill="#FF8C42"/>
              <text x="100" y="130" textAnchor="middle" fill="#DA291C" fontSize="42" fontWeight="900" fontFamily="Arial Black,sans-serif">BK</text>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: '#111', lineHeight: 1.2 }}>Burger King</div>
            <div style={{ fontSize: 7.5, color: '#9ca3af', lineHeight: 1.2 }}>Hamburguesería</div>
          </div>
          <div style={{ display: 'flex', gap: 5, color: '#9ca3af' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </div>
        </div>
        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 3, marginTop: 5 }}>
          {['Plaza Canning, Mariano...', '⊙ Por sucursal'].map((chip, i) => (
            <span key={i} style={{
              fontSize: 6.5, color: '#374151',
              background: '#f3f4f6', border: '1px solid #e5e7eb',
              padding: '2px 6px', borderRadius: 99, whiteSpace: 'nowrap',
            }}>{chip}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'hidden', background: '#f9fafb', display: 'flex', flexDirection: 'column', gap: 4, padding: '6px 7px' }}>
        {/* Location card */}
        <div style={{ background: '#fff', borderRadius: 8, padding: '7px 9px', display: 'flex', gap: 7, alignItems: 'flex-start', border: '1px solid #f0f0f0' }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: '#f9edd4', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 200 200" fill="none">
              <rect width="200" height="200" rx="30" fill="#F9EDD4"/>
              <path d="M8,78 Q4,8 100,5 Q196,8 192,78 Z" fill="#FF8C42"/>
              <rect x="10" y="162" width="180" height="30" rx="15" fill="#FF8C42"/>
              <text x="100" y="135" textAnchor="middle" fill="#DA291C" fontSize="50" fontWeight="900" fontFamily="Arial Black,sans-serif">BK</text>
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: '#111', marginBottom: 1 }}>Plaza Canning</div>
            <div style={{ fontSize: 6.5, color: '#6b7280', lineHeight: 1.4 }}>Mariano Castex 1277, Canning, Buenos Aires</div>
            <div style={{ fontSize: 7, color: '#dc2626', marginTop: 2, fontWeight: 600 }}>Ver los 3 beneficios</div>
          </div>
          <div style={{ fontSize: 6, color: '#9ca3af', flexShrink: 0 }}>291.5 m</div>
        </div>

        {/* Banco Hipotecario */}
        <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #f0f0f0' }}>
          <div style={{ padding: '5px 9px 4px', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: '#1e3a8a', flexShrink: 0 }} />
            <span style={{ fontSize: 6.5, fontWeight: 800, color: '#1e3a8a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Banco Hipotecario</span>
          </div>
          <div style={{ padding: '6px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 7.5, color: '#374151', fontWeight: 500, marginBottom: 3 }}>Todos los productos</div>
              <div style={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                {[0,1,2,3].map(i => <div key={i} style={{ width: 18, height: 11, background: '#1e3a8a', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: 5, color: '#fff', fontWeight: 800 }}>VISA</span></div>)}
              </div>
              <div style={{ display: 'inline-block', fontSize: 6, fontWeight: 700, color: '#166534', background: '#dcfce7', padding: '1px 5px', borderRadius: 99 }}>TODOS LOS DIAS</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#111', lineHeight: 1 }}>40%</div>
              <div style={{ fontSize: 6.5, color: '#6b7280', marginBottom: 2 }}>de ahorro</div>
              <div style={{ fontSize: 7, color: '#dc2626', fontWeight: 600 }}>⊙ $37.500</div>
            </div>
          </div>
        </div>

        {/* Clarín 365 */}
        <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #f0f0f0' }}>
          <div style={{ padding: '5px 9px 4px', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: '#dc2626', flexShrink: 0 }} />
            <span style={{ fontSize: 6.5, fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Clarín 365</span>
          </div>
          <div style={{ padding: '6px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 7.5, color: '#374151', fontWeight: 500, marginBottom: 3 }}>Todos los productos</div>
              <div style={{ display: 'inline-block', fontSize: 6, fontWeight: 700, color: '#166534', background: '#dcfce7', padding: '1px 5px', borderRadius: 99 }}>TODOS LOS DIAS</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#111', lineHeight: 1 }}>15%</div>
              <div style={{ fontSize: 6.5, color: '#6b7280' }}>de ahorro</div>
            </div>
          </div>
        </div>

        {/* Mercado Pago */}
        <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #f0f0f0' }}>
          <div style={{ padding: '5px 9px 4px', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: '#009ee3', flexShrink: 0 }} />
            <span style={{ fontSize: 6.5, fontWeight: 800, color: '#009ee3', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Mercado Pago</span>
          </div>
          <div style={{ padding: '6px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 7.5, color: '#374151', fontWeight: 500 }}>Todos los productos</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#111', lineHeight: 1 }}>15%</div>
              <div style={{ fontSize: 6.5, color: '#6b7280' }}>de ahorro</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

// ── Right phone: detalle de promoción ──────────────────────────────────────
function PhoneDetail() {
  const rows = [
    { label: 'Tope descuento',                       value: '$15.000',    red: false },
    { label: 'Aprovechá al máximo gastando hasta',   value: '$37.500',    red: true  },
    { label: 'Tipo de tope',                         value: 'x transacción', red: false },
    { label: 'Vigencia',                             value: '01/04 – 30/06/2026', red: false },
    { label: 'Pagando con',                          value: 'Tarjeta de Crédito', red: false },
  ]

  return (
    <PhoneFrame>
      {/* Nav header */}
      <div style={{ background: '#fff', padding: '6px 10px 5px', borderBottom: '1px solid #f0f0f0', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: '#1e3a8a' }} />
          <span style={{ fontSize: 8.5, fontWeight: 600, color: '#374151' }}>Banco Hipotecario</span>
        </div>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'hidden', background: '#fff', padding: '10px 12px 8px', display: 'flex', flexDirection: 'column' }}>
        {/* BK Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: '#f9edd4', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(218,41,28,0.15)' }}>
            <svg width="28" height="28" viewBox="0 0 200 200" fill="none">
              <rect width="200" height="200" rx="30" fill="#F9EDD4"/>
              <path d="M8,78 Q4,8 100,5 Q196,8 192,78 Z" fill="#FF8C42"/>
              <rect x="10" y="162" width="180" height="30" rx="15" fill="#FF8C42"/>
              <text x="100" y="135" textAnchor="middle" fill="#DA291C" fontSize="50" fontWeight="900" fontFamily="Arial Black,sans-serif">BK</text>
            </svg>
          </div>
        </div>

        {/* Brand + promo */}
        <div style={{ textAlign: 'center', marginBottom: 6 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#111' }}>Burger King</div>
          <div style={{ fontSize: 8, color: '#6b7280' }}>Todos los productos</div>
        </div>

        {/* Big % */}
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <div style={{ fontSize: 40, fontWeight: 900, color: '#111', lineHeight: 1, letterSpacing: '-1px' }}>40%</div>
          <div style={{ fontSize: 8.5, color: '#6b7280' }}>de ahorro</div>
        </div>

        {/* Conditions */}
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 7 }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: '#374151', marginBottom: 5 }}>Condiciones</div>
          {rows.map((row, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6, marginBottom: 4, paddingBottom: 4, borderBottom: i < rows.length - 1 ? '1px solid #f9fafb' : 'none' }}>
              <span style={{ fontSize: 6.5, color: '#9ca3af', flex: 1, lineHeight: 1.3 }}>{row.label}</span>
              <span style={{ fontSize: 7, color: row.red ? '#dc2626' : '#374151', fontWeight: 600, textAlign: 'right', flexShrink: 0 }}>{row.value}</span>
            </div>
          ))}
          {/* Days chip */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
            <span style={{ fontSize: 6.5, color: '#9ca3af' }}>Días disponible</span>
            <span style={{ fontSize: 6, fontWeight: 700, color: '#166534', background: '#dcfce7', padding: '2px 6px', borderRadius: 99 }}>TODOS LOS DIAS</span>
          </div>
        </div>

        {/* Special conditions */}
        <div style={{ marginTop: 6, borderTop: '1px solid #f0f0f0', paddingTop: 5, flex: 1 }}>
          <div style={{ fontSize: 7, fontWeight: 700, color: '#6b7280', marginBottom: 3 }}>Condiciones especiales</div>
          <div style={{ fontSize: 6, color: '#9ca3af', lineHeight: 1.55 }}>
            Descuento aplica todos los días de la semana. 40% de descuento cashback con tope máximo de reintegro de $15.000. Aplica para compras con Tarjeta de Crédito VISA con tecnología NFC — Google Pay, Apple Pay o MODO NFC.
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

// ── Main export ────────────────────────────────────────────────────────────
export default function ClientViewSection() {
  return (
    <div style={{
      background: '#0d0d0f',
      height: 1123,
      padding: '64px 60px 56px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Glow sutil */}
      <div style={{
        position: 'absolute', bottom: -100, right: -100,
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 44 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#dc2626',
          letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>
          Distribución de contenido
        </span>
        <h2 style={{
          fontSize: 38, fontWeight: 900, color: '#f1f1f1',
          marginTop: 14, lineHeight: 1.08, letterSpacing: '-0.5px',
        }}>
          ¿Cómo ven mis clientes<br />las promociones?
        </h2>
        <p style={{ color: '#5a6374', fontSize: 13, marginTop: 14, lineHeight: 1.65 }}>
          Las promociones pueden visualizarse desde múltiples formatos<br />
          según la estrategia de distribución.
        </p>
      </div>

      {/* Phones */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 36,
        flex: 1,
        alignItems: 'flex-start',
      }}>
        <PhoneMicrositio />
        <PhoneDetail />
      </div>

      {/* Bottom — 2 columnas descriptivas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        marginTop: 28,
        paddingTop: 24,
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        {/* Micrositio */}
        <div>
          {/* Share icons */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            {/* WhatsApp */}
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </div>
            {/* Instagram */}
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
            </div>
            {/* Link */}
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            </div>
            {/* QR */}
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: '#dc2626', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#f1f1f1', marginBottom: 5, lineHeight: 1.3 }}>
                Desde el micrositio de tu marca
              </div>
              <div style={{ fontSize: 12, color: '#5a6374', lineHeight: 1.65 }}>
                Tus clientes encuentran todas las promociones disponibles organizadas por comercios, bancos y categorías.
              </div>
            </div>
          </div>
        </div>

        {/* Promo individual */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#dc2626', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#dc2626', marginBottom: 5, lineHeight: 1.3 }}>
              Promoción individual para compartir
            </div>
            <div style={{ fontSize: 12, color: '#5a6374', lineHeight: 1.65 }}>
              Cada beneficio puede compartirse de forma simple y rápida por WhatsApp, redes sociales, QR o link directo.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
