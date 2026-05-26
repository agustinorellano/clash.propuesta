import { PlanData } from '@/lib/types'

interface PlansSectionProps {
  plans: PlanData[]
}

const PLAN_ACCENT: Record<string, string> = {
  free:    '#16a34a',
  gestion: '#dc2626',
  scale:   '#6366f1',
  custom:  '#d97706',
}

function getAccent(id: string) {
  return PLAN_ACCENT[id] ?? '#dc2626'
}

const MALL_FEATURES = [
  'Panel de gestión básico',
  'Carga de promociones',
  'Dashboard básico',
  'Distribución multi-canal',
  'Links inteligentes por local',
  'QR para promociones',
  'Seguimiento de promociones',
  'Soporte básico incluido',
]

export default function PlansSection({ plans }: PlansSectionProps) {
  const visiblePlans = plans.filter((p) => p.visible)
  const cols = visiblePlans.length <= 2
    ? `repeat(${visiblePlans.length}, 1fr)`
    : visiblePlans.length === 3
      ? 'repeat(3, 1fr)'
      : '1fr 1fr'

  return (
    <div style={{
      background: '#fff',
      minHeight: 1123,
      padding: '72px 60px 60px',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* ── PLANES COMERCIALES ── */}
      <div style={{ marginBottom: 10 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#dc2626',
          letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>
          Planes
        </span>
        <h2 style={{
          fontSize: 44, fontWeight: 900, color: '#0d0d0f',
          marginTop: 16, lineHeight: 1.08, letterSpacing: '-1px',
        }}>
          Elegí la forma de escalar
        </h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 12, marginBottom: 32 }}>
          la comunicación de tus beneficios.
        </p>

        {/* Sub-label enterprise */}
        <p style={{
          fontSize: 9, fontWeight: 700, color: '#9ca3af',
          textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16,
        }}>
          Planes comerciales
        </p>
      </div>

      {/* Plan cards */}
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 14, alignItems: 'stretch' }}>
        {visiblePlans.map((plan) => {
          const accent = getAccent(plan.id)
          const isAnnual = plan.priceNote?.includes('anual')

          return (
            <div key={plan.id} style={{
              position: 'relative',
              borderRadius: 12,
              border: plan.highlighted ? `1.5px solid ${accent}` : '1px solid #e8e8e8',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              background: '#fff',
            }}>
              {plan.highlighted && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    background: accent, color: '#fff',
                    fontSize: 9, fontWeight: 700,
                    padding: '3px 12px', borderRadius: 999,
                    whiteSpace: 'nowrap', letterSpacing: '0.06em',
                  }}>
                    ★ Recomendado
                  </span>
                </div>
              )}

              {isAnnual && (
                <div style={{ position: 'absolute', top: 14, right: 14 }}>
                  <span style={{
                    background: '#fef3c7', color: '#92400e',
                    fontSize: 8, fontWeight: 700,
                    padding: '2px 7px', borderRadius: 999,
                  }}>
                    −30% anual
                  </span>
                </div>
              )}

              <div style={{ marginBottom: 16 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: accent, marginBottom: 10,
                }} />
                <h3 style={{
                  fontWeight: 800, color: '#0d0d0f',
                  fontSize: visiblePlans.length === 3 ? 14 : 16,
                  marginBottom: 6, lineHeight: 1.3,
                }}>
                  {plan.name}
                </h3>
                <p style={{ color: '#6b7280', fontSize: 11, lineHeight: 1.55 }}>
                  {plan.description}
                </p>
              </div>

              <div style={{ marginBottom: 18, paddingBottom: 16, borderBottom: '1px solid #f0f0f0' }}>
                <div style={{
                  fontSize: visiblePlans.length === 3 ? 22 : 26,
                  fontWeight: 900,
                  color: plan.highlighted ? accent : '#0d0d0f',
                  lineHeight: 1, letterSpacing: '-0.5px',
                }}>
                  {plan.price}
                </div>
                <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 5, lineHeight: 1.4 }}>
                  {plan.priceNote}
                </div>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
                {plan.features.map((feature, i) => {
                  const isSpecial = feature.startsWith('✦') || feature.startsWith('★')
                  const label = feature.replace(/^[✦★]\s*/, '')
                  return (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                        stroke={isSpecial ? accent : '#d1d5db'} strokeWidth="2.5"
                        style={{ flexShrink: 0, marginTop: 2 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span style={{
                        fontSize: 10,
                        color: isSpecial ? '#0d0d0f' : '#4b5563',
                        lineHeight: 1.5,
                        fontWeight: isSpecial ? 600 : 400,
                      }}>
                        {label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      {/* ── DIVIDER ── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        margin: '40px 0 32px',
      }}>
        <div style={{ flex: 1, height: 1, background: '#e8e8e8' }} />
        <span style={{
          fontSize: 9, fontWeight: 600, color: '#c4c4c4',
          letterSpacing: '0.2em', textTransform: 'uppercase', flexShrink: 0,
        }}>
          También disponible
        </span>
        <div style={{ flex: 1, height: 1, background: '#e8e8e8' }} />
      </div>

      {/* ── PLANES PARA MALLS ── */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontSize: 9, fontWeight: 700, color: '#9ca3af',
          textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 6,
        }}>
          Planes para comercios de malls
        </p>
        <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.5 }}>
          Para comercios adheridos al ecosistema del shopping — funcionalidades incluidas dentro del plan del mall.
        </p>
      </div>

      {/* Mall plan card — horizontal, más liviano */}
      <div style={{
        border: '1px solid #e8e8e8',
        borderRadius: 12,
        background: '#fafafa',
        padding: '24px 28px',
        display: 'flex',
        gap: 32,
        alignItems: 'flex-start',
      }}>
        {/* Left — nombre + descripción */}
        <div style={{ flexShrink: 0, width: 180 }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#6b7280', marginBottom: 10,
          }} />
          <h3 style={{
            fontWeight: 700, color: '#0d0d0f',
            fontSize: 14, marginBottom: 8, lineHeight: 1.3,
          }}>
            Plan para comercios adheridos
          </h3>
          <p style={{ fontSize: 11, color: '#9ca3af', lineHeight: 1.6, marginBottom: 14 }}>
            Funcionalidades disponibles para comercios dentro del ecosistema del mall.
          </p>
          <div style={{
            display: 'inline-block',
            background: '#f3f4f6',
            border: '1px solid #e8e8e8',
            borderRadius: 8,
            padding: '6px 12px',
          }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#6b7280' }}>Incluido en el plan del mall</span>
          </div>
        </div>

        {/* Divider vertical */}
        <div style={{ width: 1, background: '#e8e8e8', alignSelf: 'stretch', flexShrink: 0 }} />

        {/* Right — features en 2 columnas */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px 24px',
        }}>
          {MALL_FEATURES.map((feature, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke="#9ca3af" strokeWidth="2.5"
                style={{ flexShrink: 0, marginTop: 2 }}>
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.5 }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
