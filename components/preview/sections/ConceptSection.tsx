export default function ConceptSection() {
  return (
    <div className="bg-[#fef8f6] p-12 min-h-[420px] flex flex-col justify-center">
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-3 py-1 mb-6">
          <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">Concepto</span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-black text-gray-900 leading-[1.08] mb-6">
          Una solución pensada para marcas que necesitan{' '}
          <span className="text-red-600">ordenar y escalar</span>{' '}
          su comunicación de beneficios.
        </h2>

        {/* Body */}
        <p className="text-gray-500 text-base leading-relaxed">
          No se trata solo de publicar promociones.
          <br />
          Se trata de tener control sobre lo que se comunica en todos los puntos de contacto.
        </p>
      </div>
    </div>
  )
}
