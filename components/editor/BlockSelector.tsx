'use client'

import { ProposalConfig } from '@/lib/types'
import { ChevronUp, ChevronDown, GripVertical } from 'lucide-react'

interface BlockSelectorProps {
  sections: ProposalConfig['sections']
  onChange: (sections: ProposalConfig['sections']) => void
}

export default function BlockSelector({ sections, onChange }: BlockSelectorProps) {
  const sorted = [...sections].sort((a, b) => a.order - b.order)

  function moveSection(id: string, direction: 'up' | 'down') {
    const idx = sorted.findIndex((s) => s.id === id)
    if (direction === 'up' && idx === 0) return
    if (direction === 'down' && idx === sorted.length - 1) return

    const newSorted = [...sorted]
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1
    ;[newSorted[idx], newSorted[swapIdx]] = [newSorted[swapIdx], newSorted[idx]]

    const updated = newSorted.map((s, i) => ({ ...s, order: i }))
    onChange(updated)
  }

  function toggleSection(id: string) {
    const updated = sections.map((s) =>
      s.id === id ? { ...s, enabled: !s.enabled } : s
    )
    onChange(updated)
  }

  return (
    <div className="p-4 space-y-3">
      <div className="pb-2 border-b border-gray-100">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Secciones del documento
        </h2>
        <p className="text-xs text-gray-400 mt-0.5">Activa/desactiva y reordena</p>
      </div>

      <div className="space-y-1.5">
        {sorted.map((section, idx) => (
          <div
            key={section.id}
            className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
              section.enabled
                ? 'bg-white border-gray-200'
                : 'bg-gray-50 border-gray-100 opacity-60'
            }`}
          >
            <GripVertical className="w-4 h-4 text-gray-300 flex-shrink-0" />

            {/* Toggle */}
            <button
              onClick={() => toggleSection(section.id)}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors flex-shrink-0 ${
                section.enabled ? 'bg-red-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
                  section.enabled ? 'translate-x-[18px]' : 'translate-x-[3px]'
                }`}
              />
            </button>

            <span
              className={`flex-1 text-sm font-medium ${
                section.enabled ? 'text-gray-800' : 'text-gray-400'
              }`}
            >
              {section.label}
            </span>

            {/* Order controls */}
            <div className="flex flex-col gap-0.5">
              <button
                onClick={() => moveSection(section.id, 'up')}
                disabled={idx === 0}
                className="p-0.5 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => moveSection(section.id, 'down')}
                disabled={idx === sorted.length - 1}
                className="p-0.5 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 text-center pt-1">
        {sorted.filter((s) => s.enabled).length} de {sorted.length} secciones activas
      </p>
    </div>
  )
}
