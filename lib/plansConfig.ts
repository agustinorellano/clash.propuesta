// ─────────────────────────────────────────────────────────────────────────────
// plansConfig.ts  —  Fuente única de verdad para pricing y features de planes
// Espeja el objeto PRICING de clash-conecta/index.html
// ─────────────────────────────────────────────────────────────────────────────

export type ScaleTier = 's1' | 's2' | 's3' | 's4'
export type Billing = 'monthly' | 'annual'

export interface PlanPricing {
  price: string
  note: string
  cta: string
}

export interface PlanStaticConfig {
  id: string
  name: string
  tier: string
  description: string
  features: string[]
  pricing: Record<ScaleTier, PlanPricing>
}

// ── Información de escala ────────────────────────────────────────────────────
export const SCALE_LABELS: Record<ScaleTier, string> = {
  s1: 'Hasta 15 sucursales',
  s2: 'Hasta 50 sucursales',
  s3: 'Hasta 100 sucursales',
  s4: '+100 sucursales',
}

/** Deriva el tier de escala según cantidad de sucursales */
export function getScaleTier(branches: number): ScaleTier {
  if (branches <= 15) return 's1'
  if (branches <= 50) return 's2'
  if (branches <= 100) return 's3'
  return 's4'
}

/** Aplica descuento anual del 30% a un precio en ARS ("$380.000" → "$266.000") */
export function applyBilling(priceStr: string, billing: Billing): string {
  if (billing === 'monthly') return priceStr
  const num = parseInt(priceStr.replace(/[$.]/g, ''))
  if (isNaN(num)) return priceStr        // "Gratis" / "A cotizar" / "A medida"
  const discounted = Math.round(num * 0.7)
  return '$' + discounted.toLocaleString('es-AR').replace(/,/g, '.')
}

// ── Plan destacado por tier ──────────────────────────────────────────────────
export const FEATURED_PLAN: Record<ScaleTier, string> = {
  s1: 'gestion',
  s2: 'gestion',
  s3: 'gestion',
  s4: 'custom', // +100 sucursales → destacar Propuesta a medida
}

// ── Configuración estática de planes ────────────────────────────────────────
// IMPORTANTE: Mantener sincronizado con el HTML de clash-conecta/index.html
export const PLANS_STATIC: PlanStaticConfig[] = [
  {
    id: 'free',
    name: 'Gratuito',
    tier: 'Entrada',
    description: 'Para comenzar a digitalizar la comunicación de beneficios sin inversión inicial.',
    features: [
      'Panel de gestión básico — inicio para carga de promociones',
      'Dashboard: Publicaciones activas, activos por vencer, inactivos, sucursales y QR',
      'Distribución por link y QR genérico (sin diseño personalizado)',
      'Soporte por email',
    ],
    pricing: {
      s1: { price: 'Gratis', note: 'Sin costo de activación',     cta: 'Empezar gratis' },
      s2: { price: 'Gratis', note: 'Sin costo de activación',     cta: 'Empezar gratis' },
      s3: { price: 'Gratis', note: 'Sin costo de activación',     cta: 'Empezar gratis' },
      s4: { price: 'Gratis', note: 'Sin costo de activación',     cta: 'Empezar gratis' },
    },
  },
  {
    id: 'gestion',
    name: 'Promos gestionadas',
    tier: 'Recomendado',
    description: 'Para marcas que quieren operar sin fricción con el respaldo de nuestro equipo.',
    features: [
      '✦ Todo lo incluido en Gratuito',
      '★ Cargamos y mantenemos tus promociones por vos — nuestro equipo gestiona tu contenido activamente',
      'Onboarding personalizado',
      'Analytics avanzado — Mi audiencia + todas las funcionalidades del dashboard',
      'Soporte prioritario (WhatsApp y email)',
      'Kit comercial — QR personalizado para la marca',
    ],
    pricing: {
      s1: { price: '$380.000', note: '/ mes + IVA',  cta: 'Consultar propuesta' },
      s2: { price: '$520.000', note: '/ mes + IVA',  cta: 'Consultar propuesta' },
      s3: { price: '$790.000', note: '/ mes + IVA',  cta: 'Consultar propuesta' },
      s4: { price: 'A cotizar', note: 'Propuesta personalizada',           cta: 'Consultar propuesta' },
    },
  },
  {
    id: 'scale',
    name: 'Scale',
    tier: 'Empresas',
    description: 'Para grandes marcas con operaciones complejas y múltiples canales.',
    features: [
      '✦ Todo lo incluido en Promos gestionadas',
      'Integración con sistemas propios — widget para web, pantallas y tótems digitales',
      'Account Manager dedicado — seguimiento y estrategia semanal',
      'Reportes personalizados trimestrales — análisis y recomendaciones operativas',
      'Kit comercial personalizado — QR, materiales y diseño de marca',
      'Integración con tus sistemas — API propia, ERP, POS y más',
    ],
    pricing: {
      s1: { price: '$590.000',   note: '/ mes + IVA',  cta: 'Coordinar demo' },
      s2: { price: '$1.250.000', note: '/ mes + IVA',  cta: 'Coordinar demo' },
      s3: { price: '$2.100.000', note: '/ mes + IVA',  cta: 'Coordinar demo' },
      s4: { price: 'A cotizar',  note: 'Infraestructura enterprise',          cta: 'Coordinar demo' },
    },
  },
  {
    id: 'custom',
    name: 'Propuesta a medida',
    tier: 'Enterprise',
    description: 'Diseñado desde cero para marcas con necesidades únicas y operaciones de alta escala.',
    features: [
      '✦ Todo lo incluido en Scale',
      'Materiales físicos incluidos — coordinación de proveedores, producción y entrega en sucursales',
      'Vistas personalizadas de widget — widgets adaptados para pantallas, tótems y sitios web',
      'Página web personalizada de promociones para tu marca',
      'Coordinación de proveedores — producción y entrega completa',
    ],
    pricing: {
      s1: { price: 'A medida',  note: 'Propuesta personalizada',                cta: 'Hablar con Clash' },
      s2: { price: 'A medida',  note: 'Propuesta personalizada',                cta: 'Hablar con Clash' },
      s3: { price: 'A medida',  note: 'Propuesta personalizada',                cta: 'Hablar con Clash' },
      s4: { price: 'A cotizar', note: 'Implementación enterprise dedicada',     cta: 'Hablar con Clash' },
    },
  },
]

// ── Computed plans (para pasar a PlansSection / PDF) ────────────────────────
export interface ComputedPlanData {
  id: string
  name: string
  price: string
  priceNote: string
  description: string
  features: string[]
  highlighted: boolean
  visible: boolean
}

/**
 * Genera el array de planes con precios calculados según sucursales y facturación.
 * Compatible con la interface PlanData de types.ts.
 */
export function getComputedPlans(
  branches: number,
  billing: Billing,
): ComputedPlanData[] {
  const tier = getScaleTier(branches)
  const featuredId = FEATURED_PLAN[tier]

  return PLANS_STATIC.map((plan) => {
    const rawPricing = plan.pricing[tier]
    const computedPrice = applyBilling(rawPricing.price, billing)

    let priceNote = rawPricing.note
    if (billing === 'annual' && computedPrice !== rawPricing.price) {
      // Append annual discount label
      priceNote = priceNote + ' · anual (−30%)'
    }

    return {
      id: plan.id,
      name: plan.name,
      price: computedPrice,
      priceNote,
      description: plan.description,
      features: plan.features,
      highlighted: plan.id === featuredId,
      visible: plan.id !== 'free', // plan gratuito oculto por default (poco relevante para enterprise)
    }
  })
}
