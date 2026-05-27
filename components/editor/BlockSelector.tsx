'use client'

import { useState, useRef } from 'react'
import { ProposalConfig } from '@/lib/types'
import { ChevronUp, ChevronDown, GripVertical, Plus, Trash2, ChevronRight } from 'lucide-react'

type Section = ProposalConfig['sections'][number]

interface BlockSelectorProps {
  sections: ProposalConfig['sections']
  onChange: (sections: ProposalConfig['sections']) => void
}

export default function BlockSelector({ sections, onChange }: BlockSelectorProps) {
  const sorted = [...sections].sort((a, b) => a.order - b.order)
  const [dragging,       setDragging]       = useState<string | null>(null)
  const [dragOver,       setDragOver]       = useState<string | null>(null)
  const [expandedCustom, setExpandedCustom] = useState<string | null>(null)
  const dragNode = useRef<HTMLDivElement | null>(null)

  // ── Section ordering ───────────────────────────────────────────────────────

  function moveSection(id: string, direction: 'up' | 'down') {
    const idx = sorted.findIndex((s) => s.id === id)
    if (direction === 'up'   && idx === 0)               return
    if (direction === 'down' && idx === sorted.length - 1) return
    const newSorted = [...sorted]
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1
    ;[newSorted[idx], newSorted[swapIdx]] = [newSorted[swapIdx], newSorted[idx]]
    onChange(newSorted.map((s, i) => ({ ...s, order: i })))
  }

  function toggleSection(id: string) {
    onChange(sections.map((s) => s.id === id ? { ...s, enabled: !s.enabled } : s))
  }

  // ── Drag & drop ───────────────────────────────────────────────────────────

  function handleDragStart(e: React.DragEvent, id: string, el: HTMLDivElement) {
    dragNode.current = el
    setDragging(id)
    e.dataTransfer.effectAllowed = 'move'
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

  // ── Custom sections ────────────────────────────────────────────────────────

  function addCustomSection() {
    const id    = `custom-${Date.now()}`
    const label = 'Nueva sección'
    const newSection: Section = {
      id,
      label,
      enabled: true,
      order: sorted.length,
      custom: { title: '', subtitle: '', body: '' },
    }
    const updated = [...sections, newSection]
    onChange(updated)
    setExpandedCustom(id)
  }

  function deleteCustomSection(id: string) {
    const updated = sections
      .filter((s) => s.id !== id)
      .map((s, i) => ({ ...s, order: i }))
    onChange(updated)
    if (expandedCustom === id) setExpandedCustom(null)
  }

  function updateCustomField(
    id: string,
    field: 'title' | 'subtitle' | 'body' | 'label',
    value: string,
  ) {
    onChange(
      sections.map((s) => {
        if (s.id !== id) return s
        if (field === 'label') return { ...s, label: value }
        return {
          ...s,
          custom: { ...(s.custom ?? { title: '', subtitle: '', body: '' }), [field]: value },
        }
      }),
    )
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="p-4 space-y-3">
      {/* Header */}
      <div className="pb-2 border-b border-gray-100">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Secciones del documento
        </h2>
        <p className="text-xs text-gray-400 mt-0.5">Arrastrá para reordenar · toggle para activar</p>
      </div>

      {/* Section list */}
      <div className="space-y-1.5">
        {sorted.map((section, idx) => {
          const isDragging = dragging === section.id
          const isOver     = dragOver === section.id && !isDragging
          const isCustom   = section.id.startsWith('custom-')
          const isExpanded = expandedCustom === section.id

          return (
            <div key={section.id}>
              {/* Row */}
              <div
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
                {/* Grip */}
                <GripVertical
                  className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                    isOver ? 'text-red-400' : 'text-gray-300'
                  }`}
                  style={{ cursor: 'grab' }}
                />

                {/* Toggle */}
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

                {/* Label */}
                <span className={`flex-1 text-xs font-medium truncate ${
                  section.enabled ? 'text-gray-800' : 'text-gray-400'
                }`}>
                  {section.label}
                  {isCustom && (
                    <span className="ml-1.5 text-[9px] font-semibold uppercase tracking-wide text-red-400 bg-red-50 px-1.5 py-0.5 rounded">
                      Custom
                    </span>
                  )}
                </span>

                {/* Custom: expand editor button */}
                {isCustom && (
                  <button
                    onClick={() => setExpandedCustom(isExpanded ? null : section.id)}
                    className="p-1 rounded text-gray-300 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0"
                    title="Editar contenido"
                  >
                    <ChevronRight
                      className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                    />
                  </button>
                )}

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

                {/* Custom: delete */}
                {isCustom && (
                  <button
                    onClick={() => deleteCustomSection(section.id)}
                    className="p-0.5 rounded text-gray-200 hover:text-red-500 hover:bg-red-50 transition-colors flex-shrink-0"
                    title="Eliminar sección"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Inline editor — only for custom sections when expanded */}
              {isCustom && isExpanded && (
                <div className="mt-1 mb-1 ml-4 p-3 rounded-lg border border-red-100 bg-red-50/40 space-y-2.5">
                  {/* Page name */}
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Nombre de página
                    </label>
                    <input
                      type="text"
                      value={section.label}
                      onChange={(e) => updateCustomField(section.id, 'label', e.target.value)}
                      placeholder="ej: Propuesta especial"
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 text-gray-800 placeholder:text-gray-300"
                    />
                  </div>

                  {/* Subtitle / eyebrow */}
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Subtítulo / eyebrow
                    </label>
                    <input
                      type="text"
                      value={section.custom?.subtitle ?? ''}
                      onChange={(e) => updateCustomField(section.id, 'subtitle', e.target.value)}
                      placeholder="ej: Propuesta exclusiva"
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 text-gray-800 placeholder:text-gray-300"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Título principal
                    </label>
                    <input
                      type="text"
                      value={section.custom?.title ?? ''}
                      onChange={(e) => updateCustomField(section.id, 'title', e.target.value)}
                      placeholder="ej: Por qué Clash es la mejor solución para vos"
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 text-gray-800 placeholder:text-gray-300"
                    />
                  </div>

                  {/* Body */}
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Contenido libre
                    </label>
                    <textarea
                      value={section.custom?.body ?? ''}
                      onChange={(e) => updateCustomField(section.id, 'body', e.target.value)}
                      placeholder="Escribí el contenido de esta página. Podés usar saltos de línea para separar párrafos."
                      rows={6}
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 text-gray-800 placeholder:text-gray-300 resize-none leading-relaxed"
                    />
                  </div>

                  <p className="text-[10px] text-gray-400 italic">
                    Los cambios se reflejan en tiempo real en la vista previa.
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Add custom section button */}
      <button
        onClick={addCustomSection}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-dashed border-gray-200 text-xs font-medium text-gray-400 hover:border-red-300 hover:text-red-500 hover:bg-red-50/40 transition-all"
      >
        <Plus className="w-3.5 h-3.5" />
        Nueva sección personalizada
      </button>

      {/* Count */}
      <p className="text-xs text-gray-400 text-center pt-1">
        {sorted.filter((s) => s.enabled).length} / {sorted.length} secciones activas
      </p>
    </div>
  )
}
