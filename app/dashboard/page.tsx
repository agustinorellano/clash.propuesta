'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { defaultConfig, ProposalConfig, type ProposalType, type Promotion } from '@/lib/types'
import { getComputedPlans, getScaleTier, SCALE_LABELS, type Billing } from '@/lib/plansConfig'
import Sidebar        from '@/components/ui/Sidebar'
import BrandEditor    from '@/components/editor/BrandEditor'
import BlockSelector  from '@/components/editor/BlockSelector'
import PlanEditor     from '@/components/editor/PlanEditor'
import ProposalPreview from '@/components/preview/ProposalPreview'
import GridView       from '@/components/preview/GridView'
import ExportModal    from '@/components/ExportModal'
import IntroAnimation from '@/components/IntroAnimation'
import {
  FileDown, CalendarDays, CalendarRange,
  PanelLeftClose, PanelLeftOpen,
  LayoutGrid, AlignJustify,
} from 'lucide-react'

type Tab      = 'brand' | 'sections' | 'plans'
type ViewMode = 'scroll' | 'grid'

export default function DashboardPage() {
  const [config,          setConfig]          = useState<ProposalConfig>(defaultConfig)
  const [activeTab,       setActiveTab]       = useState<Tab>('brand')
  const [showExportModal, setShowExportModal] = useState(false)
  const [sidebarOpen,     setSidebarOpen]     = useState(true)
  const [viewMode,        setViewMode]        = useState<ViewMode>('scroll')
  const [targetSection,   setTargetSection]   = useState<string | null>(null)

  // ── Sync plan prices when branches or billing change ──────────────────────
  const syncPlanPrices = useCallback(
    (branches: number, billing: Billing, prevPlans: ProposalConfig['plans']) => {
      const computed = getComputedPlans(branches, billing)
      return prevPlans.map((plan) => {
        const c = computed.find((p) => p.id === plan.id)
        if (!c) return plan
        return { ...plan, price: c.price, priceNote: c.priceNote, highlighted: c.highlighted }
      })
    },
    [],
  )

  const updateBrand = useCallback(
    (brand: Partial<ProposalConfig['brand']>) => {
      setConfig((prev) => {
        const newBrand = { ...prev.brand, ...brand }
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

  const setProposalType = useCallback((proposalType: ProposalType) => {
    setConfig((prev) => ({ ...prev, proposalType }))
  }, [])

  // ── Promotion helpers ──────────────────────────────────────────────────────
  const setPromoDiscount = useCallback((discount: number) => {
    setConfig((prev) => ({
      ...prev,
      promotion: {
        ...prev.promotion,
        discount,
        mode: discount === 0
          ? 'none'
          : prev.promotion.mode === 'none' ? 'all' : prev.promotion.mode,
        planId: prev.promotion.mode === 'none' ? '' : prev.promotion.planId,
      },
    }))
  }, [])

  const setPromoMode = useCallback((mode: Promotion['mode']) => {
    setConfig((prev) => ({
      ...prev,
      promotion: {
        ...prev.promotion,
        mode,
        planId: mode === 'single'
          ? (prev.promotion.planId || prev.plans.filter(p => p.visible)[0]?.id || '')
          : '',
      },
    }))
  }, [])

  const setPromoPlanId = useCallback((planId: string) => {
    setConfig((prev) => ({
      ...prev,
      promotion: { ...prev.promotion, planId },
    }))
  }, [])

  const updateConfig = useCallback((partial: Partial<ProposalConfig>) => {
    setConfig((prev) => ({ ...prev, ...partial }))
  }, [])

  // ── Grid → scroll navigation ───────────────────────────────────────────────
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  function handleSelectSection(id: string) {
    setViewMode('scroll')
    setTargetSection(id)
  }

  useEffect(() => {
    if (viewMode === 'scroll' && targetSection) {
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(`preview-section-${targetSection}`)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      setTargetSection(null)
      return () => cancelAnimationFrame(raf)
    }
  }, [viewMode, targetSection])

  // ── Section scroll tracker ─────────────────────────────────────────────────
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    if (viewMode !== 'scroll') return
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const sections = container.querySelectorAll<HTMLElement>('[data-export-section]')
      let current: string | null = null
      const mid = container.getBoundingClientRect().top + container.clientHeight * 0.35
      sections.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= mid) current = el.id.replace('preview-section-', '')
      })
      setActiveSection(current)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => container.removeEventListener('scroll', handleScroll)
  }, [viewMode])

  const tabs: { id: Tab; label: string }[] = [
    { id: 'brand',    label: 'Marca'     },
    { id: 'sections', label: 'Secciones' },
    { id: 'plans',    label: 'Planes'    },
  ]

  const currentTier = getScaleTier(config.brand.branches)
  const scaleLabel  = SCALE_LABELS[currentTier]

  return (
    <>
      {/* ── Intro animation ── */}
      <IntroAnimation />

      <div className="flex h-screen overflow-hidden bg-gray-50">

        {/* ── Left Panel — Editor ── */}
        <div
          className="flex-shrink-0 bg-white border-r border-gray-200 flex flex-col overflow-hidden"
          style={{
            width: sidebarOpen ? 320 : 0,
            minWidth: 0,
            transition: 'width 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Sidebar />

          {/* Proposal type selector */}
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-500 mb-2 font-medium">Tipo de propuesta</p>
            <div className="flex rounded-lg border border-gray-200 overflow-hidden bg-white">
              {([
                { id: 'commercial', label: 'Comercial'          },
                { id: 'mall',       label: 'Comercios de malls' },
              ] as { id: ProposalType; label: string }[]).map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setProposalType(opt.id)}
                  className={`flex-1 py-1.5 text-xs font-semibold transition-colors ${
                    config.proposalType === opt.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

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

          {/* ── Promotion section ── */}
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-500 mb-2 font-medium">Promoción aplicable</p>

            {/* Preset pills */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {([0, 20, 25, 30, 40] as const).map((pct) => {
                const active = pct === 0
                  ? config.promotion.discount === 0
                  : config.promotion.discount === pct && config.promotion.mode !== 'none'
                return (
                  <button
                    key={pct}
                    onClick={() => setPromoDiscount(pct)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-colors ${
                      active
                        ? 'bg-red-600 text-white border-red-600'
                        : 'border-gray-200 text-gray-500 bg-white hover:bg-gray-50'
                    }`}
                  >
                    {pct === 0 ? 'Sin desc.' : `−${pct}%`}
                  </button>
                )
              })}
              {/* Custom % input */}
              <div className="flex items-center">
                <input
                  type="number" min={1} max={99}
                  placeholder="otro %"
                  value={
                    config.promotion.discount > 0 && ![20, 25, 30, 40].includes(config.promotion.discount)
                      ? config.promotion.discount
                      : ''
                  }
                  onChange={(e) => {
                    const v = parseInt(e.target.value)
                    setPromoDiscount(isNaN(v) ? 0 : Math.min(99, Math.max(0, v)))
                  }}
                  className="w-16 px-2 py-1 text-xs border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-400 bg-white"
                />
              </div>
            </div>

            {/* Apply-to: only when discount is active */}
            {config.promotion.discount > 0 && config.promotion.mode !== 'none' && (
              <div className="mt-1">
                <p className="text-xs text-gray-400 mb-1.5">Aplicar a</p>
                <div className="flex rounded-lg border border-gray-200 overflow-hidden bg-white mb-2">
                  <button
                    onClick={() => setPromoMode('all')}
                    className={`flex-1 py-1 text-xs font-semibold transition-colors ${
                      config.promotion.mode === 'all'
                        ? 'bg-red-600 text-white'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => setPromoMode('single')}
                    className={`flex-1 py-1 text-xs font-semibold transition-colors ${
                      config.promotion.mode === 'single'
                        ? 'bg-red-600 text-white'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    Plan específico
                  </button>
                </div>

                {config.promotion.mode === 'single' && (
                  <div className="flex flex-col gap-1">
                    {config.plans.filter((p) => p.visible).map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setPromoPlanId(plan.id)}
                        className={`text-left px-2.5 py-1.5 text-xs rounded-md border transition-colors truncate ${
                          config.promotion.planId === plan.id
                            ? 'bg-red-50 border-red-200 text-red-700 font-semibold'
                            : 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50'
                        }`}
                      >
                        {plan.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tab navigation */}
          <div className="flex gap-0.5 border-b border-gray-100 px-3 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-1.5 px-1 text-xs font-semibold rounded-t-md transition-all ${
                  activeTab === tab.id
                    ? 'text-gray-900 border-b-2 border-red-600'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'brand'    && <BrandEditor brand={config.brand} onChange={updateBrand} />}
            {activeTab === 'sections' && <BlockSelector sections={config.sections} onChange={(s) => updateConfig({ sections: s })} />}
            {activeTab === 'plans'    && (
              <PlanEditor
                plans={config.plans}
                billing={config.billing}
                branches={config.brand.branches}
                onChange={(plans) => updateConfig({ plans })}
              />
            )}
          </div>
        </div>

        {/* ── Right Panel — Preview ── */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Top bar */}
          <div className="bg-white border-b border-gray-200 flex-shrink-0">
            <div className="h-14 flex items-center justify-between px-4">

              {/* Left: sidebar toggle + title */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  title={sidebarOpen ? 'Ocultar panel' : 'Mostrar panel'}
                  className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {sidebarOpen
                    ? <PanelLeftClose className="w-4 h-4" />
                    : <PanelLeftOpen  className="w-4 h-4" />
                  }
                </button>
                <div style={{ width: 1, height: 16, background: '#e5e7eb' }} />
                <div>
                  <h1 className="text-sm font-semibold text-gray-900 leading-tight">Vista previa</h1>
                  {config.brand.name && (
                    <p className="text-xs text-gray-400 leading-tight">{config.brand.name}</p>
                  )}
                </div>
              </div>

              {/* Right: view mode toggle + export */}
              <div className="flex items-center gap-2">

                {/* View toggle — scroll / grid */}
                <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden bg-white">
                  <button
                    onClick={() => setViewMode('scroll')}
                    title="Vista de scroll"
                    className={`p-2 transition-colors ${
                      viewMode === 'scroll'
                        ? 'bg-gray-100 text-gray-800'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <AlignJustify className="w-3.5 h-3.5" />
                  </button>
                  <div style={{ width: 1, height: 16, background: '#e5e7eb' }} />
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Vista en cuadrícula"
                    className={`p-2 transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-gray-100 text-gray-800'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div style={{ width: 1, height: 16, background: '#e5e7eb' }} />

                {/* Export button */}
                <button
                  onClick={() => setShowExportModal(true)}
                  className="flex items-center gap-2 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all active:scale-[0.97]"
                  style={{
                    background: '#dc2626',
                    boxShadow: '0 1px 3px rgba(220,38,38,0.35), 0 1px 2px rgba(0,0,0,0.08)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#b91c1c')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#dc2626')}
                >
                  <FileDown className="w-3.5 h-3.5" />
                  Generar PDF
                </button>
              </div>
            </div>
          </div>

          {/* ── Scroll view ── always mounted so html2canvas finds [data-export-section] */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-auto relative"
            style={{
              background: '#c8c8c8', padding: '36px 48px 64px',
              // Hide visually when in grid mode but keep in DOM for PDF export
              display: viewMode === 'scroll' ? undefined : 'none',
            }}
          >
            {/* Section indicator */}
            {activeSection && (() => {
              const enabled = config.sections.filter(s => s.enabled).sort((a,b) => a.order - b.order)
              const idx     = enabled.findIndex(s => s.id === activeSection)
              const section = enabled[idx]
              if (!section) return null
              return (
                <div className="sticky top-4 z-10 flex justify-end pointer-events-none mb-[-36px]">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'rgba(15,15,17,0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff', fontSize: 11, fontWeight: 500,
                    padding: '5px 12px', borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontVariantNumeric: 'tabular-nums' }}>
                      {idx + 1}/{enabled.length}
                    </span>
                    <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.15)' }} />
                    <span>{section.label}</span>
                  </div>
                </div>
              )
            })()}

            <div style={{ maxWidth: 794, margin: '0 auto' }}>
              <ProposalPreview config={config} />
            </div>
          </div>

          {/* ── Grid view ── */}
          {viewMode === 'grid' && (
            <GridView config={config} onSelectSection={handleSelectSection} />
          )}
        </div>

        {/* ── Export Modal ── */}
        {showExportModal && (
          <ExportModal config={config} onClose={() => setShowExportModal(false)} />
        )}
      </div>
    </>
  )
}
