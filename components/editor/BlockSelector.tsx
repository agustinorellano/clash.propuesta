'use client'

import { useState, useRef } from 'react'
import { ProposalConfig } from '@/lib/types'
import { ChevronUp, ChevronDown, GripVertical } from 'lucide-react'

interface BlockSelectorProps {
  sections: ProposalConfig['sections']
  onChange: (sections: ProposalConfig['sections']) => void
}

export default function BlockSelector({ sections, onChange }: BlockSelectorProps) {
  const sorted = [...sections].sort((a, b) => a.order - b.order)
  const [dragging, setDragging] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState<string | null>(null)
  const dragNode = useRef<HTMLDivElement | null>(null)

  function moveSection(id: string, direction: 'up' | 'down') {
    const idx = sorted.findIndex((s) => s.id === id)
    if (direction === 'up' && idx === 0) return
    if (direction === 'down' && idx === sorted.length - 1) return
    const newSorted = [...sorted]
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1
    ;[newSorted[idx], newSorted[swapIdx]] = [newSorted[swapIdx], newSorted[idx]]
    onChange(newSorted.map((s, i) => ({ ...s, order: i })))
  }

  function toggleSection(id: string) {
    onChange(sections.map((s) => s.id === id ? { ...s, enabled: !s.enabled } : s))
  }

  function handleDragStart(e: React.DragEvent, id: string, el: HTMLDivElement) {
    dragNode.current = el
    setDragging(id)
    e.dataTransfer.effectAllowed = 'move'
    // Delay so the drag ghost doesn't show the "faded" state
    setTimeout(() => setDragging(id), 0)
  }

  function handleDragOver(e: React.DragEvent, id: string) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    if (dragOver !== id) setDragOver(id)
  }

  function handleDrop(e: React.DragEvent, targetId: string) {
    e.preventDefault()
    if (!dragging || dragging === targetId) {
      setDragging(null); setDragOver(null); return
    }
    const fromIdx = sorted.findIndex(s => s.id === dragging)
    const toIdx   = sorted.findIndex(s => s.id === targetId)
    const newSorted = [...sorted]
    const [item] = newSorted.splice(fromIdx, 1)
    newSorted.splice(toIdx, 0, item)
    onChange(newSorted.map((s, i) => ({ ...s, order: i })))
    setDragging(null); setDragOver(null)
  }

  return (
    <div className="p-4 space-y-3">
      <div className="pb-2 border-b border-gray-100">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Secciones del documento
        </h2>
        <p className="text-xs text-gray-400 mt-0.5">Arrastrá para reordenar · toggle para activar</p>
      </div>

      <div className="space-y-1.5">
        {sorted.map((section, idx) => {
          const isDragging = dragging === section.id
          const isOver    = dragOver === section.id && !isDragging

          return (
            <div
              key={section.id}
              draggable
              onDragStart={(e) => handleDragStart(e, section.id, e.currentTarget as HTMLDivElement)}
              onDragEnd={() => { setDragging(null); setDragOver(null) }}
              onDragOver={(e) => handleDragOver(e, section.id)}
              onDragLeave={() => setDragOver(prev => prev === section.id ? null : prev)}
              onDrop={(e) => handleDrop(e, section.id)}
              className={`flex items-center gap-2 p-3 rounded-lg border transition-all select-none ${
                isDragging
                  ? 'opacity-30 scale-[0.97] border-dashed border-gray-300 bg-gray-50'
                  : isOver
                    ? 'border-red-300 bg-red-50 shadow-sm shadow-red-100 -translate-y-0.5'
                    : section.enabled
                      ? 'bg-white border-gray-200 hover:border-gray-300'
                      : 'bg-gray-50 border-gray-100 opacity-60'
              }`}
              style={{ cursor: isDragging ? 'grabbing' : 'default' }}
            >
              {/* Grip — drag handle */}
              <GripVertical
                className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                  isOver ? 'text-red-400' : 'text-gray-300 group-hover:text-gray-400'
                }`}
                style={{ cursor: 'grab' }}
              />

              {/* Toggle switch */}
              <button
                onClick={() => toggleSection(section.id)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors flex-shrink-0 ${
                  section.enabled ? 'bg-red-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
                  section.enabled ? 'translate-x-[18px]' : 'translate-x-[3px]'
                }`} />
              </button>

              <span className={`flex-1 text-xs font-medium truncate ${
                section.enabled ? 'text-gray-800' : 'text-gray-400'
              }`}>
                {section.label}
              </span>

              {/* Arrow controls */}
              <div className="flex flex-col gap-0.5 flex-shrink-0">
                <button
                  onClick={() => moveSection(section.id, 'up')}
                  disabled={idx === 0}
                  className="p-0.5 rounded text-gray-300 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronUp className="w-3 h-3" />
                </button>
                <button
                  onClick={() => moveSection(section.id, 'down')}
                  disabled={idx === sorted.length - 1}
                  className="p-0.5 rounded text-gray-300 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-gray-400 text-center pt-1">
        {sorted.filter((s) => s.enabled).length} / {sorted.length} secciones activas
      </p>
    </div>
  )
}
