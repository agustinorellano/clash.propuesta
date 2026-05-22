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

        {/* Clash logo — always the image */}
        <div className="mb-8 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/clash-logo.svg"
            alt="Clash"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Brand logo — if uploaded, shown below Clash as secondary */}
        {effectiveLogo && (
          <div className="mb-8 flex justify-center">
            <div className="bg-white/8 border border-white/10 rounded-2xl px-8 py-5 backdrop-blur-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={effectiveLogo}
                alt={brand.name}
                className="max-h-16 max-w-[220px] object-contain block mx-auto"
              />
            </div>
          </div>
        )}

        {/* Separator */}
        <div className="w-12 h-0.5 bg-red-600 mx-auto mb-6" />

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
