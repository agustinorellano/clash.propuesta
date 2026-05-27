export default function Sidebar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '12px 16px',
      borderBottom: '1px solid #f0f0f0',
      flexShrink: 0,
    }}>
      {/* Red accent square — identidad Clash */}
      <div style={{
        width: 20, height: 20,
        background: '#dc2626', borderRadius: 5,
        flexShrink: 0,
      }} />
      <span style={{
        fontSize: 13, fontWeight: 800, color: '#0d0d0f',
        letterSpacing: '-0.3px',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}>
        Clash{' '}
        <span style={{ fontWeight: 500, color: '#9ca3af' }}>Propuesta</span>
      </span>
    </div>
  )
}
