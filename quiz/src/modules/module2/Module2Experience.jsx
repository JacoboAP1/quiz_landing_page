import { Suspense, lazy } from 'react'
import LuxuryHero from './components/LuxuryHero.jsx'

const JewelryGallery = lazy(() => import('./components/JewelryGallery.jsx'))

function GalleryFallback() {
  return (
    <section
      aria-label="Loading jewelry collection"
      className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:px-8 lg:px-12 lg:py-16"
    >
      {[0, 1].map((item) => (
        <div
          key={item}
          className="h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
        >
          <div className="h-full rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />
        </div>
      ))}
    </section>
  )
}

function Module2Experience() {
  return (
    <section
      id="colecciones"
      aria-labelledby="module-2-collection-heading"
      className="relative overflow-x-hidden bg-obsidian text-soft-pearl"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,178,115,0.3),rgba(215,178,115,0))] blur-3xl" />
        <div className="absolute right-[-8rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(255,255,255,0))] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,222,194,0.85),transparent)]" />
      </div>

      <LuxuryHero />

      <Suspense fallback={<GalleryFallback />}>
        <JewelryGallery />
      </Suspense>
    </section>
  )
}

export default Module2Experience
