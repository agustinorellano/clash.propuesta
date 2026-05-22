export default function ConceptSection() {
  const stats = [
    { value: '73%', label: 'de los clientes no conoce los beneficios del lugar donde compra' },
    { value: '3x', label: 'más retención cuando los beneficios se comunican digitalmente' },
    { value: '60%', label: 'de aumento en visitas recurrentes con programas activos' },
  ]

  return (
    <div className="bg-white p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">El problema</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Los beneficios existen.
            <br />
            <span className="text-gray-400">El problema es que nadie los ve.</span>
          </h2>
        </div>

        <p className="text-gray-600 text-base leading-relaxed mb-10">
          Las marcas invierten en beneficios para sus clientes, pero la comunicación sigue siendo
          analógica, fragmentada y difícil de medir. Los clientes no saben qué tienen disponible,
          y las empresas no saben si sus beneficios están funcionando.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-3xl font-black text-red-600 mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
