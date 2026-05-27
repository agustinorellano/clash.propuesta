'use client'

import { useState } from 'react'
import { ProposalConfig } from '@/lib/types'
import { generatePDFClient } from '@/lib/client-pdf'
import { X, Loader2, FileDown, CheckCircle2 } from 'lucide-react'

interface ExportModalProps {
  config: ProposalConfig
  onClose: () => void
}

export default function ExportModal({ config, onClose }: ExportModalProps) {
  const [exporting, setExporting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const enabledSections = [...config.sections]
    .filter(s => s.enabled)
    .sort((a, b) => a.order - b.order)

  const visiblePlans = config.plans.filter(p => p.visible)
  const featuredPlan = visiblePlans.find(p => p.highlighted)

  async function handleExport() {
    setExporting(true)
    setError(null)
    try {
      await generatePDFClient(config.brand.name, 'a4')
      onClose()
    } catch (err: any) {
      setError(err.message || 'Error al generar el PDF')
    } finally {
      setExporting(false)
    }
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        background: 'rgba(0,0,0,0.65)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(6px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        background: '#fff',
        borderRadius: 16,
        width: '100%', maxWidth: 420,
        margin: '0 16px',
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.25), 0 4px 16px rgba(0,0,0,0.1)',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px 0',
        }}>
          <div>
            <h2 style={{ fontSize: 14, fontWeight: 700, color: '#0d0d0f', margin: 0 }}>
              Exportar propuesta A4
            </h2>
            {config.brand.name && (
              <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 3 }}>
                {config.brand.name}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              padding: 6, borderRadius: 8, border: 'none',
              background: 'transparent', cursor: 'pointer', color: '#9ca3af',
              display: 'flex', alignItems: 'center',
            }}
          >
            <X size={16} />
          </button>
        </div>

        <div style={{ padding: '20px 24px 24px' }}>

          {/* Resumen de secciones */}
          <div style={{
            background: '#f9fafb',
            border: '1px solid #f0f0f0',
            borderRadius: 10,
            padding: '14px 16px',
            marginBottom: 16,
          }}>
            <p style={{
              fontSize: 9, fontWeight: 700, color: '#9ca3af',
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12,
            }}>
              Secciones incluidas · {enabledSections.length} {enabledSections.length === 1 ? 'página' : 'páginas'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {enabledSections.map((s, i) => (
                <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700, color: '#d1d5db',
                    width: 16, fontVariantNumeric: 'tabular-nums', flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <CheckCircle2 size={11} style={{ color: '#22c55e', flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: '#374151', fontWeight: 500 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Plan destacado si existe */}
          {featuredPlan && (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: '#fef2f2', border: '1px solid #fecaca',
              borderRadius: 10, padding: '10px 14px', marginBottom: 16,
            }}>
              <span style={{ fontSize: 11, color: '#991b1b', fontWeight: 600 }}>
                Plan sugerido
              </span>
              <span style={{ fontSize: 11, color: '#dc2626', fontWeight: 700 }}>
                {featuredPlan.name} · {featuredPlan.price}
              </span>
            </div>
          )}

          {/* Error */}
          {error && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 8,
              background: '#fef2f2', border: '1px solid #fecaca',
              borderRadius: 8, padding: '10px 12px', marginBottom: 16,
              fontSize: 12, color: '#dc2626',
            }}>
              {error}
            </div>
          )}

          {/* Botón de exportación */}
          <button
            onClick={handleExport}
            disabled={exporting}
            style={{
              width: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: exporting ? '#fca5a5' : '#dc2626',
              color: '#fff',
              fontSize: 13, fontWeight: 700,
              padding: '13px 0',
              borderRadius: 10,
              border: 'none',
              cursor: exporting ? 'not-allowed' : 'pointer',
              transition: 'background 0.15s',
            }}
          >
            {exporting ? (
              <>
                <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} />
                Generando PDF…
              </>
            ) : (
              <>
                <FileDown size={15} />
                Descargar propuesta A4
              </>
            )}
          </button>

          <p style={{ fontSize: 10, color: '#d1d5db', textAlign: 'center', marginTop: 10 }}>
            PDF vectorial · tipografías embebidas · calidad print
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
