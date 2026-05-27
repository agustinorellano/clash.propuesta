'use client'

import { useEffect, useState } from 'react'
import { renderSection }       from '@/components/preview/renderSection'
import type { ProposalConfig } from '@/lib/types'

interface Props { localKey: string }

export default function PrintFromLocal({ localKey }: Props) {
  const [config, setConfig] = useState<ProposalConfig | null>(null)

  // ── 1. Read config from localStorage ──────────────────────────────────────
  useEffect(() => {
    const stored = localStorage.getItem(localKey)
    if (stored) {
      setConfig(JSON.parse(stored) as ProposalConfig)
      localStorage.removeItem(localKey)
    }
  }, [localKey])

  // ── 2. Trigger print once rendered + fonts loaded ─────────────────────────
  useEffect(() => {
    if (!config) return
    document.fonts.ready.then(() => {
      // Extra tick so all React children have committed to the DOM
      requestAnimationFrame(() => setTimeout(() => window.print(), 400))
    })
  }, [config])

  // ── Loading state ─────────────────────────────────────────────────────────
  if (!config) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh',
        fontFamily: "'Inter', system-ui, sans-serif",
        color: '#9ca3af', fontSize: 13,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 8, height: 8, background: '#dc2626', borderRadius: 2 }} />
          <span>Preparando impresión…</span>
        </div>
      </div>
    )
  }

  const enabledSections = [...config.sections]
    .filter(s => s.enabled)
    .sort((a, b) => a.order - b.order)

  return (
    <>
      {/* ── Print CSS ── */}
      <style>{`
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        html, body {
          margin: 0; padding: 0;
          background: #fff;
          width: 794px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @page {
          size: A4 portrait;
          margin: 0mm;
        }

        @media print {
          html, body { width: 794px; margin: 0; }

          .print-section {
            page-break-before: always;
            break-before: page;
            page-break-after: always;
            break-after: page;
            overflow: hidden;
            position: relative;
          }

          .print-section:first-child {
            page-break-before: avoid;
            break-before: avoid;
          }

          /* Avoid spurious blank page at end */
          .print-section:last-child {
            page-break-after: avoid;
            break-after: avoid;
          }
        }
      `}</style>

      {/* ── Sections ── */}
      <div style={{ margin: 0, padding: 0, background: '#fff' }}>
        {enabledSections.map(section => {
          const el = renderSection(section.id, config)
          if (!el) return null
          return (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="print-section"
            >
              {el}
            </div>
          )
        })}
      </div>
    </>
  )
}
