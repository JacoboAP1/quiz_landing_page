function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#eadfce] bg-white shadow-[0_18px_45px_rgba(115,93,60,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_rgba(115,93,60,0.16)]">
      <div className="overflow-hidden bg-[#f7efe3]">
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#b08b57]">
            {product.category}
          </p>
          <h3 className="font-display text-2xl text-[#34261a]">
            {product.name}
          </h3>
          <p className="text-sm leading-7 text-[#6e5b47]">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-2xl font-semibold text-[#7e5f34]">
            {product.price}
          </p>
          <button
            type="button"
            className="rounded-full border border-[#d9c4a4] bg-[#fff8ef] px-5 py-2.5 text-sm font-medium text-[#6f522d] transition duration-300 hover:border-[#b08b57] hover:bg-[#f8ead4] hover:text-[#4f3920]"
          >
            View details
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
