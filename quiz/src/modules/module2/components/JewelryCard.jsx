import useInView from '../hooks/useInView.js'

function JewelryCard({
  accent = 'from-rich-gold/30 via-transparent to-white/10',
  description,
  details,
  eyebrow,
  reverse = false,
  title,
  viewer,
}) {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <article
      ref={ref}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-700 sm:p-8 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent}`} />

      <div
        className={`relative grid items-center gap-8 lg:min-h-[24rem] lg:grid-cols-[1.05fr_0.95fr] ${
          reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
        }`}
      >
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.42em] text-champagne/75">
            {eyebrow}
          </p>
          <div className="space-y-4">
            <h3 className="max-w-xl font-display text-3xl leading-tight text-soft-pearl sm:text-4xl">
              {title}
            </h3>
            <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              {description}
            </p>
          </div>

          <ul className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.28em] text-champagne/80">
            {details.map((detail) => (
              <li
                key={detail}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition duration-500 group-hover:border-rich-gold/35 group-hover:bg-rich-gold/10"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div>{viewer}</div>
      </div>
    </article>
  )
}

export default JewelryCard
