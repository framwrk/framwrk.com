import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { H1, H2, Lead, Muted, P } from "@/components/typography"
import { Section } from "@/components/site"

const products = [
  {
    name: "Pallet",
    description:
      "SSH/SFTP macOS Application",
    href: "https://pallet.framwrk.com/",
    linkLabel: "Visit pallet.framwrk.com",
    meta: "macOS · Apache-2.0",
  },
  {
    name: "Tret",
    description:
      "A CLI tool that installs other CLI tools",
    href: "https://github.com/framwrk/tret",
    linkLabel: "View on GitHub",
    meta: "macOS · Apache-2.0",
  },
]

export default function Home() {
  return (
    <>
      <Section className="py-16">
        <H1>Framwrk</H1>
        <Lead className="mt-4 max-w-prose">
          Framwrk is a software company building small, focused tools that do
          one job well. Everything we ship is free and open source.
        </Lead>
      </Section>

      <Section>
        <H2>Our products</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <Card key={product.name}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
                <Muted className="mt-2 block text-xs">{product.meta}</Muted>
                <Button
                  className="mt-2 w-fit"
                  render={<a href={product.href} target="_blank" rel="noreferrer" />}
                >
                  {product.linkLabel}
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <H2>What we believe</H2>
        <P className="mt-4">Three principles behind everything we build.</P>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Software should respect you: no telemetry, no lock-in.</li>
          <li>Open source is the default, not a feature.</li>
          <li>Small tools, done well, beat bloated suites.</li>
        </ul>
      </Section>
    </>
  )
}
