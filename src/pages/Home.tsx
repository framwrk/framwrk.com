import { Link } from 'react-router'

export default function Home() {
  return (
    <>
      <section>
        <h1>Build with Framwrk</h1>
        <p>
          Framwrk is a lightweight toolkit for shipping fast, accessible web
          applications. Write components, connect your data, and deploy in
          minutes.
        </p>
        <p>
          <Link to="/features">See the features</Link> or{' '}
          <Link to="/pricing">view pricing</Link>.
        </p>
      </section>

      <section>
        <h2>Why teams choose Framwrk</h2>
        <ul>
          <li>
            <h3>Fast by default</h3>
            <p>Zero-config builds and instant hot reloads out of the box.</p>
          </li>
          <li>
            <h3>Accessible components</h3>
            <p>
              Every primitive ships with keyboard support and ARIA semantics.
            </p>
          </li>
          <li>
            <h3>Typed end to end</h3>
            <p>Strict TypeScript across the whole stack, no exceptions.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Get started today</h2>
        <p>Join thousands of developers already building with Framwrk.</p>
        <Link to="/pricing">Start for free</Link>
      </section>
    </>
  )
}
