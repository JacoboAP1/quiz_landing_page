import { Suspense, lazy } from 'react'
import useInView from '../hooks/useInView.js'

const FloatingRing = lazy(() => import('./FloatingRing.jsx'))

const featurePills = [
  'Limited atelier drop',
  'Precision-set brilliance',
  'Museum-grade finish',
]

function LuxuryHero() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section
      ref={ref}
      className="relative mx-auto max-w-7xl px-6 pb-14 pt-8 sm:px-8 lg:px-12 lg:pb-20 lg:pt-12"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          className={`space-y-8 transition duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-champagne/80 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-rich-gold shadow-[0_0_18px_rgba(215,178,115,0.85)]" />
            Premium jewelry experience
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.38em] text-white/45">
              Module 2
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.96] text-soft-pearl sm:text-6xl lg:text-7xl">
              Sculpted light for a modern jewelry house.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              A cinematic showcase designed to let every curve, reflection, and
              metallic highlight feel intentional. This section pairs luxury
              storytelling with interactive 3D product moments to elevate the
              landing page into a premium brand experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {featurePills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.3em] text-champagne/75 transition duration-500 hover:border-rich-gold/35 hover:bg-rich-gold/10"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                Finish
              </p>
              <p className="mt-3 font-display text-3xl text-soft-pearl">
                Mirror Gold
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                Motion
              </p>
              <p className="mt-3 font-display text-3xl text-soft-pearl">
                Smooth 3D
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                Feel
              </p>
              <p className="mt-3 font-display text-3xl text-soft-pearl">
                Atelier
              </p>
            </div>
          </div>
        </div>

        <div
          className={`relative transition duration-700 delay-100 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="animate-soft-pulse absolute inset-10 rounded-full bg-rich-gold/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_42%,rgba(8,8,8,0.9)_100%)] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.48)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,222,194,0.9),transparent)]" />

            <Suspense
              fallback={
                <div className="h-[440px] rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(215,178,115,0.18),rgba(255,255,255,0.02)_38%,rgba(0,0,0,0.92)_72%)] sm:h-[520px]" />
              }
            >
              <FloatingRing className="h-[440px] sm:h-[520px]" />
            </Suspense>

            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-lg">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.34em] text-champagne/65">
                    Featured silhouette
                  </p>
                  <p className="mt-2 font-display text-2xl text-soft-pearl">
                    Serpentine Signature Ring
                  </p>
                </div>
                <div className="rounded-full border border-rich-gold/30 bg-rich-gold/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-champagne">
                  Interactive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LuxuryHero
