export default function AnalyticsSection() {
  const partners = [
    { name: 'Banco ICBC',   pct: 32, color: 'bg-[#0052A5]', text: 'IC' },
    { name: 'Mercado Pago', pct: 24, color: 'bg-[#009ee3]', text: 'MP' },
    { name: 'MODO',         pct: 18, color: 'bg-[#6C27BE]', text: 'M'  },
    { name: 'Naranja X',    pct: 15, color: 'bg-[#FF6200]', text: 'NX' },
    { name: 'Personal Pay', pct: 11, color: 'bg-[#5C2D91]', text: 'PP' },
  ]

  const ageRows = [
    { label: '<18',   pct: 3,  red: false },
    { label: '18-25', pct: 15, red: false },
    { label: '25-35', pct: 38, red: true  },
    { label: '35-45', pct: 32, red: false },
    { label: '45-55', pct: 8,  red: false },
    { label: '>55',   pct: 4,  red: false },
  ]

  const genderRows = [
    { label: 'Masc.', pct: 55, color: 'bg-red-500'    },
    { label: 'Fem.',  pct: 35, color: 'bg-yellow-400' },
    { label: 'Otros', pct: 10, color: 'bg-gray-300'   },
  ]

  return (
    <div className="bg-white p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-3 py-1 mb-5">
          <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">Analytics</span>
        </div>
        <h2 className="text-5xl font-black text-gray-900 mb-2">Tu Dashboard</h2>
        <p className="text-gray-400 text-base mb-3">Tené un seguimiento de tu negocio</p>
        <p className="text-sm font-semibold">
          <span className="text-red-500">Promociones → Interacción → Datos → Optimización</span>
          <span className="text-gray-400"> · Un sistema vivo</span>
        </p>
      </div>

      {/* 3-column dashboard */}
      <div className="grid grid-cols-3 gap-4">

        {/* Col 1 — Estado de operación */}
        <div className="bg-[#f9f9f9] rounded-2xl p-5 flex flex-col gap-3 border border-gray-100">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Estado de operación</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { val: '12',  label: 'Beneficios publicados activos', red: false },
              { val: '5',   label: 'Activos por vencer en 30 días', red: true  },
              { val: '10',  label: 'Inactivos / no publicados',      red: false },
              { val: '75',  label: 'Sucursales activas administradas', red: true },
              { val: '30',  label: 'QR habilitados en sucursales',   red: false },
              { val: '400', label: 'Usuarios con alertas activas',   red: true  },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-3 border border-gray-100">
                <p className={`text-2xl font-black leading-none mb-1 ${item.red ? 'text-red-500' : 'text-gray-900'}`}>
                  {item.val}
                </p>
                <p className="text-[9px] text-gray-400 leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
          {/* Bottom bar */}
          <div className="bg-gray-900 rounded-xl px-4 py-3 flex justify-between mt-auto">
            <div className="text-center">
              <p className="text-sm font-black text-white">1.4K</p>
              <p className="text-[9px] text-gray-400">Me gusta</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-black text-white">2.5K</p>
              <p className="text-[9px] text-gray-400">Cal. positivas</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-black text-white">120</p>
              <p className="text-[9px] text-gray-400">Cal. negativas</p>
            </div>
          </div>
        </div>

        {/* Col 2 — Perfil del cliente */}
        <div className="bg-[#f9f9f9] rounded-2xl p-5 border border-gray-100">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4">Perfil del cliente</p>

          {/* Age */}
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Edad</p>
          <div className="flex flex-col gap-1.5 mb-5">
            {ageRows.map((r) => (
              <div key={r.label} className="flex items-center gap-2">
                <span className="text-[10px] text-gray-500 w-8 flex-shrink-0">{r.label}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${r.red ? 'bg-red-500' : 'bg-gray-400'}`}
                    style={{ width: `${r.pct * 2.5}%` }}
                  />
                </div>
                <span className="text-[10px] text-gray-500 w-6 text-right">{r.pct}%</span>
              </div>
            ))}
          </div>

          {/* Gender */}
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Género</p>
          <div className="flex flex-col gap-1.5">
            {genderRows.map((r) => (
              <div key={r.label} className="flex items-center gap-2">
                <span className="text-[10px] text-gray-500 w-8 flex-shrink-0">{r.label}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct * 1.7}%` }} />
                </div>
                <span className="text-[10px] text-gray-500 w-6 text-right">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 — Top Partners */}
        <div className="bg-[#f9f9f9] rounded-2xl p-5 flex flex-col gap-3 border border-gray-100">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Rendimiento — Top Partners por interacción
          </p>
          <div className="flex flex-col gap-3">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                {/* Logo badge */}
                <div className={`w-7 h-7 rounded-lg ${p.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[8px] font-black text-white">{p.text}</span>
                </div>
                <span className="text-xs text-gray-700 flex-1">{p.name}</span>
                {/* Bar */}
                <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: `${p.pct * 3}%` }} />
                </div>
                <span className="text-xs font-bold text-red-500 w-8 text-right">{p.pct}%</span>
              </div>
            ))}
          </div>
          {/* Quote card */}
          <div className="mt-auto bg-gray-900 rounded-xl p-4">
            <p className="text-xs text-gray-200 leading-relaxed">
              <span className="text-red-400 font-bold">Los datos no son el final.</span>{' '}
              Son el punto de partida para mejorar.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
