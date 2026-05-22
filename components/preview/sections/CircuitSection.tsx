export default function CircuitSection() {
  return (
    <div className="bg-white p-12">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2">Cómo funciona</p>
        <h2 className="text-4xl font-black text-gray-900">El circuito completo</h2>
      </div>

      {/* 4 Cards */}
      <div className="grid grid-cols-4 gap-4">

        {/* Card 01 — Carga */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-500 text-white text-xs font-black">01</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span className="font-bold text-gray-900 text-sm">Carga</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Cargá promociones desde la marca, por sucursal o en lote, con total flexibilidad operativa.
          </p>
          {/* Mockup */}
          <div className="mt-auto bg-gray-50 rounded-xl p-3 flex flex-col gap-1.5 border border-gray-100">
            {[true, false, false, false].map((active, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${active ? 'bg-red-500' : 'bg-gray-200'}`} />
                <div className={`flex-1 h-1.5 rounded-full ${active ? 'bg-red-100' : 'bg-gray-100'}`} />
                <svg className={`w-3 h-3 ${active ? 'text-red-500' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            ))}
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[9px] text-gray-400">Subiendo promo...</span>
              <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-red-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 02 — Distribución */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400 text-white text-xs font-black">02</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            <span className="font-bold text-gray-900 text-sm">Distribución</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Podés distribuir tus beneficios a través de tu Link o QR inteligentes en todos los canales y puntos de contacto.
          </p>
          {/* Mockup — channels grid + PROMO */}
          <div className="mt-auto relative bg-gray-50 rounded-xl p-3 border border-gray-100">
            <div className="grid grid-cols-3 gap-2 mb-2">
              {[
                // Row 1
                <svg key="home" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                <svg key="ig" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                <svg key="tt" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>,
                // Row 2
                <svg key="globe" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                <svg key="phone" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
                <svg key="qr" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/><path d="M17 17h3v3h-3z"/><path d="M14 17h3"/><path d="M17 14h3"/></svg>,
              ].map((icon, i) => (
                <div key={i} className="flex items-center justify-center w-8 h-8 bg-white rounded-lg border border-gray-100 shadow-sm mx-auto">
                  {icon}
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <span className="bg-red-500 text-white text-[10px] font-black px-4 py-1 rounded-full tracking-wider">PROMO</span>
            </div>
          </div>
        </div>

        {/* Card 03 — Interacción */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-500 text-white text-xs font-black">03</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="font-bold text-gray-900 text-sm">Interacción</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Los clientes descubren y acceden a las promos desde su teléfono, en tiempo real.
          </p>
          {/* Mockup — TOP PARTNERS */}
          <div className="mt-auto bg-gray-50 rounded-xl p-3 border border-gray-100 flex gap-2">
            <div className="flex-1">
              <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-2">Top Partners</p>
              {[
                { name: 'ICBC', pct: 32, color: 'bg-blue-500' },
                { name: 'MP',   pct: 24, color: 'bg-cyan-400' },
                { name: 'MODO', pct: 18, color: 'bg-sky-400' },
                { name: 'NX',   pct: 15, color: 'bg-orange-400' },
                { name: 'PP',   pct: 11, color: 'bg-purple-400' },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-1.5 mb-1">
                  <span className="text-[8px] font-bold text-gray-500 w-7">{p.name}</span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.pct * 2.8}%` }} />
                  </div>
                  <span className="text-[8px] text-gray-400 w-5 text-right">{p.pct}%</span>
                </div>
              ))}
            </div>
            {/* Phone mockup */}
            <div className="w-8 flex-shrink-0 bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
              <div className="flex-1 p-0.5 flex flex-col gap-0.5">
                <div className="bg-blue-500 text-white text-[5px] font-bold px-1 py-0.5 rounded text-center">ICBC</div>
                <div className="h-1 bg-gray-100 rounded" />
                <div className="h-1 bg-gray-100 rounded w-3/4" />
                <div className="h-1 bg-gray-100 rounded" />
              </div>
              <div className="flex gap-0.5 p-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 04 — Optimización */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400 text-white text-xs font-black">04</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            <span className="font-bold text-gray-900 text-sm">Optimización</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Cada interacción genera datos accionables para mejorar la estrategia continuamente.
          </p>
          {/* Mockup — stats dashboard */}
          <div className="mt-auto bg-gray-50 rounded-xl p-3 border border-gray-100 flex flex-col gap-2">
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Estado de operación</p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-lg font-black text-gray-900 leading-none">12</p>
                <p className="text-[9px] text-gray-400 leading-tight">Beneficios activos</p>
              </div>
              <div>
                <p className="text-lg font-black text-gray-900 leading-none">5</p>
                <p className="text-[9px] text-gray-400 leading-tight">Por vencer</p>
              </div>
              <div>
                <p className="text-lg font-black text-gray-900 leading-none">10</p>
                <p className="text-[9px] text-gray-400 leading-tight">Inactivos</p>
              </div>
              <div>
                <p className="text-lg font-black text-red-500 leading-none">75</p>
                <p className="text-[9px] text-gray-400 leading-tight">Sucursales</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg px-2 py-1.5 flex justify-between items-center">
              <span className="text-[9px] font-bold text-white">1.4K 🔥</span>
              <span className="text-[9px] font-bold text-white">2.5K ⭐</span>
              <span className="text-[9px] font-bold text-white">120 🏆</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
