import { LogOut } from 'lucide-react'

interface SidebarProps {
  onLogout: () => void
}

export default function Sidebar({ onLogout }: SidebarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/clash-logo.png"
          alt="Clash"
          className="h-7 w-auto object-contain"
          onError={(e) => {
            // Fall back to SVG version
            ;(e.currentTarget as HTMLImageElement).src = '/clash-logo.svg'
          }}
        />
      </div>
      <button
        onClick={onLogout}
        title="Cerrar sesión"
        className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
      >
        <LogOut className="w-4 h-4" />
      </button>
    </div>
  )
}
