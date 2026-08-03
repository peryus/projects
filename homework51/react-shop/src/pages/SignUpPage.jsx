import { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify'

function SingUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    toast.success('Account created successfully')

    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
    })
  }

  return (
      <main className="min-h-screen">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
          <section className="relative hidden bg-neutral-100 lg:block">
            <Link
                to="/"
                className="absolute left-1/2 top-8 z-10 -translate-x-1/2 text-2xl font-semibold"
            >
              3legant.
            </Link>

            <img
                src="/assets/images/site/chair.jpg"
                alt="Chair"
                className="h-full w-full object-cover"
            />
          </section>

          <section className="flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
              <Link
                  to="/"
                  className="mb-10 block text-2xl font-semibold lg:hidden"
              >
                3legant.
              </Link>

              <h1 className="text-4xl font-semibold">
                Sign up
              </h1>

              <p className="mt-4 text-neutral-500">
                Already have an account?{' '}
                <button
                    type="button"
                    className="font-semibold text-emerald-600"
                >
                  Sign in
                </button>
              </p>

              <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-6"
              >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your name"
                    onChange={handleChange}
                    required
                    className="border-b border-neutral-300 py-3 outline-none focus:border-neutral-900"
                />

                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder="Username"
                    onChange={handleChange}
                    required
                    className="border-b border-neutral-300 py-3 outline-none focus:border-neutral-900"
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email address"
                    onChange={handleChange}
                    required
                    className="border-b border-neutral-300 py-3 outline-none focus:border-neutral-900"
                />

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    className="border-b border-neutral-300 py-3 outline-none focus:border-neutral-900"
                />

                <label className="flex items-start gap-3 text-sm text-neutral-500">
                  <input
                      type="checkbox"
                      required
                      className="mt-1"
                  />

                  <span>
                  I agree with the{' '}
                    <strong className="text-neutral-900">
                    Privacy Policy
                  </strong>{' '}
                    and{' '}
                    <strong className="text-neutral-900">
                    Terms of Use
                  </strong>
                </span>
                </label>

                <button
                    type="submit"
                    className="rounded-md bg-neutral-900 py-3 font-medium text-white hover:bg-neutral-700"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
  )
}

export default SingUpPage