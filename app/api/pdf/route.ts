import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import puppeteer from 'puppeteer'

export const runtime = 'nodejs'

// Map from proposal section IDs to landing page HTML element IDs
const SECTION_MAP: Record<string, string | null> = {
  cover: null,
  concept: 'concepto',
  solution: 'solucion',
  circuit: 'circuito',
  distrib: 'distribucion',
  analytics: 'analytics',
  plans: 'planes',
  case: 'burgerking',
}

const ALL_LANDING_IDS = [
  'hero', 'concepto', 'introduccion', 'desafio', 'solucion',
  'circuito', 'como-ven', 'gestion', 'levis', 'distribucion',
  'analytics', 'burgerking', 'planes', 'cta-final',
]

const LANDING_FILE_URL = 'file:///C:/Users/agust/Documents/Codex/clash-conecta/index.html'

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const config = await req.json()
  const enabledSections = ((config.sections ?? []) as any[])
    .filter((s) => s.enabled)
    .sort((a: any, b: any) => a.order - b.order)

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--allow-file-access-from-files',
    ],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1304, height: 900 })

    await page.goto(LANDING_FILE_URL, { waitUntil: 'networkidle0', timeout: 30000 })

    // ── 1. FREEZE ANIMATIONS — jump everything to its final/best state ──
    await page.addStyleTag({
      content: `
        nav, footer { display: none !important; }

        /* Force all scroll-reveal animations to completed state */
        .rv { opacity: 1 !important; transform: none !important; transition: none !important; }

        /* Kill all motion */
        *, *::before, *::after {
          animation-duration: 0.001ms !important;
          animation-delay: 0s !important;
          animation-fill-mode: both !important;
          animation-play-state: running !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }

        /* Circuito — show completed/loaded state */
        .ac2-check { opacity: 1 !important; background: rgba(220,38,38,.12) !important; color: #dc2626 !important; }
        .ac2-dot { background: #dc2626 !important; }
        .ac2-progress-fill { width: 100% !important; }
        .ac2-row { opacity: 1 !important; }
        .ad2-node { opacity: 1 !important; transform: scale(1) !important; }
        .ad2-ln { opacity: 1 !important; stroke-dashoffset: 0 !important; }
        .ai2-pulse { opacity: 0.2 !important; transform: scale(1.3) !important; }
        .ai2-notif { opacity: 1 !important; transform: none !important; }
        .ai2-rf1 { width: 100% !important; }
        .ai2-rf2 { width: 75% !important; }
        .ai2-rf3 { width: 56% !important; }
        .ai2-rf4 { width: 47% !important; }
        .ai2-rf5 { width: 34% !important; }
        .ao2-op-tile { opacity: 1 !important; transform: none !important; }

        /* Solución — show all accordion items open */
        .sol-acc-item { background: #fff !important; box-shadow: 0 4px 24px rgba(0,0,0,.09) !important; }
        .sol-acc-body { max-height: none !important; overflow: visible !important; }
        .sol-acc-body-in { padding-bottom: 16px !important; }
        /* Show panel 1 as the active visual */
        .sol-panel { opacity: 0 !important; position: absolute !important; }
        .sol-panel.sol-p1 { opacity: 1 !important; position: relative !important; display: flex !important; }

        /* Distribución — all accordions open */
        .d-acc { border-color: rgba(234,179,8,.4) !important; }
        .d-acc-body { max-height: none !important; overflow: visible !important; }
        .d-acc-body-in { padding-top: 0 !important; padding-bottom: 18px !important; }

        /* Planes — expand all details */
        .pln-details { grid-template-rows: 1fr !important; transition: none !important; }
        .pln-details-inner { overflow: visible !important; }
        .pln-grid.has-active .pln-card:not(.active) { opacity: 1 !important; filter: none !important; transform: none !important; }

        /* Section layout for PDF */
        section {
          min-height: auto !important;
          height: auto !important;
          display: block !important;
          page-break-after: always !important;
          overflow: visible !important;
          position: relative !important;
          align-items: flex-start !important;
        }
        body { overflow: visible !important; background: #fff; }
        html { scroll-behavior: auto !important; }

        /* Analytics bars — show as static */
        .bar-fill, .dp-bar-fill { animation: none !important; }
      `,
    })

    // ── 2. HIDE/SHOW sections per config ──
    const enabledLandingIds = enabledSections
      .map((s: any) => SECTION_MAP[s.id])
      .filter(Boolean) as string[]

    await page.evaluate(
      (allIds: string[], enabledIds: string[]) => {
        allIds.forEach((id) => {
          const el = document.getElementById(id)
          if (el) el.style.display = 'none'
        })
        enabledIds.forEach((id) => {
          const el = document.getElementById(id)
          if (el) {
            el.style.removeProperty('display')
            el.style.display = 'block'
          }
        })
      },
      ALL_LANDING_IDS,
      enabledLandingIds,
    )

    // ── 3. INJECT COVER PAGE ──
    const coverEnabled = enabledSections.some((s: any) => s.id === 'cover')
    if (coverEnabled) {
      await page.evaluate((brand: any) => {
        const today = new Date().toLocaleDateString('es-AR', {
          day: 'numeric', month: 'long', year: 'numeric',
        })
        const cover = document.createElement('section')
        cover.id = 'pdf-cover'
        Object.assign(cover.style, {
          background: '#0f0f11',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          pageBreakAfter: 'always',
        })
        const hasBrandLogo = !!(brand.logoBase64 || brand.logoUrl)
        const brandLogoSrc = brand.logoBase64 || brand.logoUrl

        cover.innerHTML = `
          <div style="position:absolute;top:0;right:0;width:600px;height:600px;background:rgba(220,38,38,0.06);border-radius:50%;transform:translate(40%,-40%);filter:blur(100px);pointer-events:none"></div>
          <div style="position:absolute;bottom:0;left:0;width:500px;height:500px;background:rgba(220,38,38,0.04);border-radius:50%;transform:translate(-40%,40%);filter:blur(100px);pointer-events:none"></div>
          <div style="position:relative;z-index:2;padding:80px 60px;text-align:center">
            ${hasBrandLogo
              ? `<!-- Brand logo as primary hero -->
                 <div style="margin-bottom:32px;display:flex;align-items:center;justify-content:center;gap:10px">
                   <span style="font-size:26px;font-weight:900;letter-spacing:-1px;color:#6b7280;font-family:Inter,sans-serif">CL<span style="color:#dc2626">A</span>SH</span>
                   <span style="font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#4b5563;font-family:Inter,sans-serif;margin-top:4px">× Propuesta</span>
                 </div>
                 <div style="display:flex;align-items:center;justify-content:center;margin-bottom:32px">
                   <div style="padding:28px 40px;background:rgba(255,255,255,0.08);border-radius:20px;border:1px solid rgba(255,255,255,0.1)">
                     <img src="${brandLogoSrc}" alt="${brand.name}" style="max-height:120px;max-width:300px;object-fit:contain;display:block;margin:0 auto">
                   </div>
                 </div>`
              : `<!-- CLASH as primary when no brand logo -->
                 <img src="assets/clash-logo.png" alt="Clash"
                   style="height:90px;width:auto;object-fit:contain;display:block;margin:0 auto 28px;filter:drop-shadow(0 4px 20px rgba(0,0,0,0.5))"
                   onerror="this.onerror=null;this.src='assets/clash-logo.svg';this.style.filter='brightness(0) invert(1);">`
            }
            <div style="width:${hasBrandLogo ? '48' : '60'}px;height:3px;background:#dc2626;margin:0 auto ${hasBrandLogo ? '24' : '36'}px"></div>
            <div style="font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#6b7280;margin-bottom:24px;font-family:Inter,sans-serif">PROPUESTA COMERCIAL</div>
            ${brand.name
              ? `<div style="font-size:52px;font-weight:800;color:#fff;letter-spacing:-2px;margin-bottom:14px;font-family:Inter,sans-serif">${brand.name}</div>`
              : `<div style="font-size:52px;font-weight:800;color:#4b5563;letter-spacing:-2px;margin-bottom:14px;font-style:italic;font-family:Inter,sans-serif">[Empresa]</div>`
            }
            ${brand.operationType ? `<div style="font-size:18px;color:#9ca3af;margin-bottom:10px;font-family:Inter,sans-serif">${brand.operationType}</div>` : ''}
            ${brand.branches > 1 ? `<div style="font-size:14px;color:#6b7280;font-family:Inter,sans-serif">${brand.branches} sucursales</div>` : ''}
            ${brand.needs ? `<div style="margin-top:32px;max-width:480px;font-size:14px;color:#6b7280;line-height:1.6;font-family:Inter,sans-serif;border-left:3px solid #dc2626;padding-left:16px;text-align:left">${brand.needs}</div>` : ''}
            <div style="margin-top:80px;font-size:12px;color:#4b5563;font-family:Inter,sans-serif">${today}</div>
          </div>
        `
        document.body.insertBefore(cover, document.body.firstChild)
      }, config.brand)
    }

    // ── 4. REPLACE PLANS SECTION WITH ADMIN CONFIG DATA ──
    const plansEnabled = enabledSections.some((s: any) => s.id === 'plans')
    if (plansEnabled && config.plans?.length) {
      await page.evaluate((plans: any[]) => {
        const grid = document.querySelector('#planes .pln-grid')
        if (!grid) return

        const visiblePlans = plans.filter((p) => p.visible)
        grid.innerHTML = visiblePlans.map((plan) => {
          const featRows = plan.features.map((f: string) => `
            <li style="display:flex;gap:10px;align-items:flex-start;font-size:12.5px;color:#4b5563;line-height:1.55;padding:5px 0;border-bottom:1px solid #f3f4f6">
              <span style="color:#dc2626;font-weight:700;flex-shrink:0;margin-top:1px">→</span>
              <span>${f}</span>
            </li>
          `).join('')

          const badge = plan.highlighted
            ? `<div style="position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:#dc2626;color:#fff;font-size:10px;font-weight:700;padding:3px 12px;border-radius:20px;letter-spacing:.5px;white-space:nowrap">Recomendado</div>`
            : ''

          const borderStyle = plan.highlighted
            ? 'border:2px solid #dc2626;box-shadow:0 0 0 0px rgba(220,38,38,.14),0 8px 40px rgba(220,38,38,.12)'
            : 'border:1.5px solid #e5e7eb'

          const priceColor = plan.highlighted ? 'color:#dc2626' : 'color:#111827'

          return `
            <div style="position:relative;background:#fff;border-radius:20px;padding:24px 20px 20px;${borderStyle};display:flex;flex-direction:column;gap:0;break-inside:avoid">
              ${badge}
              <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:8px">${plan.id === 'managed' ? 'Popular' : plan.id === 'free' ? 'Entrada' : plan.id === 'scale' ? 'Avanzado' : 'Premium'}</div>
              <div style="font-size:20px;font-weight:900;color:#111827;letter-spacing:-.5px;margin-bottom:8px">${plan.name}</div>
              <div style="font-size:12px;color:#6b7280;line-height:1.5;margin-bottom:14px">${plan.description}</div>
              <div style="margin-bottom:16px">
                <span style="font-size:22px;font-weight:900;${priceColor};letter-spacing:-.5px">${plan.price}</span>
                <div style="font-size:11px;color:#9ca3af;margin-top:2px">${plan.priceNote}</div>
              </div>
              <div style="height:1px;background:#f3f4f6;margin-bottom:12px"></div>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:0;flex:1">
                ${featRows}
              </ul>
            </div>
          `
        }).join('')
      }, config.plans)
    }

    // ── 5. GENERATE PDF ──
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      scale: 0.88,
      timeout: 60000,
    })

    const brandSlug = (config?.brand?.name ?? 'cliente')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
    const filename = `propuesta-clash-${brandSlug}.pdf`

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } finally {
    await browser.close()
  }
}
