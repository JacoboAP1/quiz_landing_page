import ProductCard from './components/ProductCard.jsx'
import productData from './productData.js'

function Module2Experience() {
  return (
    <section
      id="colecciones"
      aria-labelledby="module-2-heading"
      className="bg-[linear-gradient(180deg,#fffdfa_0%,#faf5ec_56%,#f7efe3_100%)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#b08b57]">
            New Collection
          </p>
          <h2
            id="module-2-heading"
            className="mt-4 font-display text-4xl text-[#34261a] sm:text-5xl"
          >
            Elegant pieces for everyday moments
          </h2>
          <p className="mt-5 text-base leading-8 text-[#6e5b47] sm:text-lg">
            Discover a bright, wearable selection designed for a new online
            jewelry store: simple styling, warm tones, and pieces that feel easy
            to gift or wear every day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {productData.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Module2Experience
