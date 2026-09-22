import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { H1, H2, Lead, P } from "@/components/typography"
import { Link } from "react-router"
import { Section } from "@/components/site"

const features = [
  {
    title: "Fast by default",
    description: "Zero-config builds and instant hot reloads out of the box.",
  },
  {
    title: "Accessible components",
    description: "Every primitive ships with keyboard support and ARIA semantics.",
  },
  {
    title: "Typed end to end",
    description: "Strict TypeScript across the whole stack, no exceptions.",
  },
]

export default function Home() {
  return (
    <>
      <Section className="py-16">
        <H1>Build with Framwrk</H1>
        <Lead className="mt-4 max-w-prose">
          Framwrk is a lightweight toolkit for shipping fast, accessible web
          applications. Write components, connect your data, and deploy in
          minutes.
        </Lead>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button render={<Link to="/features" />}>See the features</Button>
          <Button variant="outline" render={<Link to="/pricing" />}>
            View pricing
          </Button>
        </div>
      </Section>

      <Section>
        <H2>Why teams choose Framwrk</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <H2>Get started today</H2>
        <P className="mt-4">
          Join thousands of developers already building with Framwrk.
        </P>
        <Button className="mt-6" render={<Link to="/pricing" />}>
          Start for free
        </Button>
      </Section>
    </>
  )
}
