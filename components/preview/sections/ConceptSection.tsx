import { EditableText } from '@/components/preview/EditableText'

const SID = 'concept'

const DEFAULT_PILLARS = [
  {
    key: '0',
    number: '01',
    title: 'Centralización digital',
    body: 'Todos los beneficios de tu marca en un único panel. Sin planillas, sin PDFs, sin dispersión.',
  },
  {
    key: '1',
    number: '02',
    title: 'Distribución multi-canal',
    body: 'QR, link, widget. El cliente accede en segundos desde cualquier punto de contacto.',
  },
  {
    key: '2',
    number: '03',
    title: 'Analytics en tiempo real',
    body: 'Sabés quién ve tus beneficios, cuándo y desde dónde. Datos que se convierten en decisiones.',
  },
]

export default function ConceptSection() {
  return (
    <div style={{
      background: '#ffffff',
      width: 794, height: 1123,
      padding: '56px 60px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* Label */}
      <div style={{ marginBottom: 36 }}>
        <EditableText
          sectionId={SID} contentKey="eyebrow" defaultValue="Concepto"
          tag="span"
          style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.25em', textTransform: 'uppercase' }}
        />
      </div>

      {/* Main heading — three editable zones preserving the red accent */}
      <div style={{ maxWidth: 620, marginBottom: 56 }}>
        <h1 style={{ fontSize: 46, fontWeight: 900, color: '#0d0d0f', lineHeight: 1.08, marginBottom: 24, letterSpacing: '-1px' }}>
          <EditableText sectionId={SID} contentKey="h1Pre" defaultValue="Una solución pensada para marcas que necesitan" tag="span" style={{ display: 'inline' }} />
          {' '}
          <span style={{ color: '#dc2626' }}>
            <EditableText sectionId={SID} contentKey="h1Accent" defaultValue="ordenar y escalar" tag="span" style={{ display: 'inline', color: '#dc2626' }} />
          </span>
          {' '}
          <EditableText sectionId={SID} contentKey="h1Post" defaultValue="su comunicación de beneficios." tag="span" style={{ display: 'inline' }} />
        </h1>
        <EditableText
          sectionId={SID} contentKey="body" multiline
          defaultValue="No se trata solo de publicar promociones. Se trata de tener control total sobre lo que se comunica — en todos los puntos de contacto, en tiempo real."
          tag="p"
          style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75 }}
        />
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: '#e8e8e8', marginBottom: 52 }} />

      {/* 3 pillars */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, flex: 1 }}>
        {DEFAULT_PILLARS.map((p) => (
          <div key={p.key} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <EditableText
              sectionId={SID} contentKey={`pillar.${p.key}.number`} defaultValue={p.number}
              tag="span"
              style={{ fontSize: 11, fontWeight: 800, color: '#dc2626', letterSpacing: '0.08em', display: 'block', marginBottom: 16 }}
            />
            <div style={{ width: 24, height: 2, background: '#dc2626', borderRadius: 1, marginBottom: 20 }} />
            <EditableText
              sectionId={SID} contentKey={`pillar.${p.key}.title`} defaultValue={p.title}
              tag="h3"
              style={{ fontSize: 16, fontWeight: 800, color: '#0d0d0f', lineHeight: 1.25, marginBottom: 14 }}
            />
            <EditableText
              sectionId={SID} contentKey={`pillar.${p.key}.body`} defaultValue={p.body} multiline
              tag="p"
              style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.75 }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
