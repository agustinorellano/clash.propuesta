import { Check, Star } from 'lucide-react'
import { PlanData } from '@/lib/types'

interface PlansSectionProps {
  plans: PlanData[]
}

export default function PlansSection({ plans }: PlansSectionProps) {
  const visiblePlans = plans.filter((p) => p.visible)

  return (
    <div className="bg-white p-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            Planes
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Encontrá el plan ideal</h2>
          <p className="text-gray-500 text-sm mt-2">
            Cada plan se adapta al tamaño y necesidades de tu operación
          </p>
        </div>

        <div className={`grid gap-4 ${visiblePlans.length <= 2 ? 'grid-cols-2' : visiblePlans.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
          {visiblePlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 p-6 flex flex-col ${
                plan.highlighted
                  ? 'border-red-600 shadow-lg shadow-red-100'
                  : 'border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    <Star className="w-3 h-3" />
                    Recomendado
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-bold text-gray-900 text-base mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-5">
                <div className={`text-2xl font-black ${plan.highlighted ? 'text-red-600' : 'text-gray-900'}`}>
                  {plan.price}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{plan.priceNote}</div>
              </div>

              <ul className="space-y-2 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-red-600' : 'text-gray-400'
                      }`}
                    />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.highlighted && (
                <div className="mt-5 pt-5 border-t border-red-100">
                  <div className="text-xs text-center text-red-600 font-semibold">
                    Hablemos de este plan
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
