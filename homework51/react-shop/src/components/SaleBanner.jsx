import { Link } from 'react-router'

function SaleBanner() {
  return (
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 overflow-hidden bg-neutral-100 lg:grid-cols-2">
            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
              <img
                  src="/assets/images/site/hunders.png"
                  alt="Furniture sale"
                  className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center p-8 sm:p-12 lg:p-14">
              <div className="max-w-lg">
                <p className="text-sm font-semibold tracking-widest text-blue-600">
                  SALE UP TO 35% OFF
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  HUNDREDS of
                  <br />
                  New lower prices!
                </h2>

                <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  It’s more affordable than ever to give every room in your
                  home a stylish makeover.
                </p>

                <Link
                    to="/shop"
                    className="mt-7 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium"
                >
                  Shop Now
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SaleBanner