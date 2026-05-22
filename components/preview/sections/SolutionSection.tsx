import { CheckCircle2 } from 'lucide-react'

export default function SolutionSection() {
  const solutions = [
    {
      title: 'Centralización digital',
      description:
        'Todos los beneficios de tu marca en un único lugar digital, accesible al instante desde cualquier dispositivo.',
    },
    {
      title: 'Distribución sin fricción',
      description:
        'Comparte beneficios vía QR, link o widget. Sin apps, sin registros complejos. El cliente accede en segundos.',
    },
    {
      title: 'Gestión en tiempo real',
      description:
        'Actualizá, activá o desactivá beneficios al instante desde tu panel. Los cambios se reflejan inmediatamente.',
    },
    {
      title: 'Analytics de uso',
      description:
        'Medí cuántas personas ven y usan cada beneficio. Tomá decisiones basadas en datos reales de comportamiento.',
    },
    {
      title: 'Escalable a toda tu red',
      description:
        'Funciona igual para 1 sucursal que para 100. Cada punto tiene su propio acceso y sus propias métricas.',
    },
  ]

  return (
    <div className="bg-[#0f0f11] p-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">La solución</span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Clash — infraestructura de
            <br />
            beneficios digitales
          </h2>
        </div>

        <div className="space-y-5">
          {solutions.map((sol, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{sol.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{sol.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
