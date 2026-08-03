import { Link } from 'react-router'
import ProductCard from '../components/ProductCard.jsx'
import Features from '../components/Features.jsx'
import products from '../data/products.js'
import SaleBanner from '../components/SaleBanner.jsx'
import Articles from '../components/Articles.jsx'

function HomePage({ onAddToCart }) {
  return (
      <main className="w-full">
        <div className="mx-auto max-w-6xl px-4">
          <section className="relative overflow-hidden">
            <img
                src="/assets/images/site/hero.jpg"
                alt="Living room furniture"
                className="h-[280px] w-full object-cover sm:h-[360px] md:h-[520px]"
            />
          </section>

          <section className="py-10 sm:py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                  Simply Unique
                  <span className="text-neutral-400">/</span>
                  <br />
                  Simply Better
                  <span className="text-neutral-400">.</span>
                </h1>
              </div>

              <div className="md:col-span-5 md:flex md:justify-end">
                <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
                <span className="font-semibold text-neutral-900">
                  3legant
                </span>{' '}
                  is a gift and decorations store based in HCMC, Vietnam.
                  Established since 2019.
                </p>
              </div>
            </div>
          </section>

          <section className="pb-14">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <Link
                  to="/shop"
                  className="relative min-h-[420px] overflow-hidden bg-neutral-100 sm:min-h-[520px] lg:col-span-7"
              >
                <img
                    src="/assets/images/site/livingroom.png"
                    alt="Living room"
                    className="absolute inset-0 h-full w-full object-contain"
                />

                <div className="relative p-8">
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Living Room
                  </h2>

                  <span className="mt-3 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium">
                  Shop Now
                  <span aria-hidden="true">→</span>
                </span>
                </div>
              </Link>

              <div className="grid grid-cols-1 gap-6 lg:col-span-5">
                <Link
                    to="/shop"
                    className="relative min-h-[240px] overflow-hidden bg-neutral-100 sm:min-h-[260px]"
                >
                  <img
                      src="/assets/images/site/bedroom.png"
                      alt="Bedroom"
                      className="absolute right-0 top-0 h-full w-full object-contain"
                  />

                  <div className="relative p-8">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      Bedroom
                    </h2>

                    <span className="mt-3 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium">
                    Shop Now
                    <span aria-hidden="true">→</span>
                  </span>
                  </div>
                </Link>

                <Link
                    to="/shop"
                    className="relative min-h-[240px] overflow-hidden bg-neutral-100 sm:min-h-[260px]"
                >
                  <img
                      src="/assets/images/site/kitchen.png"
                      alt="Kitchen"
                      className="absolute right-0 top-0 h-full w-full object-contain"
                  />

                  <div className="relative p-8">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      Kitchen
                    </h2>

                    <span className="mt-3 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium">
                    Shop Now
                    <span aria-hidden="true">→</span>
                  </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-14">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-4xl font-semibold tracking-tight">
                New Arrivals
              </h2>

              <Link
                  to="/shop"
                  className="border-b border-neutral-900 pb-1 text-sm font-medium"
              >
                More Products →
              </Link>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-5">
              {products.map((product) => (
                  <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={onAddToCart}
                  />
              ))}
            </div>
          </section>

          <Features />
        </div>

        <SaleBanner />
        <Articles />
      </main>
  )
}

export default HomePage