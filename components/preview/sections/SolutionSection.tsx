// ─── Mini mockups — frozen operational previews ────────────────────────────

function PromosSnap() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ fontSize: 7.5, color: '#3f4450', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7 }}>
        Panel · Promociones activas
      </div>
      {[
        { name: '20% OFF — Todas las sucursales', status: 'Activo', color: '#22c55e' },
        { name: '2×1 Jueves · Zona Norte',        status: 'Activo', color: '#22c55e' },
        { name: 'Happy Hour · En revisión',        status: 'Draft',  color: '#f59e0b' },
      ].map((p, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: i < 2 ? 5 : 0 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
          <span style={{ fontSize: 8.5, color: '#9ca3af', flex: 1, lineHeight: 1.2 }}>{p.name}</span>
          <span style={{ fontSize: 7, color: p.color, fontWeight: 700, letterSpacing: '0.04em' }}>{p.status}</span>
        </div>
      ))}
    </div>
  )
}

function ChannelsSnap() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ fontSize: 7.5, color: '#3f4450', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7 }}>
        Distribución · Canales
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          fontSize: 8, color: '#f1f1f1', fontWeight: 700,
          background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.25)',
          borderRadius: 5, padding: '4px 8px',
        }}>
          Clash
        </div>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {['QR Code', 'Link directo', 'Widget web'].map((c, i) => (
            <div key={i} style={{
              fontSize: 7.5, color: '#6b7280',
              background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: '2px 7px',
            }}>
              {c}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
        <span style={{ fontSize: 7.5, color: '#4b5563' }}>Sincronizado · última actualización ahora</span>
      </div>
    </div>
  )
}

function UpdateSnap() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ fontSize: 7.5, color: '#3f4450', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7 }}>
        Editor · Propagación automática
      </div>
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 6 }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 5, padding: '6px 8px' }}>
          <div style={{ fontSize: 7, color: '#5a6374', marginBottom: 3 }}>Versión anterior</div>
          <div style={{ fontSize: 9, color: '#6b7280', textDecoration: 'line-through' }}>15% OFF</div>
        </div>
        <div style={{ fontSize: 10, color: '#dc2626', fontWeight: 900, alignSelf: 'center', flexShrink: 0 }}>→</div>
        <div style={{ flex: 1, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)', borderRadius: 5, padding: '6px 8px' }}>
          <div style={{ fontSize: 7, color: '#22c55e', marginBottom: 3 }}>Actualizado</div>
          <div style={{ fontSize: 9, color: '#f1f1f1', fontWeight: 800 }}>20% OFF</div>
        </div>
      </div>
      <div style={{ marginTop: 5, fontSize: 7.5, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 4 }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
        Propagado a 12 sucursales en tiempo real
      </div>
    </div>
  )
}

function QRSnap() {
  const pattern = [1,1,1,0,1, 1,0,1,0,1, 1,1,1,0,0, 0,1,0,1,0, 1,0,0,1,1]
  return (
    <div style={{ width: '100%', display: 'flex', gap: 10, alignItems: 'center' }}>
      {/* QR simulado */}
      <div style={{
        width: 44, height: 44, flexShrink: 0,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 6, padding: 5,
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1.5,
      }}>
        {pattern.map((v, i) => (
          <div key={i} style={{
            background: v ? 'rgba(255,255,255,0.65)' : 'transparent',
            borderRadius: 1,
          }} />
        ))}
      </div>
      <div>
        <div style={{ fontSize: 7, color: '#5a6374', marginBottom: 3 }}>Local #12 · Sucursal Norte</div>
        <div style={{ fontSize: 8.5, color: '#dc2626', fontWeight: 700, marginBottom: 4 }}>clash.app/p/norte-12</div>
        <div style={{ fontSize: 7, color: '#3f4450' }}>147 escaneos este mes</div>
      </div>
    </div>
  )
}

