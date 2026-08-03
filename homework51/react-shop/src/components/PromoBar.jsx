import { useState } from 'react'
import { Link } from 'react-router'

function PromoBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
      <div className="w-full bg-neutral-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative flex items-center justify-center py-2 text-xs text-neutral-700 sm:text-sm">
            <div className="flex items-center gap-2">
              <span aria-hidden="true">🎟️</span>

              <span className="font-medium">
              30% off storewide — Limited time!
            </span>

              <Link
                  to="/shop"
                  className="ml-1 hidden items-center gap-1 font-medium text-blue-600 hover:underline sm:inline-flex"
              >
                Shop Now
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <button
                type="button"
                aria-label="Close promotion"
                onClick={() => setIsVisible(false)}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-neutral-500 hover:text-neutral-900"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
  )
}

export default PromoBar