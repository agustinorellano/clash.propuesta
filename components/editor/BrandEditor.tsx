'use client'

import { useRef } from 'react'
import { ProposalConfig } from '@/lib/types'
import { Upload, X, Link } from 'lucide-react'

interface BrandEditorProps {
  brand: ProposalConfig['brand']
  onChange: (brand: Partial<ProposalConfig['brand']>) => void
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full px-3 py-2 text-sm border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white'

export default function BrandEditor({ brand, onChange }: BrandEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  // The effective logo to preview: uploaded file takes priority over URL
  const effectiveLogo = brand.logoBase64 || brand.logoUrl

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      onChange({ logoBase64: reader.result as string })
    }
    reader.readAsDataURL(file)
    // Reset input so same file can be re-selected
    e.target.value = ''
  }

  function clearLogo() {
    onChange({ logoBase64: '', logoUrl: '' })
  }

  return (
    <div className="p-4 space-y-4">
      <div className="pb-2 border-b border-gray-100">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Datos de la marca</h2>
      </div>

      <Field label="Nombre de la empresa" id="brand-name">
        <input
          id="brand-name"
          type="text"
          value={brand.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="Ej. Barber King"
          className={inputClass}
        />
      </Field>

      {/* ── LOGO SECTION ── */}
      <div>
        <span className="block text-xs font-medium text-gray-600 mb-2">Logo de la marca</span>

        {effectiveLogo ? (
          /* Preview with remove button */
          <div className="relative rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center p-3 h-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={effectiveLogo}
              alt="Logo"
              className="max-h-16 max-w-full object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.3' }}
            />
            <button
              onClick={clearLogo}
              title="Quitar logo"
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm border border-gray-200 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {brand.logoBase64 && (
              <span className="absolute bottom-2 left-2 text-xs text-gray-400 bg-white px-1.5 py-0.5 rounded-md border border-gray-100">
                archivo
              </span>
            )}
          </div>
        ) : (
          /* Upload zone */
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-20 rounded-xl border-2 border-dashed border-gray-200 hover:border-red-400 hover:bg-red-50 flex flex-col items-center justify-center gap-1.5 transition-colors group"
          >
            <Upload className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
            <span className="text-xs font-medium text-gray-400 group-hover:text-red-500 transition-colors">
              Subir imagen
            </span>
            <span className="text-xs text-gray-300">PNG, JPG, SVG, WebP</span>
          </button>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />

        {/* URL fallback (collapsed under "o usar URL") */}
        <details className="mt-2">
          <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 flex items-center gap-1 select-none">
            <Link className="w-3 h-3" />
            O pegar URL del logo
          </summary>
          <div className="mt-2">
            <input
              type="url"
              value={brand.logoUrl}
              onChange={(e) => onChange({ logoUrl: e.target.value, logoBase64: '' })}
              placeholder="https://..."
              className={inputClass + ' text-xs'}
            />
          </div>
        </details>
      </div>

      <Field label="Tipo de operación" id="brand-operation">
        <input
          id="brand-operation"
          type="text"
          value={brand.operationType}
          onChange={(e) => onChange({ operationType: e.target.value })}
          placeholder="Ej. Cadena de barberías"
          className={inputClass}
        />
      </Field>

      <Field label="Cantidad de sucursales" id="brand-branches">
        <input
          id="brand-branches"
          type="number"
          min={1}
          value={brand.branches}
          onChange={(e) => onChange({ branches: parseInt(e.target.value) || 1 })}
          className={inputClass}
        />
      </Field>

      <Field label="Necesidades detectadas" id="brand-needs">
        <textarea
          id="brand-needs"
          value={brand.needs}
          onChange={(e) => onChange({ needs: e.target.value })}
          placeholder="Describe las necesidades específicas del cliente..."
          rows={3}
          className={inputClass + ' resize-none'}
        />
      </Field>

      <Field label="Observaciones / contexto" id="brand-obs">
        <textarea
          id="brand-obs"
          value={brand.observations}
          onChange={(e) => onChange({ observations: e.target.value })}
          placeholder="Notas internas sobre la empresa, contexto de reunión, etc."
          rows={4}
          className={inputClass + ' resize-none'}
        />
      </Field>
    </div>
  )
}
