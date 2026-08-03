import { createBrowserRouter, NavLink, Outlet } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

function Layout() {
  const getLinkClass = ({ isActive }) =>
      isActive ? 'nav-link active' : 'nav-link'

  return (
      <div className="app">
        <header>
          <nav className="navigation">
            <NavLink to="/" end className={getLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={getLinkClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={getLinkClass}>
              Contact
            </NavLink>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App