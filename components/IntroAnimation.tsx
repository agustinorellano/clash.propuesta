'use client'

import { useEffect, useState } from 'react'

export default function IntroAnimation() {
  const [barGrown, setBarGrown] = useState(false)
  const [fading,   setFading]   = useState(false)
  const [visible,  setVisible]  = useState(true)

  useEffect(() => {
    const t0 = setTimeout(() => setBarGrown(true), 60)
    const t1 = setTimeout(() => setFading(true),   900)
    const t2 = setTimeout(() => setVisible(false), 1550)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#0d0d0f',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 8,
      opacity: fading ? 0 : 1,
      transition: fading ? 'opacity 0.62s cubic-bezier(0.4,0,0.2,1)' : 'opacity 0.2s ease',
      pointerEvents: fading ? 'none' : 'all',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    }}>
      {/* Wordmark */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{
          width: 9, height: 9,
          background: '#dc2626', borderRadius: 3, flexShrink: 0,
        }} />
        <span style={{
          fontSize: 19, fontWeight: 900, color: '#f1f1f1',
          letterSpacing: '-0.5px', lineHeight: 1,
        }}>
          Clash
        </span>
      </div>

      {/* Subline */}
      <span style={{
        fontSize: 9.5, fontWeight: 700, color: '#3a3f4a',
        letterSpacing: '0.24em', textTransform: 'uppercase',
      }}>
        Propuesta
      </span>

      {/* Progress line */}
      <div style={{
        width: 44, height: 1.5, borderRadius: 2,
        background: 'rgba(255,255,255,0.07)',
        overflow: 'hidden', marginTop: 10,
      }}>
        <div style={{
          height: '100%', borderRadius: 2,
          background: '#dc2626',
          transform: barGrown ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left center',
          transition: 'transform 0.82s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>
    </div>
  )
}
