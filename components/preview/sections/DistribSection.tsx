import { Link, QrCode, Smartphone, Globe } from 'lucide-react'

export default function DistribSection() {
  const channels = [
    {
      icon: Link,
      title: 'Link personalizado',
      description:
        'Cada sucursal recibe un link único con tu marca. Compartilo por WhatsApp, email, Instagram o donde quieras.',
      tag: 'Universal',
      tagColor: 'bg-blue-100 text-blue-700',
    },
    {
      icon: QrCode,
      title: 'Código QR',
      description:
        'QR listo para imprimir o usar en pantallas. El cliente lo escanea y accede inmediatamente a sus beneficios.',
      tag: 'Físico + Digital',
      tagColor: 'bg-purple-100 text-purple-700',
    },
    {
      icon: Globe,
      title: 'Widget embebido',
      description:
        'Integración directa en tu web o app. El cliente ve sus beneficios sin salir de tu ecosistema digital.',
      tag: 'Sin fricciones',
      tagColor: 'bg-green-100 text-green-700',
    },
    {
      icon: Smartphone,
      title: 'Sin app requerida',
      description:
        'El cliente no necesita descargar nada. Funciona en cualquier navegador, en cualquier dispositivo.',
      tag: 'Acceso inmediato',
      tagColor: 'bg-orange-100 text-orange-700',
    },
  ]

  return (
    <div className="bg-gray-50 p-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
            Distribución
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            El cliente accede donde está
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Sin descargas, sin registros. Acceso inmediato desde cualquier canal.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {channels.map((ch, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ch.icon className="w-5 h-5 text-gray-700" />
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${ch.tagColor}`}>
                  {ch.tag}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">{ch.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{ch.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
