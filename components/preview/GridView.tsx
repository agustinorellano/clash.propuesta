'use client'

import { ProposalConfig } from '@/lib/types'
import { renderSection }   from './renderSection'

// A4 @ 96dpi: 794 × 1123 px
const PAGE_W  = 794
const PAGE_H  = 1123
const THUMB_W = 224
const THUMB_H = Math.round(PAGE_H * THUMB_W / PAGE_W) // ≈ 317
const SCALE   = THUMB_W / PAGE_W                       // ≈ 0.282

interface GridViewProps {
  config:          ProposalConfig
  onSelectSection: (id: string) => void
}

export default function GridView({ config, onSelectSection }: GridViewProps) {
  const pages = [...config.sections]
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order)

  return (
    <div style={{
      flex: 1, overflowY: 'auto',
      background: '#b8b8b8',
      padding: '48px 56px 72px',
    }}>
      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, ${THUMB_W}px)`,
        gap: '36px 28px',
        justifyContent: 'center',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        {pages.map((section, idx) => (
          <Thumbnail
            key={section.id}
            index={idx}
            label={section.label}
            onSelect={() => onSelectSection(section.id)}
          >
            {renderSection(section.id, config)}
          </Thumbnail>
        ))}
      </div>

      {/* Empty state */}
      {pages.length === 0 && (
        <div style={{
          textAlign: 'center', paddingTop: 80,
          color: 'rgba(0,0,0,0.35)', fontSize: 13,
          fontFamily: "'Inter', system-ui, sans-serif",
        }}>
          Activá al menos una sección para ver el grid.
        </div>
      )}
    </div>
  )
}

// ── Single thumbnail ────────────────────────────────────────────────────────

interface ThumbnailProps {
  index:    number
  label:    string
  onSelect: () => void
  children: React.ReactNode
}

function Thumbnail({ index, label, onSelect, children }: ThumbnailProps) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}
      onClick={onSelect}
    >
      {/* Page frame */}
      <div
        style={{
          width: THUMB_W,
          height: THUMB_H,
          overflow: 'hidden',
          borderRadius: 2,
          background: '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 6px 20px rgba(0,0,0,0.10)',
          transition: 'transform 0.14s ease, box-shadow 0.14s ease',
          position: 'relative',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform    = 'translateY(-3px) scale(1.01)'
          e.currentTarget.style.boxShadow    = '0 2px 8px rgba(0,0,0,0.10), 0 12px 32px rgba(0,0,0,0.14)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform    = ''
          e.currentTarget.style.boxShadow    = '0 1px 3px rgba(0,0,0,0.08), 0 6px 20px rgba(0,0,0,0.10)'
        }}
      >
        {/* Scaled section */}
        <div style={{
          width:           PAGE_W,
          height:          PAGE_H,
          transform:       `scale(${SCALE})`,
          transformOrigin: 'top left',
          pointerEvents:   'none',
          userSelect:      'none',
        }}>
          {children}
        </div>
      </div>

      {/* Page label */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 7,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}>
        <span style={{
          fontSize: 10, fontWeight: 700,
          color: 'rgba(0,0,0,0.30)',
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '0.02em',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(0,0,0,0.52)' }}>
          {label}
        </span>
      </div>
    </div>
  )
}
