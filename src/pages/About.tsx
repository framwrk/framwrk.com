import { H1, H2, P, Ul } from "@/components/typography"
import { Section } from "@/components/site"

export default function About() {
  return (
    <>
      <Section className="py-16">
        <H1>About Framwrk</H1>
        <P className="mt-4">
          Framwrk started in 2024 as an internal toolkit and grew into a
          product when we realized every team was solving the same problems:
          slow builds, inconsistent components, and configuration sprawl.
        </P>
      </Section>

      <Section>
        <H2>Our mission</H2>
        <P className="mt-4">
          Make it effortless to build fast, accessible web applications
          without giving up control of your code.
        </P>
      </Section>

      <Section>
        <H2>Our values</H2>
        <Ul>
          <li>
            <strong>Ship small.</strong> Small changes, verified, beat big
            bets that break.
          </li>
          <li>
            <strong>Own the defaults.</strong> Sensible defaults, easy
            overrides, no magic.
          </li>
          <li>
            <strong>Access is not optional.</strong> Accessibility is part of
            done, not a follow-up.
          </li>
        </Ul>
      </Section>
    </>
  )
}
