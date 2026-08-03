import { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      toast.error('Enter your email')
      return
    }

    toast.success('You have subscribed successfully')
    setEmail('')
  }

  return (
      <footer id="contact" className="text-white">
        <section className="relative text-neutral-900">
          <img
              src="/assets/images/site/footersjoin.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="relative mx-auto max-w-6xl px-4">
            <div className="grid h-[360px] place-items-center text-center">
              <div className="w-full max-w-xl">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Join Our Newsletter
                </h2>

                <p className="mt-3 text-neutral-600">
                  Signup for deals, new products and promotions
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto mt-6 flex w-full max-w-md items-center border-b border-neutral-500"
                >
                  <input
                      type="email"
                      value={email}
                      placeholder="Email address"
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full bg-transparent py-3 outline-none placeholder:text-neutral-500"
                  />

                  <button
                      type="submit"
                      className="py-3 text-sm font-medium text-neutral-900"
                  >
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-neutral-900">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link to="/" className="text-xl font-semibold">
                  3legant.
                </Link>

                <div className="hidden h-5 w-px bg-white/30 sm:block" />

                <p className="text-sm text-white/70">
                  Gift & Decoration Store
                </p>
              </div>

              <nav className="flex flex-wrap gap-8 text-sm text-white/80">
                <Link to="/" className="hover:text-white">
                  Home
                </Link>

                <Link to="/shop" className="hover:text-white">
                  Shop
                </Link>

                <a href="#articles" className="hover:text-white">
                  Articles
                </a>

                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </nav>
            </div>

            <div className="h-px bg-white/15" />

            <div className="flex flex-col gap-6 py-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
                <p>
                  Copyright © 2026 3legant. All rights reserved
                </p>

                <div className="flex gap-6">
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>

                  <a href="#" className="hover:text-white">
                    Terms of Use
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <a href="#" aria-label="Instagram" className="hover:text-white">
                  Instagram
                </a>

                <a href="#" aria-label="Facebook" className="hover:text-white">
                  Facebook
                </a>

                <a href="#" aria-label="YouTube" className="hover:text-white">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer