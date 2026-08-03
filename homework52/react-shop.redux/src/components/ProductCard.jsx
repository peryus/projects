
function ProductCard({ product, onAddToCart }) {
  return (
      <article className="w-[262px] shrink-0">
        <div className="group relative h-[349px] overflow-hidden bg-neutral-100">
          <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
            {product.isNew && (
                <span className="w-fit rounded bg-white px-2 py-1 text-xs font-semibold">
              NEW
            </span>
            )}

            {product.discount && (
                <span className="w-fit rounded bg-emerald-500 px-2 py-1 text-xs font-semibold text-white">
              {product.discount}
            </span>
            )}
          </div>

          <button
              type="button"
              aria-label={`Add ${product.name} to wishlist`}
              className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm"
          >
            ♡
          </button>

          <div className="grid h-full w-full place-items-center px-6 pt-12">
            <img
                src={product.image}
                alt={product.name}
                className="h-[75%] object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="h-12 w-full translate-y-2 rounded-md bg-neutral-900 text-sm font-medium text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="pt-3">
          <div className="text-sm leading-none" aria-label="5 stars">
            ★★★★★
          </div>

          <h3 className="mt-2 font-semibold">
            {product.name}
          </h3>

          <div className="mt-1 flex items-center gap-3 text-sm">
          <span className="font-semibold">
            ${product.price.toFixed(2)}
          </span>

            {product.oldPrice && (
                <span className="text-neutral-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
            )}
          </div>
        </div>
      </article>
  )
}

export default ProductCard