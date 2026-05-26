import { PlanData } from '@/lib/types'

interface PlansSectionProps {
  plans: PlanData[]
}

const PLAN_COLORS: Record<string, { accent: string; border: string; bg: string }> = {
  free:    { accent: '#16a34a', border: '#bbf7d0', bg: '#f0fdf4' },
  gestion: { accent: '#dc2626', border: '#dc2626', bg: '#fff5f5' },
  scale:   { accent: '#6366f1', border: '#c7d2fe', bg: '#eef2ff' },
  custom:  { accent: '#d97706', border: '#fde68a', bg: '#fffbeb' },
}

function getColor(id: string) {
  return PLAN_COLORS[id] ?? PLAN_COLORS.gestion
}

export default function PlansSection({ plans }: PlansSectionProps) {
  const visiblePlans = plans.filter((p) => p.visible)

  return (
    <div style={{
      background: '#fff',
      minHeight: 1123,
      padding: '72px 60px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
          Planes
        </span>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#111827', marginTop: 16, lineHeight: 1.1, letterSpacing: '-1px' }}>
          Elegí la forma de escalar
        </h2>
        <p style={{ color: '#6b7280', fontSize: 15, marginTop: 12, fontStyle: 'italic' }}>
          la comunicación de tus beneficios.
        </p>
      </div>

      {/* Plan cards — 2×2 grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: visiblePlans.length <= 2 ? `repeat(${visiblePlans.length}, 1fr)` : '1fr 1fr',
        gap: 18,
        flex: 1,
      }}>
        {visiblePlans.map((plan) => {
          const c = getColor(plan.id)
          const isAnnual = plan.priceNote?.includes('anual')

          return (
            <div key={plan.id} style={{
              position: 'relative',
              borderRadius: 20,
              border: `2px solid ${plan.highlighted ? c.border : '#f3f4f6'}`,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              background: plan.highlighted ? c.bg : '#fff',
            }}>
              {/* Recomendado badge */}
              {plan.highlighted && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    background: c.accent, color: '#fff',
                    fontSize: 10, fontWeight: 700, padding: '4px 14px', borderRadius: 999,
                    whiteSpace: 'nowrap', letterSpacing: '0.05em',
                  }}>
                    ★ Recomendado
                  </span>
                </div>
              )}

              {/* Annual tag */}
              {isAnnual && (
                <div style={{ position: 'absolute', top: 12, right: 12 }}>
                  <span style={{ background: '#fef3c7', color: '#92400e', fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 999 }}>
                    −30% anual
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontWeight: 800, color: '#111827', fontSize: 16, marginBottom: 6 }}>{plan.name}</h3>
                <p style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.55 }}>{plan.description}</p>
              </div>

              {/* Price */}
              <div style={{ marginBottom: 20, paddingBottom: 16, borderBottom: `1px solid ${plan.highlighted ? c.border : '#f3f4f6'}` }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: plan.highlighted ? c.accent : '#111827', lineHeight: 1 }}>
                  {plan.price}
                </div>
                <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 5 }}>{plan.priceNote}</div>
              </div>

              {/* Features */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                {plan.features.map((feature, i) => {
                  const isIncluded = feature.startsWith('✦')
                  const isAccent   = feature.startsWith('★')
                  const label      = feature.replace(/^[✦★]\s*/, '')

                  return (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      {isIncluded || isAccent ? (
                        <span style={{ fontSize: 10, color: c.accent, minWidth: 14, marginTop: 2, fontWeight: 700 }}>
                          {isAccent ? '★' : '✦'}
                        </span>
                      ) : (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c.accent} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                      <span style={{ fontSize: 11, color: isAccent ? '#111827' : '#4b5563', lineHeight: 1.5, fontWeight: isAccent ? 600 : 400 }}>
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
