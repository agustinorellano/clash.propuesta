import { PlanData } from '@/lib/types'

interface PlansSectionProps {
  plans: PlanData[]
}

// Colores por plan (espeja clash-conecta)
const PLAN_COLORS: Record<string, { check: string; badge: string; border: string; shadow: string }> = {
  free:    { check: '#16a34a', badge: '#16a34a', border: '#bbf7d0', shadow: 'none' },
  gestion: { check: '#dc2626', badge: '#dc2626', border: '#dc2626', shadow: '0 4px 20px rgba(220,38,38,0.10)' },
  scale:   { check: '#6366f1', badge: '#6366f1', border: '#c7d2fe', shadow: 'none' },
  custom:  { check: '#d97706', badge: '#d97706', border: '#fde68a', shadow: 'none' },
}

function getColor(id: string) {
  return PLAN_COLORS[id] ?? PLAN_COLORS.gestion
}

export default function PlansSection({ plans }: PlansSectionProps) {
  const visiblePlans = plans.filter((p) => p.visible)
  const cols = visiblePlans.length <= 2 ? visiblePlans.length : visiblePlans.length <= 3 ? 3 : 2

  return (
    <div style={{ background: '#fff', padding: '56px 48px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          Planes
        </span>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginTop: 8, lineHeight: 1.15 }}>
          Elegí la forma de escalar
        </h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 8, fontStyle: 'italic' }}>
          la comunicación de tus beneficios.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 16,
      }}>
        {visiblePlans.map((plan) => {
          const c = getColor(plan.id)
          const isAnnual = plan.priceNote?.includes('anual')

          return (
            <div
              key={plan.id}
              style={{
                position: 'relative',
                borderRadius: 16,
                border: `2px solid ${plan.highlighted ? c.border : '#e5e7eb'}`,
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: plan.highlighted ? c.shadow : 'none',
              }}
            >
              {/* Recomendado badge */}
              {plan.highlighted && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    background: c.badge, color: '#fff',
                    fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999,
                    whiteSpace: 'nowrap',
                  }}>
                    ★ Recomendado
                  </span>
                </div>
              )}

              {/* Annual badge */}
              {isAnnual && (
                <div style={{ position: 'absolute', top: 10, right: 10 }}>
                  <span style={{
                    background: '#fef3c7', color: '#92400e',
                    fontSize: 10, fontWeight: 700,
                    padding: '2px 7px', borderRadius: 999,
                  }}>
                    −30% anual
                  </span>
                </div>
              )}

              {/* Plan name + description */}
              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontWeight: 700, color: '#111827', fontSize: 15, marginBottom: 6 }}>{plan.name}</h3>
                <p style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.55 }}>{plan.description}</p>
              </div>

              {/* Price */}
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: plan.highlighted ? c.check : '#111827' }}>
                  {plan.price}
                </div>
                <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>{plan.priceNote}</div>
              </div>

              {/* Features */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
                {plan.features.map((feature, i) => {
                  const isIncluded = feature.startsWith('✦')
                  const isAccent = feature.startsWith('★')
                  const label = feature.replace(/^[✦★]\s*/, '')

                  return (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                      {isIncluded ? (
                        <span style={{ fontSize: 11, color: c.check, minWidth: 14, marginTop: 1, fontWeight: 700 }}>✦</span>
                      ) : isAccent ? (
                        <span style={{ fontSize: 11, color: c.check, minWidth: 14, marginTop: 1, fontWeight: 700 }}>★</span>
                      ) : (
                        <svg
                          width="13" height="13"
                          viewBox="0 0 24 24" fill="none"
                          stroke={c.check}
                          strokeWidth="2.5"
                          style={{ flexShrink: 0, marginTop: 2 }}
                        >
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                      <span style={{
                        fontSize: 12,
                        color: isAccent ? '#111827' : '#4b5563',
                        lineHeight: 1.5,
                        fontWeight: isAccent ? 600 : 400,
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
