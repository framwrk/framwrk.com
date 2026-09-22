import { Link, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Framwrk</Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Framwrk. All rights reserved.</p>
      </footer>
    </>
  )
}
