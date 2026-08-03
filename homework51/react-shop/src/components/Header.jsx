import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import {
  FaBars,
  FaRegUser,
  FaSearch,
  FaShoppingBag,
  FaTimes,
} from 'react-icons/fa'

const navLinkClass = ({ isActive }) =>
    isActive
        ? 'font-medium text-neutral-900'
        : 'text-neutral-600 hover:text-neutral-900'

function Header({ cartCount = 0, onOpenCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
      <header className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-5">
            <Link
                to="/"
                className="text-xl font-bold tracking-tight"
                onClick={closeMenu}
            >
              3legant.
            </Link>

            <nav className="hidden items-center gap-10 text-sm md:flex">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/shop" className={navLinkClass}>
                Shop
              </NavLink>

              <a
                  href="#contact"
                  className="text-neutral-600 hover:text-neutral-900"
              >
                Contact Us
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <button
                  type="button"
                  aria-label="Search"
                  className="hidden h-9 w-9 place-items-center rounded-full hover:bg-neutral-100 sm:grid"
              >
                <FaSearch size={19} />
              </button>

              <Link
                  to="/sign"
                  aria-label="Account"
                  className="hidden h-9 w-9 place-items-center rounded-full hover:bg-neutral-100 sm:grid"
              >
                <FaRegUser size={19} />
              </Link>

              <button
                  type="button"
                  aria-label="Open cart"
                  onClick={onOpenCart}
                  className="relative grid h-9 w-9 place-items-center rounded-full hover:bg-neutral-100"
              >
                <FaShoppingBag size={19} />

                {cartCount > 0 && (
                    <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-neutral-900 px-1 text-xs text-white">
                  {cartCount}
                </span>
                )}
              </button>

              <button
                  type="button"
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen((value) => !value)}
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-neutral-100 md:hidden"
              >
                {isMenuOpen ? (
                    <FaTimes size={20} />
                ) : (
                    <FaBars size={20} />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
              <nav className="pb-4 md:hidden">
                <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-4 text-sm">
                  <NavLink
                      to="/"
                      className={navLinkClass}
                      onClick={closeMenu}
                  >
                    Home
                  </NavLink>

                  <NavLink
                      to="/shop"
                      className={navLinkClass}
                      onClick={closeMenu}
                  >
                    Shop
                  </NavLink>

                  <a
                      href="#contact"
                      className="text-neutral-600 hover:text-neutral-900"
                      onClick={closeMenu}
                  >
                    Contact Us
                  </a>

                  <Link
                      to="/sign"
                      className="text-neutral-600 hover:text-neutral-900"
                      onClick={closeMenu}
                  >
                    Sign Up
                  </Link>
                </div>
              </nav>
          )}
        </div>
      </header>
  )
}

export default Header