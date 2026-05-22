import { PlanData } from '@/lib/types'

interface PlansSectionProps {
  plans: PlanData[]
}

export default function PlansSection({ plans }: PlansSectionProps) {
  const visiblePlans = plans.filter((p) => p.visible)
  const cols = visiblePlans.length <= 2 ? visiblePlans.length : 2

  return (
    <div style={{ background: '#fff', padding: '56px 48px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          Planes
        </span>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginTop: 8, lineHeight: 1.15 }}>
          Encontrá el plan ideal
        </h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 8 }}>
          Cada plan se adapta al tamaño y necesidades de tu operación
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 16,
      }}>
        {visiblePlans.map((plan) => (
          <div
            key={plan.id}
            style={{
              position: 'relative',
              borderRadius: 16,
              border: plan.highlighted ? '2px solid #dc2626' : '2px solid #e5e7eb',
              padding: '24px 22px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: plan.highlighted ? '0 4px 20px rgba(220,38,38,0.1)' : 'none',
            }}
          >
            {plan.highlighted && (
              <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  background: '#dc2626', color: '#fff',
                  fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999,
                }}>
                  ★ Recomendado
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
              <div style={{ fontSize: 24, fontWeight: 900, color: plan.highlighted ? '#dc2626' : '#111827' }}>
                {plan.price}
              </div>
              <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>{plan.priceNote}</div>
            </div>

            {/* Features */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              {plan.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <svg
                    width="15" height="15"
                    viewBox="0 0 24 24" fill="none"
                    stroke={plan.highlighted ? '#dc2626' : '#9ca3af'}
                    strokeWidth="2.5"
                    style={{ flexShrink: 0, marginTop: 1 }}
                  >
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span style={{ fontSize: 12, color: '#4b5563', lineHeight: 1.5 }}>{feature}</span>
                </li>
              ))}
            </ul>

            {plan.highlighted && (
              <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid #fee2e2', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#dc2626', fontWeight: 600 }}>
                  Hablemos de este plan
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
