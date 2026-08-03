import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/products.js'

function ShopPage({ onAddToCart }) {
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [search])

  return (
      <main>
        <section className="mx-auto max-w-6xl px-4">
          <div className="relative min-h-[300px] overflow-hidden">
            <img
                src="/assets/images/site/shophero.png"
                alt="Shop"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative flex min-h-[300px] flex-col items-center justify-center text-center">
              <p className="text-sm text-neutral-600">
                Home → Shop
              </p>

              <h1 className="mt-4 text-5xl font-semibold">
                Shop Page
              </h1>

              <p className="mt-4 text-neutral-600">
                Let’s design the place you always imagined.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">
                All Products
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                Products found: {filteredProducts.length}
              </p>
            </div>

            <input
                type="search"
                value={search}
                placeholder="Search products"
                onChange={(event) => setSearch(event.target.value)}
                className="w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900 sm:max-w-xs"
            />
          </div>

          {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
              </div>
          ) : (
              <p className="py-10 text-center text-neutral-500">
                No products found.
              </p>
          )}
        </section>
      </main>
  )
}

export default ShopPage