export interface PlanData {
  id: string
  name: string
  price: string
  priceNote: string
  description: string
  features: string[]
  highlighted: boolean
  visible: boolean
}

export interface ProposalConfig {
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
  }[]
  plans: PlanData[]
}

export const defaultConfig: ProposalConfig = {
  brand: { name: '', logoUrl: '', logoBase64: '', observations: '', branches: 1, operationType: '', needs: '' },
  sections: [
    { id: 'cover',    label: 'Portada',          enabled: true,  order: 0 },
    { id: 'concept',  label: 'Concepto',          enabled: true,  order: 1 },
    { id: 'solution', label: 'La Solución',       enabled: true,  order: 2 },
    { id: 'circuit',  label: 'Circuito Completo', enabled: true,  order: 3 },
    { id: 'distrib',  label: 'Distribución',      enabled: true,  order: 4 },
    { id: 'analytics',label: 'Analytics',         enabled: true,  order: 5 },
    { id: 'plans',    label: 'Planes',            enabled: true,  order: 6 },
    { id: 'case',     label: 'Caso Barber King',  enabled: false, order: 7 },
  ],
  plans: [
    {
      id: 'free',
      name: 'Gratuito',
      price: 'Gratis',
      priceNote: 'Sin costo de activación',
      description: 'Para comenzar a digitalizar la comunicación de beneficios sin inversión inicial.',
      features: [
        'Panel de gestión básico — inicio para carga de promociones',
        'Dashboard con: Publicaciones, Activos por vencer, Inactivos, Sucursales y QR de sucursales',
        'Distribución por link y QR genérico (sin diseño personalizado)',
        'Soporte por email',
      ],
      highlighted: false,
      visible: true,
    },
    {
      id: 'managed',
      name: 'Gestión Asistida',
      price: 'Consultar',
      priceNote: 'Personalizado según operación',
      description: 'Para marcas que quieren operar sin fricción con el respaldo de nuestro equipo.',
      features: [
        'Todo lo incluido en el plan Gratuito',
        'Onboarding personalizado',
        'Gestión de carga de promociones por el equipo de Clash',
        'Analytics avanzado — Mi audiencia + todas las funcionalidades del dashboard',
        'Soporte prioritario por WhatsApp y email',
      ],
      highlighted: true,
      visible: true,
    },
    {
      id: 'scale',
      name: 'Enterprise',
      price: 'Personalizado',
      priceNote: 'Según volumen y operación',
      description: 'Para grandes marcas con operaciones complejas y múltiples canales.',
      features: [
        'Todo lo incluido en Gestión Asistida',
        'Integración de widget estándar para página web, pantallas y tótems digitales (con marca de agua)',
        'Account Manager dedicado — trabajo en conjunto sobre estrategia de comunicación',
        'Reportes trimestrales personalizados con análisis, recomendaciones y sugerencias — desde el 3er mes',
        'Kit comercial — diseño de QR personalizado para tu marca',
        'Próximamente: envío automatizado de Gmail a managers por sucursal',
      ],
      highlighted: false,
      visible: true,
    },
    {
      id: 'custom',
      name: 'Propuesta a medida',
      price: 'A medida',
      priceNote: 'Propuesta completamente personalizada',
      description: 'Diseñado desde cero para tu operación, sin límites.',
      features: [
        'Todo lo que ofrece el plan Enterprise',
        'Materiales físicos incluidos — coordinamos proveedores y entregamos en cada sucursal',
        'Vistas personalizadas de widget (sin marca de agua)',
        'Página web personalizada de promociones para tu marca',
      ],
      highlighted: false,
      visible: true,
    },
  ],
}
