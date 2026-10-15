import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { H1, H2, Lead, Muted, P } from "@/components/typography"
import { Section } from "@/components/site"
import { products } from "@/data/products.generated"

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
                <div className="mt-2 flex w-fit flex-wrap gap-2">
                  <Button
                    variant="outline"
                    render={<a href={product.repoUrl} target="_blank" rel="noreferrer" />}
                  >
                    View on GitHub
                  </Button>
                  {product.homepage && (
                    <Button
                      render={<a href={product.homepage} target="_blank" rel="noreferrer" />}
                    >
                      Visit {new URL(product.homepage).host}
                    </Button>
                  )}
                </div>
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