function ScaleSnap() {
  const bars = [
    { label: '1 suc.',  pct: 20  },
    { label: '10 suc.', pct: 50  },
    { label: '50 suc.', pct: 78  },
    { label: '100+',    pct: 100 },
  ]
  return (
    <div style={{ width: '100%' }}>
      <div style={{ fontSize: 7.5, color: '#3f4450', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7 }}>
        Escala · Sucursales activas
      </div>
      {bars.map((b, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: i < 3 ? 5 : 0 }}>
          <span style={{ fontSize: 7.5, color: '#5a6374', width: 34, flexShrink: 0 }}>{b.label}</span>
          <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              width: `${b.pct}%`, height: '100%', borderRadius: 2,
              background: b.pct === 100 ? '#dc2626' : 'rgba(220,38,38,0.45)',
            }} />
          </div>
          <span style={{ fontSize: 7, color: b.pct === 100 ? '#dc2626' : '#5a6374', fontWeight: b.pct === 100 ? 700 : 400, width: 22, textAlign: 'right' }}>
            {b.pct}%
          </span>
        </div>
      ))}
    </div>
  )
}

// ─── Main Section ───────────────────────────────────────────────────────────

const ITEMS = [
  {
    num: '01',
    title: 'Ordená tus promociones y beneficios',
    desc: 'Centralizá todas las promos activas en un panel unificado. Activación y desactivación instantánea por sucursal.',
    Snap: PromosSnap,
  },
  {
    num: '02',
    title: 'Unificá la comunicación comercial',
    desc: 'Una única fuente de verdad distribuida en todos los canales. Sin inconsistencias ni actualizaciones manuales.',
    Snap: ChannelsSnap,
  },
  {
    num: '03',
    title: 'Simplificá la actualización de contenido',
    desc: 'Editá beneficios, precios y restricciones en segundos. Los cambios se propagan de forma automática a toda la red.',
    Snap: UpdateSnap,
  },
  {
    num: '04',
    title: 'Generá accesos directos, links y QR',
    desc: 'Cada local tiene su propio QR, link inteligente y acceso directo. Sin apps ni descargas para el cliente final.',
    Snap: QRSnap,
  },
  {
    num: '05',
    title: 'Escalá la visibilidad en todos los canales',
    desc: 'Funciona igual para 1 sucursal que para 100. La misma experiencia, a cualquier escala de operación.',
    Snap: ScaleSnap,
  },
]

export default function SolutionSection() {
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
        position: 'absolute', top: -120, right: -120,
        width: 440, height: 440, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#dc2626',
          letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>
          La solución
        </span>
        <h2 style={{
          fontSize: 44, fontWeight: 900, color: '#f1f1f1',
          marginTop: 12, lineHeight: 1.08, letterSpacing: '-1px',
        }}>
          Clash permite
        </h2>
        <p style={{ color: '#5a6374', fontSize: 13, marginTop: 10, lineHeight: 1.65 }}>
          Una plataforma construida para marcas con sucursales, redes de franquicias o múltiples puntos de venta.
        </p>
      </div>

      {/* Cards */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {ITEMS.map(({ num, title, desc, Snap }, i) => (
          <div key={i} style={{
            flex: 1,
            display: 'flex',
            background: 'rgba(255,255,255,0.018)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
            {/* Número — anchor visual */}
            <div style={{
              width: 76,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: '1px solid rgba(255,255,255,0.05)',
            }}>
              <span style={{
                fontSize: 30, fontWeight: 900, color: '#dc2626',
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-1.5px',
                lineHeight: 1,
              }}>
                {num}
              </span>
            </div>

            {/* Texto */}
            <div style={{
              flex: 1,
              padding: '0 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <h3 style={{
                color: '#f1f1f1', fontWeight: 700,
                fontSize: 13, marginBottom: 6, lineHeight: 1.3,
              }}>
                {title}
              </h3>
              <p style={{ color: '#5a6374', fontSize: 11, lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>

            {/* Mini mockup — frozen operational frame */}
            <div style={{
              width: 210,
              flexShrink: 0,
              borderLeft: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              padding: '14px 18px',
            }}>
              <Snap />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
