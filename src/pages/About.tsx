import { H1, H2, P, Ul } from "@/components/typography"
import { Section } from "@/components/site"

export default function About() {
  return (
    <>
      <Section className="py-16">
        <H1>About Framwrk</H1>
        <P className="mt-4">
          Framwrk is a software company that builds free, open-source tools
          for people who work on the command line and care about their
          machines. Our products are small and opinionated: they do one job
          well, get out of the way, and never phone home.
        </P>
      </Section>

      <Section>
        <H2>Our mission</H2>
        <P className="mt-4">
          Make focused, honest software that respects its users: no
          telemetry, no lock-in, no bloat.
        </P>
      </Section>

      <Section>
        <H2>Our values</H2>
        <Ul className="mt-4">
          <li>
            <strong>Ship small.</strong> Small changes, verified, beat big
            bets that break.
          </li>
          <li>
            <strong>Own the defaults.</strong> Sensible defaults, easy
            overrides, no magic.
          </li>
          <li>
            <strong>Open source is the default.</strong> Every product we
            release, you can read, audit, and build yourself.
          </li>
        </Ul>
      </Section>
    </>
  )
}
