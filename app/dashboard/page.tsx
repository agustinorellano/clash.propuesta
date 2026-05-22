'use client'

import { useState, useCallback } from 'react'
import { defaultConfig, ProposalConfig } from '@/lib/types'
import Sidebar from '@/components/ui/Sidebar'
import BrandEditor from '@/components/editor/BrandEditor'
import BlockSelector from '@/components/editor/BlockSelector'
import PlanEditor from '@/components/editor/PlanEditor'
import ProposalPreview from '@/components/preview/ProposalPreview'
import { FileDown, Loader2, AlertCircle } from 'lucide-react'

type Tab = 'brand' | 'sections' | 'plans'

export default function DashboardPage() {
  const [config, setConfig] = useState<ProposalConfig>(defaultConfig)
  const [activeTab, setActiveTab] = useState<Tab>('brand')
  const [exporting, setExporting] = useState(false)
  const [exportError, setExportError] = useState<string | null>(null)

  const updateConfig = useCallback((partial: Partial<ProposalConfig>) => {
    setConfig((prev) => ({ ...prev, ...partial }))
  }, [])

  const updateBrand = useCallback(
    (brand: Partial<ProposalConfig['brand']>) => {
      setConfig((prev) => ({ ...prev, brand: { ...prev.brand, ...brand } }))
    },
    []
  )

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
      const slug = (config.brand.name || 'cliente').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
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

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Left Panel — Editor */}
      <div className="w-80 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
        <Sidebar onLogout={async () => {
          await fetch('/api/auth/logout', { method: 'POST' })
          window.location.href = '/login'
        }} />

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
            <PlanEditor plans={config.plans} onChange={(plans) => updateConfig({ plans })} />
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
