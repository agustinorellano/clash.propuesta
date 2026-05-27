import type { Billing, ComputedPlanData } from './plansConfig'
import { getComputedPlans } from './plansConfig'

// PlanData es idéntico a ComputedPlanData — re-exportamos como alias
export type PlanData = ComputedPlanData

export type { Billing }

export type ProposalType = 'commercial' | 'mall'

export type PromoMode = 'none' | 'all' | 'single'

export interface Promotion {
  mode: PromoMode
  discount: number   // e.g. 20 = 20 %, 0 = sin descuento
  planId: string     // sólo cuando mode === 'single'
}

export interface ProposalConfig {
  billing: Billing
  proposalType: ProposalType
  promotion: Promotion
  brand: {
    name: string
    logoUrl: string
    logoBase64: string   // base64 data URL from file upload (takes priority over logoUrl)
    observations: string
    branches: number
    operationType: string
    needs: string
  }
  sections: {
    id: string
    label: string
    enabled: boolean
    order: number
    custom?: {
      title: string
      subtitle: string
      body: string
    }
  }[]
  plans: PlanData[]
}

export const defaultConfig: ProposalConfig = {
  billing: 'monthly',
  proposalType: 'commercial',
  promotion: { mode: 'none', discount: 0, planId: '' },
  brand: { name: '', logoUrl: '', logoBase64: '', observations: '', branches: 1, operationType: '', needs: '' },
  sections: [
    { id: 'cover',      label: 'Portada',             enabled: true,  order: 0 },
    { id: 'concept',    label: 'Concepto',            enabled: true,  order: 1 },
    { id: 'solution',   label: 'La Solución',         enabled: true,  order: 2 },
    { id: 'circuit',    label: 'Circuito Completo',   enabled: true,  order: 3 },
    { id: 'clientview', label: 'Vista del cliente',   enabled: true,  order: 4 },
    { id: 'distrib',    label: 'Distribución',        enabled: true,  order: 5 },
    { id: 'analytics',  label: 'Analytics',           enabled: true,  order: 6 },
    { id: 'plans',      label: 'Planes',              enabled: true,  order: 7 },
    { id: 'case',       label: 'Caso Burger King',    enabled: false, order: 8 },
  ],
  // Planes calculados para 1 sucursal, facturación mensual
  plans: getComputedPlans(1, 'monthly'),
}
