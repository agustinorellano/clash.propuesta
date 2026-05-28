import { PlanData } from '@/lib/types'
import type { ProposalType, Promotion } from '@/lib/types'

interface PlansSectionProps {
  plans: PlanData[]
  proposalType?: ProposalType
  promotion?: Promotion
}

// ─── Accent colours (mirrors Clash Conecta per-plan palette) ────────────────
const PLAN_ACCENT: Record<string, string> = {
  free:    '#16a34a',
  gestion: '#dc2626',
  scale:   '#6366f1',
  custom:  '#d97706',
}
function getAccent(id: string) { return PLAN_ACCENT[id] ?? '#dc2626' }

// Tier labels & colours — identical to Clash Conecta
function getTierLabel(id: string) {
  return ({ free: 'Entrada', gestion: 'Popular', scale: 'Empresas', custom: 'Enterprise' })[id] ?? id
}
function getTierColor(id: string) {
  return ({ free: '#16a34a', gestion: '#dc2626', scale: '#6366f1', custom: '#d97706' })[id] ?? '#9ca3af'
}

// Custom card is dark (matches Clash Conecta's .pln-custom gradient)
function isDark(id: string) { return id === 'custom' }

/** Calcula precio con descuento promocional. Retorna null si no aplica. */
function calcPromoPrice(price: string, discount: number): string | null {
  if (discount <= 0) return null
  const cleaned = price.replace(/[$.]/g, '').replace(/\./g, '')
  const num = parseInt(cleaned)
  if (isNaN(num) || num === 0) return null
  const discounted = Math.round(num * (1 - discount / 100))
  return '$' + discounted.toLocaleString('es-AR').replace(/,/g, '.')
}

// ─── Responsive sizing helpers (A4 = 794px, padding 60px each side = 674px content) ─
function cardSizes(n: number) {
  if (n >= 4) return { padV: 18, padH: 13, nameFs: 16, taglineFs: 11, featFs: 10, priceNumFs: 21, priceTxtFs: 16, sepMar: '16px 0 12px' }
  if (n === 3) return { padV: 22, padH: 18, nameFs: 19, taglineFs: 12, featFs: 11, priceNumFs: 24, priceTxtFs: 18, sepMar: '18px 0 14px' }
  return         { padV: 26, padH: 22, nameFs: 21, taglineFs: 13, featFs: 12, priceNumFs: 28, priceTxtFs: 20, sepMar: '20px 0 16px' }
}

// ─── MALL MODE ──────────────────────────────────────────────────────────────
const MALL_FEATURES = [
  'Panel de gestión básico', 'Carga de promociones',
  'Dashboard básico de métricas', 'Distribución multi-canal',
  'Link inteligente por local', 'Código QR para promociones',
  'Seguimiento de interacciones', 'Soporte básico incluido',
]

