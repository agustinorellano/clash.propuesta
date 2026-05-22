'use client'

import { useState } from 'react'
import { PlanData } from '@/lib/types'
import { ChevronDown, ChevronUp, Plus, X, Star, Eye, EyeOff } from 'lucide-react'

interface PlanEditorProps {
  plans: PlanData[]
  onChange: (plans: PlanData[]) => void
}

function PlanCard({
  plan,
  onUpdate,
}: {
  plan: PlanData
  onUpdate: (updated: PlanData) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const [newFeature, setNewFeature] = useState('')

  const inputClass =
    'w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-transparent bg-white'

  function addFeature() {
    if (!newFeature.trim()) return
    onUpdate({ ...plan, features: [...plan.features, newFeature.trim()] })
    setNewFeature('')
  }

  function removeFeature(idx: number) {
    onUpdate({ ...plan, features: plan.features.filter((_, i) => i !== idx) })
  }

  function updateFeature(idx: number, val: string) {
    const updated = [...plan.features]
    updated[idx] = val
    onUpdate({ ...plan, features: updated })
  }

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all ${
        plan.highlighted ? 'border-red-300 shadow-sm' : 'border-gray-200'
      } ${!plan.visible ? 'opacity-50' : ''}`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 p-3 bg-white">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex-1 flex items-center gap-2 text-left"
        >
          <span className="text-sm font-semibold text-gray-900 flex-1">{plan.name}</span>
          <span className="text-xs text-gray-500">{plan.price}</span>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>
        <button
          onClick={() => onUpdate({ ...plan, highlighted: !plan.highlighted })}
          title={plan.highlighted ? 'Quitar destacado' : 'Destacar plan'}
          className={`p-1.5 rounded-md transition-colors ${
            plan.highlighted
              ? 'text-amber-500 bg-amber-50'
              : 'text-gray-400 hover:text-amber-500 hover:bg-amber-50'
          }`}
        >
          <Star className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => onUpdate({ ...plan, visible: !plan.visible })}
          title={plan.visible ? 'Ocultar plan' : 'Mostrar plan'}
          className={`p-1.5 rounded-md transition-colors ${
            plan.visible
              ? 'text-gray-500 hover:bg-gray-100'
              : 'text-gray-300 hover:text-gray-500 hover:bg-gray-100'
          }`}
        >
          {plan.visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expanded editor */}
      {expanded && (
        <div className="p-3 pt-0 border-t border-gray-100 bg-gray-50 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Precio</label>
              <input
                type="text"
                value={plan.price}
                onChange={(e) => onUpdate({ ...plan, price: e.target.value })}
                placeholder="Gratis / $X / Consultar"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Nota precio</label>
              <input
                type="text"
                value={plan.priceNote}
                onChange={(e) => onUpdate({ ...plan, priceNote: e.target.value })}
                placeholder="Por mes / Sin activación"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Descripción</label>
            <textarea
              value={plan.description}
              onChange={(e) => onUpdate({ ...plan, description: e.target.value })}
              rows={2}
              className={inputClass + ' resize-none'}
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1.5">
              Features ({plan.features.length})
            </label>
            <div className="space-y-1.5">
              {plan.features.map((f, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={f}
                    onChange={(e) => updateFeature(i, e.target.value)}
                    className={inputClass + ' flex-1'}
                  />
                  <button
                    onClick={() => removeFeature(i)}
                    className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-1.5 mt-1.5">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addFeature()}
                placeholder="Nueva feature..."
                className={inputClass + ' flex-1'}
              />
              <button
                onClick={addFeature}
                disabled={!newFeature.trim()}
                className="p-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function PlanEditor({ plans, onChange }: PlanEditorProps) {
  function updatePlan(updated: PlanData) {
    onChange(plans.map((p) => (p.id === updated.id ? updated : p)))
  }

  return (
    <div className="p-4 space-y-3">
      <div className="pb-2 border-b border-gray-100">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Planes comerciales
        </h2>
        <p className="text-xs text-gray-400 mt-0.5">Edita precios y features</p>
      </div>

      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} onUpdate={updatePlan} />
      ))}
    </div>
  )
}
