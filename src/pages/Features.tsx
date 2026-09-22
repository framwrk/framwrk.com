import { H1, H2 } from "@/components/typography"
import { Section } from "@/components/site"

const capabilities = [
  {
    term: "Instant builds",
    description:
      "Native ESM dev server and production bundles optimized per route.",
  },
  {
    term: "Composable components",
    description:
      "Headless primitives you style your way, with no lock-in and no runtime bloat.",
  },
  {
    term: "Data routing",
    description:
      "Loaders and actions colocated with routes, with automatic revalidation.",
  },
  {
    term: "First-class TypeScript",
    description: "Strict types from entry file to edge, generated for every layer.",
  },
  {
    term: "Themeable design tokens",
    description: "Semantic CSS variables that adapt to light and dark modes automatically.",
  },
  {
    term: "Zero-config deploys",
    description: "Static output that runs on any host or edge runtime.",
  },
]

export default function Features() {
  return (
    <>
      <Section className="py-16">
        <H1>Features</H1>
        <p className="mt-4">
          Everything you need to build and ship a modern web app.
        </p>
      </Section>

      <Section>
        <H2>Core capabilities</H2>
        <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability.term}>
              <dt className="text-sm font-medium">{capability.term}</dt>
              <dd className="mt-1 text-sm">{capability.description}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
