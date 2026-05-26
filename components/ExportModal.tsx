'use client'

import { useState } from 'react'
import { ProposalConfig } from '@/lib/types'
import { getScaleTier, SCALE_LABELS } from '@/lib/plansConfig'
import type { ExportFormat } from '@/app/api/pdf/route'
import { generatePDFClient } from '@/lib/client-pdf'
import { X, Loader2, AlertCircle, FileText, Monitor } from 'lucide-react'

interface ExportModalProps {
  config: ProposalConfig
  onClose: () => void
}

const FORMAT_OPTIONS: { id: ExportFormat; icon: React.ReactNode; label: string; sub: string }[] = [
  {
    id: 'a4',
    icon: (
      <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
        <rect x="0.5" y="0.5" width="27" height="35" rx="2.5" fill="rgba(220,38,38,0.06)" stroke="#dc2626" strokeWidth="1"/>
        <rect x="4" y="6" width="10" height="2" rx="1" fill="#dc2626" opacity=".7"/>
        <rect x="4" y="11" width="20" height="1.5" rx="0.75" fill="rgba(220,38,38,0.4)"/>
        <rect x="4" y="14" width="17" height="1.5" rx="0.75" fill="rgba(220,38,38,0.3)"/>
        <rect x="4" y="17" width="20" height="1.5" rx="0.75" fill="rgba(220,38,38,0.3)"/>
        <rect x="4" y="22" width="8" height="7" rx="1.5" fill="rgba(220,38,38,0.15)"/>
        <rect x="14" y="22" width="10" height="7" rx="1.5" fill="rgba(220,38,38,0.1)"/>
      </svg>
    ),
    label: 'Propuesta A4',
    sub: 'Ideal para imprimir y adjuntar en email',
  },
  {
    id: 'slides',
    icon: (
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
        <rect x="0.5" y="0.5" width="39" height="27" rx="2.5" fill="rgba(99,102,241,0.06)" stroke="#6366f1" strokeWidth="1"/>
        <rect x="4" y="4" width="12" height="3" rx="1" fill="#6366f1" opacity=".7"/>
        <rect x="4" y="10" width="32" height="2" rx="1" fill="rgba(99,102,241,0.35)"/>
        <rect x="4" y="14" width="32" height="8" rx="1.5" fill="rgba(99,102,241,0.12)"/>
        <circle cx="20" cy="18" r="4" fill="rgba(99,102,241,0.2)"/>
      </svg>
    ),
    label: 'Presentación',
    sub: 'Formato landscape — pitch deck / slides',
  },
]

export default function ExportModal({ config, onClose }: ExportModalProps) {
  const [format, setFormat] = useState<ExportFormat>('a4')
  const [exporting, setExporting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const tier = getScaleTier(config.brand.branches)
  const scaleLabel = SCALE_LABELS[tier]

  const enabledSections = [...config.sections]
    .filter(s => s.enabled)
    .sort((a, b) => a.order - b.order)

  const visiblePlans = config.plans.filter(p => p.visible)
  const featuredPlan = visiblePlans.find(p => p.highlighted)

  async function handleExport() {
    setExporting(true)
    setError(null)
    try {
      await generatePDFClient(config.brand.name, format)
      onClose()
    } catch (err: any) {
      setError(err.message || 'Error al generar el PDF')
    } finally {
      setExporting(false)
    }
  }

  return (
    /* Overlay */
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(4px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Modal */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-sm font-bold text-gray-900">Generar propuesta</h2>
            {config.brand.name && (
              <p className="text-xs text-gray-500 mt-0.5">{config.brand.name}</p>
            )}
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">

          {/* Format selector */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Formato de exportación
            </p>
            <div className="grid grid-cols-2 gap-3">
              {FORMAT_OPTIONS.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setFormat(opt.id)}
                  className={`relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                    format === opt.id
                      ? opt.id === 'slides'
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  {format === opt.id && (
                    <span className={`absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center ${opt.id === 'slides' ? 'bg-indigo-500' : 'bg-red-500'}`}>
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><polyline points="2 6 5 9 10 3" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                  )}
                  {opt.icon}
                  <div className="text-center">
                    <div className={`text-xs font-bold ${format === opt.id ? opt.id === 'slides' ? 'text-indigo-700' : 'text-red-700' : 'text-gray-700'}`}>
                      {opt.label}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5 leading-tight">{opt.sub}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Config summary */}
          <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 space-y-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Resumen</p>

            {/* Pricing */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs text-gray-500">Facturación</div>
                <div className="text-xs font-semibold text-gray-800">
                  {config.billing === 'annual' ? '🏷 Anual (−30%)' : '📅 Mensual'}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-500">Escala</div>
                <div className="text-xs font-semibold text-gray-800">{scaleLabel}</div>
              </div>
              {featuredPlan && (
                <div className="space-y-1">
                  <div className="text-xs text-gray-500">Plan sugerido</div>
                  <div className="text-xs font-semibold text-gray-800">
                    {featuredPlan.name} · {featuredPlan.price}
                  </div>
                </div>
              )}
            </div>

            {/* Sections */}
            <div>
              <div className="text-xs text-gray-500 mb-2">
                Secciones incluidas ({enabledSections.length})
              </div>
              <div className="flex flex-wrap gap-1.5">
                {enabledSections.map(s => (
                  <span key={s.id} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 border border-red-100 rounded-lg p-3">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Export button */}
          <button
            onClick={handleExport}
            disabled={exporting}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold py-3 rounded-xl transition-colors"
          >
            {exporting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generando… (~20 seg)
              </>
            ) : (
              <>
                {format === 'slides' ? <Monitor className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                Exportar {format === 'slides' ? 'presentación' : 'PDF A4'}
              </>
            )}
          </button>

        </div>
      </div>
    </div>
  )
}
