import { EditableText } from '@/components/preview/EditableText'

const SID = 'case'

const BK_RED = '#D62300'

const DEFAULT_STATS = [
  { key: '0', value: '120+', label: 'locales activos' },
  { key: '1', value: '4',    label: 'formatos físicos' },
  { key: '2', value: '100%', label: 'on-brand' },
]

const DEFAULT_MATERIALS = [
  { key: '0', name: 'QR personalizado',    sub: 'Identidad BK × Clash' },
  { key: '1', name: 'Cartel de mostrador', sub: 'Soporte acrílico'      },
  { key: '2', name: 'Sticker de mesa',     sub: 'Autoadhesivo circular' },
  { key: '3', name: 'Póster enmarcado',    sub: 'Salón y punto de venta'},
]

const DEFAULT_TAGS = ['Cartel de mostrador', 'Sticker de mesa', 'Póster enmarcado']

export default function CaseSection() {
  return (
    <div style={{
      background: '#0d0d0f',
      width: 794, height: 1123,
      padding: '56px 60px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* Glow sutil */}
      <div style={{
        position: 'absolute', top: -120, right: -120,
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(214,35,0,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Label */}
      <div style={{ marginBottom: 40, position: 'relative', zIndex: 1 }}>
        <EditableText sectionId={SID} contentKey="eyebrow" defaultValue="Caso real" tag="span"
          style={{ fontSize: 10, fontWeight: 700, color: BK_RED, letterSpacing: '0.25em', textTransform: 'uppercase' }} />
      </div>

      {/* Header row */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        gap: 32, marginBottom: 44, position: 'relative', zIndex: 1,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/brands/bk-logo.png" alt="Burger King" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
            <div>
              <EditableText sectionId={SID} contentKey="clientName" defaultValue="Burger King Argentina" tag="h2"
                style={{ fontSize: 24, fontWeight: 900, color: '#f1f1f1', lineHeight: 1.1, margin: 0 }} />
              <EditableText sectionId={SID} contentKey="clientSub" defaultValue="Cadena de fast food · +120 locales" tag="p"
                style={{ color: '#5a6374', fontSize: 12, marginTop: 4 }} />
            </div>
          </div>
          <EditableText sectionId={SID} contentKey="description" defaultValue="Implementación personalizada de materiales físicos para más de 120 locales en todo el país." multiline tag="p"
            style={{ color: '#5a6374', fontSize: 13, lineHeight: 1.7, maxWidth: 420 }} />
        </div>

        {/* Stats strip */}
        <div style={{
          display: 'flex', gap: 0, flexShrink: 0,
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 10, overflow: 'hidden',
        }}>
          {DEFAULT_STATS.map((s, i) => (
            <div key={s.key} style={{
              padding: '14px 20px',
              background: 'rgba(255,255,255,0.02)',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              textAlign: 'center', minWidth: 80,
            }}>
              <EditableText sectionId={SID} contentKey={`stat.${s.key}.value`} defaultValue={s.value} tag="div"
                style={{ fontSize: 20, fontWeight: 900, color: BK_RED, lineHeight: 1 }} />
              <EditableText sectionId={SID} contentKey={`stat.${s.key}.label`} defaultValue={s.label} tag="div"
                style={{ fontSize: 9, color: '#374151', marginTop: 5 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Context + Solution */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 14, marginBottom: 16, position: 'relative', zIndex: 1,
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 12, padding: '22px 22px',
        }}>
          <p style={{
            fontSize: 9, fontWeight: 700, color: '#374151',
            textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12,
          }}>
            El contexto
          </p>
          <EditableText sectionId={SID} contentKey="context.title" defaultValue="Escala nacional, identidad local" tag="h3"
            style={{ fontSize: 14, fontWeight: 700, color: '#f1f1f1', marginBottom: 10 }} />
          <EditableText sectionId={SID} contentKey="context.body" defaultValue="BK Argentina opera más de 120 locales con la necesidad de mantener coherencia visual y comunicar beneficios específicos por sucursal de forma ágil y autogestionable." multiline tag="p"
            style={{ fontSize: 12, color: '#5a6374', lineHeight: 1.65 }} />
        </div>
        <div style={{
          background: 'rgba(214,35,0,0.04)',
          border: '1px solid rgba(214,35,0,0.14)',
          borderRadius: 12, padding: '22px 22px',
        }}>
          <p style={{
            fontSize: 9, fontWeight: 700, color: BK_RED,
            textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12,
          }}>
            Solución implementada
          </p>
          <EditableText sectionId={SID} contentKey="solution.title" defaultValue="Materiales físicos BK × Clash" tag="h3"
            style={{ fontSize: 14, fontWeight: 700, color: '#f1f1f1', marginBottom: 12 }} />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DEFAULT_MATERIALS.map((m) => (
              <li key={m.key} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={BK_RED} strokeWidth="2.5" style={{ width: 11, height: 11, flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span style={{ fontSize: 11, color: '#9ca3af' }}>
                  <EditableText sectionId={SID} contentKey={`material.${m.key}.name`} defaultValue={m.name} tag="strong"
                    style={{ color: '#f1f1f1', fontWeight: 600 }} />
                  {' — '}
                  <EditableText sectionId={SID} contentKey={`material.${m.key}.sub`} defaultValue={m.sub} tag="span"
                    style={{ color: '#9ca3af' }} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* QR showcase */}
      <div style={{
        flex: 1,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 12, padding: '24px 24px',
        display: 'flex', alignItems: 'center', gap: 28,
        position: 'relative', zIndex: 1,
      }}>
        {/* QR visual */}
        <div style={{ flexShrink: 0, textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/qr-bk-sticker.png" alt="QR BK × Clash"
            style={{ width: 100, height: 'auto', objectFit: 'contain', borderRadius: 8 }} />
          <div style={{ fontSize: 8, color: '#374151', marginTop: 8, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            QR personalizado
          </div>
        </div>

        <div style={{ width: 1, background: 'rgba(255,255,255,0.06)', alignSelf: 'stretch', flexShrink: 0 }} />

        <div style={{ flex: 1 }}>
          <EditableText sectionId={SID} contentKey="qr.eyebrow" defaultValue="Implementación física" tag="span"
            style={{ fontSize: 9, fontWeight: 700, color: BK_RED, letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }} />
          <EditableText sectionId={SID} contentKey="qr.title" defaultValue="El mismo material, tres aplicaciones reales" tag="h3"
            style={{ fontSize: 15, fontWeight: 700, color: '#f1f1f1', marginBottom: 8 }} />
          <EditableText sectionId={SID} contentKey="qr.body" defaultValue={`Diseño "Tus promos acá" aplicado en cada punto de contacto dentro del local.`} multiline tag="p"
            style={{ fontSize: 12, color: '#5a6374', marginBottom: 16, lineHeight: 1.65 }} />
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {DEFAULT_TAGS.map((label, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 5,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 6, padding: '5px 10px',
              }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: BK_RED, flexShrink: 0 }} />
                <span style={{ fontSize: 10, color: '#9ca3af', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
