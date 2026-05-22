import { Upload, Share2, Monitor, BarChart3, ArrowRight } from 'lucide-react'

export default function CircuitSection() {
  const steps = [
    {
      icon: Upload,
      title: 'Carga',
      description: 'Creás y organizás los beneficios desde tu panel Clash',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Share2,
      title: 'Distribución',
      description: 'Los compartís vía QR, link o widget en tus puntos de venta',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Monitor,
      title: 'Visualización',
      description: 'El cliente accede y ve todos sus beneficios disponibles al instante',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Medís alcance, uso y comportamiento en tiempo real',
      color: 'bg-red-50 text-red-600',
    },
  ]

  return (
    <div className="bg-white p-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            Cómo funciona
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">El circuito completo</h2>
          <p className="text-gray-500 text-sm mt-2">
            4 pasos que transforman cómo comunicás tus beneficios
          </p>
        </div>

        <div className="flex items-start gap-4">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="absolute top-6 left-[calc(50%+24px)] right-0 flex items-center pointer-events-none z-10">
                  <ArrowRight className="w-4 h-4 text-gray-300 mx-auto" />
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-3 relative z-20`}
              >
                <step.icon className="w-6 h-6" />
              </div>

              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