function MallPlansSection() {
  return (
    <div style={{
      background: '#fff', minHeight: 1123, padding: '72px 60px',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ marginBottom: 52 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#dc2626', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Plan incluido
        </span>
        <h2 style={{ fontSize: 44, fontWeight: 900, color: '#0d0d0f', marginTop: 16, lineHeight: 1.08, letterSpacing: '-1px' }}>
          Tu espacio en el mall
        </h2>
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 14, maxWidth: 500, lineHeight: 1.75 }}>
          Como comercio adherido, ya formás parte del ecosistema digital del centro comercial.
          Estas son las herramientas digitales que tenés disponibles.
        </p>
      </div>
      <div style={{
        border: '1px solid #e8e8e8', borderRadius: 16, background: '#fafafa',
        padding: '36px 36px', flex: 1, display: 'flex', gap: 40, alignItems: 'flex-start',
      }}>
        <div style={{ width: 210, flexShrink: 0 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#9ca3af', marginBottom: 16 }} />
          <h3 style={{ fontWeight: 800, color: '#0d0d0f', fontSize: 20, marginBottom: 12, lineHeight: 1.2 }}>
            Tu plan incluido
          </h3>
          <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, marginBottom: 28 }}>
            Funcionalidades digitales para tu comercio dentro del ecosistema del mall.
          </p>
          <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 10, padding: '14px 16px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#374151', marginBottom: 4 }}>Incluido en tu contrato</p>
            <p style={{ fontSize: 11, color: '#9ca3af', lineHeight: 1.55 }}>
              Sin costo adicional — incluido en el acuerdo con el centro comercial.
            </p>
          </div>
        </div>
        <div style={{ width: 1, background: '#e8e8e8', alignSelf: 'stretch', flexShrink: 0 }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {MALL_FEATURES.map((f, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: '#f9fafb', border: '1px solid #f0f0f0',
              borderRadius: 8, padding: '10px 14px',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span style={{ fontSize: 12, color: '#374151', lineHeight: 1.4 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── COMMERCIAL MODE ─────────────────────────────────────────────────────────
export default function PlansSection({ plans, proposalType = 'commercial', promotion }: PlansSectionProps) {
  if (proposalType === 'mall') return <MallPlansSection />

  const visiblePlans = plans.filter(p => p.visible)
  const n = visiblePlans.length
  const sz = cardSizes(n)
  const cols = n <= 2 ? `repeat(${n}, 1fr)` : n === 3 ? 'repeat(3,1fr)' : 'repeat(2,1fr)'
  const cardGap = n >= 4 ? 10 : 14

  return (
    <div style={{
      background: '#fff',
      width: 794, height: 1123,
      padding: '56px 60px 48px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* ── Animation keyframes ── */}
      <style>{`
        @keyframes promo-badge-in {
          from { opacity:0; transform:translateY(-3px) scale(.92); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes promo-price-in {
          from { opacity:0; transform:translateY(4px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

      {/* ── Section header ── */}
      <div style={{ marginBottom: 10 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, color: '#dc2626',
          letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>
          Planes
        </span>
        <h2 style={{
          fontSize: 40, fontWeight: 900, color: '#0d0d0f',
          marginTop: 12, lineHeight: 1.08, letterSpacing: '-1px',
        }}>
          Elegí la forma de escalar
        </h2>
        <p style={{ color: '#6b7280', fontSize: 13, marginTop: 8, marginBottom: 20 }}>
          la comunicación de tus beneficios.
        </p>
        <p style={{
          fontSize: 9, fontWeight: 700, color: '#9ca3af',
          textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 12,
        }}>
          Planes comerciales
        </p>
      </div>

      {/* ── Plan cards grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: cardGap, alignItems: 'stretch' }}>
        {visiblePlans.map(plan => {
          const accent     = getAccent(plan.id)
          const dark       = isDark(plan.id)
          const tierColor  = getTierColor(plan.id)
          const isTextPrice = !plan.price.startsWith('$')
          const isAnnual   = plan.priceNote?.includes('anual')

          // ── Promotion ──────────────────────────────────────────────────────
          const promoActive =
            promotion &&
            promotion.mode !== 'none' &&
            promotion.discount > 0 &&
            (promotion.mode === 'all' || promotion.planId === plan.id)
          const promoPrice     = promoActive ? calcPromoPrice(plan.price, promotion!.discount) : null
          const hasVisualPromo = promoActive && promoPrice !== null
          const promoBadgeKey  = hasVisualPromo ? `${plan.id}-${promotion!.discount}` : `${plan.id}-none`

          // ── Card border / shadow ────────────────────────────────────────────
          const cardBorder = plan.highlighted
            ? `1.5px solid ${accent}`
            : dark
              ? '1px solid rgba(220,38,38,.18)'
              : hasVisualPromo
                ? '1.5px solid rgba(220,38,38,.22)'
                : '1.5px solid #e5e7eb'
          const cardShadow = plan.highlighted
            ? `0 0 0 1px rgba(220,38,38,.18), 0 12px 40px rgba(220,38,38,.07)`
            : 'none'
          const cardBg = dark
            ? 'linear-gradient(150deg,#110a0a 0%,#0f0f11 100%)'
            : '#fff'

          // ── Text colours per card type ──────────────────────────────────────
          const clrName     = dark ? '#fff'                     : '#0d0d0f'
          const clrTagline  = dark ? 'rgba(255,255,255,.38)'    : '#6b7280'
          const clrSep      = dark ? 'rgba(255,255,255,.07)'    : '#f0f0f2'
          const clrPriceNum = dark ? '#fff'                     : plan.highlighted ? accent : '#0d0d0f'
          const clrPriceNote= dark ? 'rgba(255,255,255,.28)'    : '#9ca3af'
          const clrFeatBase = dark ? 'rgba(255,255,255,.75)'    : '#374151'
          const clrFeatIncl = dark ? 'rgba(220,38,38,.65)'      : '#dc2626'
          const clrCheck    = accent

          return (
            <div key={plan.id} style={{
              position: 'relative',
              borderRadius: 20,
              border: cardBorder,
              padding: `${sz.padV}px ${sz.padH}px`,
              display: 'flex',
              flexDirection: 'column',
              background: cardBg,
              boxShadow: cardShadow,
              marginTop: plan.highlighted ? 13 : 0,
            }}>

              {/* ── Recomendado badge (above card) ── */}
              {plan.highlighted && (
                <div style={{
                  position: 'absolute', top: -13, left: 0, right: 0,
                  display: 'flex', justifyContent: 'center', pointerEvents: 'none',
                }}>
                  <span style={{
                    background: accent, color: '#fff',
                    fontSize: 10, fontWeight: 800,
                    padding: '4px 14px', borderRadius: 20,
                    letterSpacing: '0.5px', whiteSpace: 'nowrap',
                  }}>
                    ★ Recomendado
                  </span>
                </div>
              )}

              {/* ── Promo badge (top-right, inside card) ── */}
              {hasVisualPromo && (
                <div key={promoBadgeKey} style={{
                  position: 'absolute', top: 14, right: 14,
                  animation: 'promo-badge-in 0.22s cubic-bezier(0.34,1.4,0.64,1) both',
                }}>
                  <span style={{
                    background: '#0d0d0f', color: '#fff',
                    fontSize: 8, fontWeight: 800, letterSpacing: '0.05em',
                    padding: '3px 8px', borderRadius: 5, display: 'inline-block',
                  }}>
                    −{promotion!.discount}%
                  </span>
                </div>
              )}

              {/* ── Annual badge (top-right, when no promo) ── */}
              {isAnnual && !hasVisualPromo && !plan.highlighted && (
                <div style={{ position: 'absolute', top: 14, right: 14 }}>
                  <span style={{
                    background: '#fef3c7', color: '#92400e',
                    fontSize: 8, fontWeight: 700, padding: '2px 7px', borderRadius: 999,
                  }}>
                    −30% anual
                  </span>
                </div>
              )}

              {/* ── Tier tag ── */}
              <span style={{
                display: 'block',
                fontSize: 10, fontWeight: 700,
                letterSpacing: '1.2px', textTransform: 'uppercase',
                color: dark ? `${tierColor}99` : tierColor,
                marginBottom: 10,
              }}>
                {getTierLabel(plan.id)}
              </span>

              {/* ── Plan name ── */}
              <h3 style={{
                fontWeight: 900, color: clrName,
                fontSize: sz.nameFs,
                letterSpacing: '-0.4px', lineHeight: 1.1,
                marginBottom: 6,
              }}>
                {plan.name}
              </h3>

              {/* ── Tagline ── */}
              <p style={{
                color: clrTagline,
                fontSize: sz.taglineFs,
                lineHeight: 1.55,
                marginBottom: 20,
              }}>
                {plan.description}
              </p>

              {/* ── Separator ── */}
              <div style={{ height: 1, background: clrSep, margin: sz.sepMar }} />

              {/* ── Price ── */}
              <div style={{ marginBottom: 16 }}>
                {hasVisualPromo ? (
                  <div key={promoBadgeKey} style={{ animation: 'promo-price-in 0.25s ease both' }}>
                    {/* Original crossed out */}
                    <div style={{
                      fontSize: sz.taglineFs + 1, fontWeight: 600,
                      color: dark ? 'rgba(255,255,255,.2)' : '#d1d5db',
                      textDecoration: 'line-through', letterSpacing: '-0.2px', marginBottom: 3,
                    }}>
                      {plan.price}
                    </div>
                    {/* Discounted */}
                    <div style={{
                      fontSize: sz.priceNumFs, fontWeight: 900,
                      color: accent, lineHeight: 1, letterSpacing: '-1.5px',
                    }}>
                      {promoPrice}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 5 }}>
                      <span style={{ fontSize: 10, color: clrPriceNote }}>{plan.priceNote}</span>
                      {isAnnual && (
                        <span style={{
                          background: '#fef3c7', color: '#92400e',
                          fontSize: 8, fontWeight: 700, padding: '1px 5px', borderRadius: 999,
                        }}>
                          −30% anual
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{
                      fontSize: isTextPrice ? sz.priceTxtFs : sz.priceNumFs,
                      fontWeight: 900,
                      color: clrPriceNum,
                      lineHeight: 1,
                      letterSpacing: isTextPrice ? '-0.5px' : '-1.5px',
                    }}>
                      {plan.price}
                    </div>
                    <div style={{ fontSize: 11, color: clrPriceNote, marginTop: 5, lineHeight: 1.4 }}>
                      {plan.priceNote}
                      {isAnnual && !hasVisualPromo && (
                        <span style={{
                          background: '#fef3c7', color: '#92400e',
                          fontSize: 8, fontWeight: 700,
                          padding: '1px 5px', borderRadius: 999, marginLeft: 6,
                        }}>
                          −30% anual
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* ── Feature list ── */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, overflow: 'hidden', listStyle: 'none' }}>
                {plan.features.map((feature, i) => {
                  const isIncl   = feature.startsWith('✦')   // "Todo lo incluido en …"
                  const isAccent = feature.startsWith('★')   // Diferencial principal
                  const label    = feature.replace(/^[✦★]\s*/, '')

                  if (isIncl) {
                    // Inheritance line — no checkmark, red/dimmed, smaller
                    return (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{
                          fontSize: sz.featFs - 1,
                          fontWeight: 700,
                          color: clrFeatIncl,
                          lineHeight: 1.4,
                        }}>
                          ✦ {label}
                        </span>
                      </li>
                    )
                  }

                  return (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                      {/* Checkmark — coloured per plan */}
                      <svg
                        width="11" height="11" viewBox="0 0 24 24" fill="none"
                        stroke={isAccent ? accent : clrCheck}
                        strokeWidth="2.8"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      >
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span style={{
                        fontSize: sz.featFs,
                        fontWeight: 700,
                        color: isAccent ? (dark ? '#fff' : accent) : clrFeatBase,
                        lineHeight: 1.45,
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
