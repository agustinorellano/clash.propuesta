import { ProposalConfig } from '@/lib/types'

interface CoverSectionProps {
  brand: ProposalConfig['brand']
}

export default function CoverSection({ brand }: CoverSectionProps) {
  const today = new Date().toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const effectiveLogo = brand.logoBase64 || brand.logoUrl

  return (
    <div className="bg-[#0f0f11] text-white min-h-[500px] flex flex-col items-center justify-center p-16 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-5 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-5 transform -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 text-center">

        {effectiveLogo ? (
          /* Brand logo as primary hero — CLASH as secondary badge */
          <>
            {/* CLASH badge — small, top */}
            <div className="mb-8 flex items-center justify-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-gray-400">
                CL<span className="text-red-600">A</span>SH
              </span>
              <span className="text-gray-600 text-xs font-medium tracking-widest uppercase mt-1">× Propuesta</span>
            </div>

            {/* Brand logo — large and centered */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/8 border border-white/10 rounded-2xl px-10 py-7 backdrop-blur-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={effectiveLogo}
                  alt={brand.name}
                  className="max-h-28 max-w-xs object-contain block mx-auto"
                />
              </div>
            </div>

            {/* Separator */}
            <div className="w-12 h-0.5 bg-red-600 mx-auto mb-6" />
          </>
        ) : (
          /* No brand logo — CLASH as primary */
          <>
            <div className="mb-6">
              <span className="text-6xl font-black tracking-tighter">
                CL<span className="text-red-600">A</span>SH
              </span>
            </div>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mb-8" />
          </>
        )}

        {/* Label */}
        <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-4">
          Propuesta Comercial
        </p>

        {/* Brand name */}
        {brand.name ? (
          <h1 className="text-4xl font-bold text-white mb-3">{brand.name}</h1>
        ) : (
          <h1 className="text-4xl font-bold text-gray-600 mb-3 italic">[Nombre de empresa]</h1>
        )}

        {brand.operationType && (
          <p className="text-gray-400 text-base mb-2">{brand.operationType}</p>
        )}
        {brand.branches > 1 && (
          <p className="text-gray-500 text-sm">{brand.branches} sucursales</p>
        )}

        {/* Date */}
        <div className="mt-12 text-gray-600 text-xs">{today}</div>
      </div>
    </div>
  )
}
