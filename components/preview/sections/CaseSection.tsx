import { TrendingUp, Users, MapPin, Star } from 'lucide-react'

export default function CaseSection() {
  const metrics = [
    { icon: TrendingUp, value: '+340%', label: 'Aumento en visualizaciones de beneficios' },
    { icon: Users, value: '2.800', label: 'Clientes únicos registrados en 3 meses' },
    { icon: MapPin, value: '12', label: 'Sucursales integradas a la plataforma' },
    { icon: Star, value: '4.8/5', label: 'Satisfacción del cliente final' },
  ]

  return (
    <div className="bg-gray-50 p-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            Caso de éxito
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Barber King</h2>
          <p className="text-gray-500 text-sm mt-1">
            Cadena de barberías premium — Argentina
          </p>
        </div>

        {/* Quote */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 relative">
          <div className="text-5xl text-red-600 font-serif leading-none mb-2 select-none">"</div>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Antes nuestros clientes no sabían que tenían beneficios en cada visita. Con Clash,
            en menos de un mes triplicamos las visualizaciones y los clientes comenzaron a
            preguntar por los beneficios proactivamente. Es una herramienta que realmente
            cambia la relación con el cliente.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
              MG
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Marcos García</div>
              <div className="text-xs text-gray-500">CEO, Barber King</div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <m.icon className="w-4 h-4 text-red-500" />
                <span className="text-2xl font-black text-gray-900">{m.value}</span>
              </div>
              <p className="text-xs text-gray-500">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Context */}
        <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl">
          <p className="text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold text-red-600">Implementación:</span> Barber King
            comenzó con el plan Gestión Asistida. En 60 días migró las 12 sucursales, capacitó
            al equipo y lanzó su primer programa de beneficios segmentado por tipo de cliente.
          </p>
        </div>
      </div>
    </div>
  )
}
