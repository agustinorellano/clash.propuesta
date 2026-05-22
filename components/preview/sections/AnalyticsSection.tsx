import { TrendingUp, Users, MapPin, Eye } from 'lucide-react'

export default function AnalyticsSection() {
  const metrics = [
    { icon: Eye, value: '12.4K', label: 'Vistas de beneficios', change: '+23%', positive: true },
    { icon: Users, value: '3.2K', label: 'Usuarios únicos', change: '+18%', positive: true },
    { icon: MapPin, value: '8', label: 'Sucursales activas', change: '100%', positive: true },
    { icon: TrendingUp, value: '67%', label: 'Tasa de conversión', change: '+12%', positive: true },
  ]

  const chartBars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88]

  return (
    <div className="bg-[#0f0f11] p-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            Analytics
          </span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Todo lo que pasa, visible
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Dashboard en tiempo real con métricas de uso, alcance y comportamiento
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <m.icon className="w-4 h-4 text-red-400" />
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    m.positive ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
                  }`}
                >
                  {m.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-0.5">{m.value}</div>
              <div className="text-xs text-gray-500">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-white">Vistas últimos 30 días</span>
            <span className="text-xs text-gray-500">Actualizado hoy</span>
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {chartBars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-red-600/40 rounded-sm hover:bg-red-600/70 transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-600">Hace 30 días</span>
            <span className="text-xs text-gray-600">Hoy</span>
          </div>
        </div>
      </div>
    </div>
  )
}
