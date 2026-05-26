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
      height: 1123,
      padding: '72px 60px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 44 }}>
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
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 12 }}>
          la comunicación de tus beneficios.
        </p>
      </div>

      {/* Plan cards */}
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 14, flex: 1 }}>
        {visiblePlans.map((plan) => {
          const accent = getAccent(plan.id)
          const isAnnual = plan.priceNote?.includes('anual')

          return (
            <div key={plan.id} style={{
              position: 'relative',
              borderRadius: 12,
              border: plan.highlighted
                ? `1.5px solid ${accent}`
                : '1px solid #e8e8e8',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              background: '#fff',
            }}>
              {/* Highlighted badge */}
              {plan.highlighted && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%',
                  transform: 'translateX(-50%)',
                }}>
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

              {/* Annual badge */}
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

              {/* Plan name + description */}
              <div style={{ marginBottom: 16 }}>
                <div style={{
                  display: 'inline-block',
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

              {/* Price */}
              <div style={{
                marginBottom: 18,
                paddingBottom: 16,
                borderBottom: '1px solid #f0f0f0',
              }}>
                <div style={{
                  fontSize: visiblePlans.length === 3 ? 22 : 26,
                  fontWeight: 900,
                  color: plan.highlighted ? accent : '#0d0d0f',
                  lineHeight: 1,
                  letterSpacing: '-0.5px',
                }}>
                  {plan.price}
                </div>
                <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 5, lineHeight: 1.4 }}>
                  {plan.priceNote}
                </div>
              </div>

              {/* Features */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
                {plan.features.map((feature, i) => {
                  const isSpecial = feature.startsWith('✦') || feature.startsWith('★')
                  const label = feature.replace(/^[✦★]\s*/, '')

                  return (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                      <svg
                        width="11" height="11"
                        viewBox="0 0 24 24" fill="none"
                        stroke={isSpecial ? accent : '#d1d5db'}
                        strokeWidth="2.5"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      >
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
    </div>
  )
}
