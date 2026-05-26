'use client'

import { useState, useCallback } from 'react'
import { defaultConfig, ProposalConfig } from '@/lib/types'
import { getComputedPlans, getScaleTier, SCALE_LABELS, type Billing } from '@/lib/plansConfig'
import Sidebar from '@/components/ui/Sidebar'
import BrandEditor from '@/components/editor/BrandEditor'
import BlockSelector from '@/components/editor/BlockSelector'
import PlanEditor from '@/components/editor/PlanEditor'
import ProposalPreview from '@/components/preview/ProposalPreview'
import { FileDown, Loader2, AlertCircle, CalendarDays, CalendarRange } from 'lucide-react'

type Tab = 'brand' | 'sections' | 'plans'

export default function DashboardPage() {
  const [config, setConfig] = useState<ProposalConfig>(defaultConfig)
  const [activeTab, setActiveTab] = useState<Tab>('brand')
  const [exporting, setExporting] = useState(false)
  const [exportError, setExportError] = useState<string | null>(null)

  // ── Sync plan prices when branches or billing change ──────────────────────
  const syncPlanPrices = useCallback(
    (branches: number, billing: Billing, prevPlans: ProposalConfig['plans']) => {
      const computed = getComputedPlans(branches, billing)
      return prevPlans.map((plan) => {
        const c = computed.find((p) => p.id === plan.id)
        if (!c) return plan
        // Update price / priceNote / highlighted; preserve user-edited features, name, description, visible
        return { ...plan, price: c.price, priceNote: c.priceNote, highlighted: c.highlighted }
      })
    },
    [],
  )

  const updateBrand = useCallback(
    (brand: Partial<ProposalConfig['brand']>) => {
      setConfig((prev) => {
        const newBrand = { ...prev.brand, ...brand }
        // If branches changed → recompute plan prices
        const branchesChanged = 'branches' in brand && brand.branches !== prev.brand.branches
        const newPlans = branchesChanged
          ? syncPlanPrices(newBrand.branches, prev.billing, prev.plans)
          : prev.plans
        return { ...prev, brand: newBrand, plans: newPlans }
      })
    },
    [syncPlanPrices],
  )

  const setBilling = useCallback(
    (billing: Billing) => {
      setConfig((prev) => ({
        ...prev,
        billing,
        plans: syncPlanPrices(prev.brand.branches, billing, prev.plans),
      }))
    },
    [syncPlanPrices],
  )

  const updateConfig = useCallback((partial: Partial<ProposalConfig>) => {
    setConfig((prev) => ({ ...prev, ...partial }))
  }, [])

  const handleExportPDF = async () => {
    setExporting(true)
    setExportError(null)
    try {
      const res = await fetch('/api/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || `Error ${res.status}`)
      }

      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      const slug = (config.brand.name || 'cliente')
        .toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      a.href = url
      a.download = `propuesta-clash-${slug}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err: any) {
      setExportError(err.message || 'Error al generar el PDF')
    } finally {
      setExporting(false)
    }
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'brand', label: 'Marca' },
    { id: 'sections', label: 'Secciones' },
    { id: 'plans', label: 'Planes' },
  ]

  const currentTier = getScaleTier(config.brand.branches)
  const scaleLabel = SCALE_LABELS[currentTier]

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Left Panel — Editor */}
      <div className="w-80 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
        <Sidebar onLogout={async () => {
          await fetch('/api/auth/logout', { method: 'POST' })
          window.location.href = '/login'
        }} />

        {/* Billing toggle */}
        <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-500 mb-2 font-medium">Facturación</p>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden bg-white">
            <button
              onClick={() => setBilling('monthly')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold transition-colors ${
                config.billing === 'monthly'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <CalendarDays className="w-3 h-3" />
              Mensual
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold transition-colors ${
                config.billing === 'annual'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <CalendarRange className="w-3 h-3" />
              Anual
              <span className={`text-xs font-bold ${config.billing === 'annual' ? 'text-yellow-300' : 'text-green-600'}`}>
                −30%
              </span>
            </button>
          </div>
          {config.brand.branches > 0 && (
            <p className="text-xs text-gray-400 mt-1.5">
              Escala activa:{' '}
              <span className="font-semibold text-gray-600">{scaleLabel}</span>
            </p>
          )}
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-gray-200 px-2 pt-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-2 text-xs font-semibold rounded-t-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-50 text-gray-900 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'brand' && (
            <BrandEditor brand={config.brand} onChange={updateBrand} />
          )}
          {activeTab === 'sections' && (
            <BlockSelector sections={config.sections} onChange={(sections) => updateConfig({ sections })} />
          )}
          {activeTab === 'plans' && (
            <PlanEditor
              plans={config.plans}
              billing={config.billing}
              branches={config.brand.branches}
              onChange={(plans) => updateConfig({ plans })}
            />
          )}
        </div>
      </div>

      {/* Right Panel — Preview */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-200 flex-shrink-0">
          <div className="h-14 flex items-center justify-between px-6">
            <div>
              <h1 className="text-sm font-semibold text-gray-900">Vista previa de propuesta</h1>
              {config.brand.name && <p className="text-xs text-gray-500">{config.brand.name}</p>}
            </div>
            <button
              onClick={handleExportPDF}
              disabled={exporting}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              {exporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generando PDF... (~20s)
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4" />
                  Generar PDF
                </>
              )}
            </button>
          </div>
          {exportError && (
            <div className="flex items-center gap-2 px-6 pb-3 text-red-600 text-xs">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{exportError}</span>
            </div>
          )}
        </div>

        {/* Preview canvas */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-4xl mx-auto">
            <ProposalPreview config={config} />
          </div>
        </div>
      </div>
    </div>
  )
}
