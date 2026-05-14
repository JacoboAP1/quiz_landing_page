import FloatingRing from './FloatingRing.jsx'
import JewelryCard from './JewelryCard.jsx'
import PendantViewer from './PendantViewer.jsx'

const pieces = [
  {
    accent: 'from-rich-gold/40 via-rich-gold/10 to-transparent',
    description:
      'A fluid snake-inspired ring presented with warm specular light, soft suspension, and controlled rotation that highlights every sculpted edge.',
    details: ['OBJ / premium mesh', 'Auto rotation', 'Mouse responsive'],
    eyebrow: 'Signature ring',
    title: 'Serpentine curves with cinematic reflections',
    viewer: <FloatingRing modelPath="/Free Snake ring - 16,0 obj.obj" />,
  },
  {
    accent: 'from-champagne/40 via-rich-gold/10 to-transparent',
    description:
      'The pendant is framed in a quieter composition, letting silhouette and finish take the lead while subtle lighting adds depth without overpowering the piece.',
    details: ['Centered fit', 'Soft shadowing', 'Luxury lighting'],
    eyebrow: 'Pendant piece',
    reverse: true,
    title: 'A pendant study built around elegant restraint',
    viewer: <PendantViewer />,
  },
  {
    accent: 'from-white/30 via-rich-gold/10 to-transparent',
    description:
      'This ring closes the sequence with a sharper contemporary profile, balancing minimal presentation with premium material cues and a gallery-like rhythm.',
    details: ['Optimized canvas', 'Float motion', 'Responsive layout'],
    eyebrow: 'Modern band',
    title: 'Contemporary volume with a polished couture finish',
    viewer: (
      <FloatingRing
        accentColor="#f0dec2"
        modelPath="/OBJ_file_of_ring.obj"
        targetSize={2.55}
      />
    ),
  },
]

function JewelryGallery() {
  return (
    <section
      aria-labelledby="module-2-collection-heading"
      className="relative mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28"
    >
      <div className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.42em] text-champagne/75">
            Collection reveal
          </p>
          <h2
            id="module-2-collection-heading"
            className="max-w-3xl font-display text-4xl leading-tight text-soft-pearl sm:text-5xl"
          >
            Three immersive product moments shaped for a premium first impression.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base">
          Each card shares the same rendering system, but adapts its camera,
          proportions, and metallic tone to give every jewelry model its own
          editorial presence.
        </p>
      </div>

      <div className="grid gap-6">
        {pieces.map((piece) => (
          <JewelryCard key={piece.title} {...piece} />
        ))}
      </div>
    </section>
  )
}

export default JewelryGallery
