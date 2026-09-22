import { H1, H2 } from "@/components/typography"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Section } from "@/components/site"

const plans = [
  {
    name: "Hobby",
    price: "Free",
    includes: "1 project, community support, public repositories",
  },
  {
    name: "Pro",
    price: "$20 / month",
    includes: "Unlimited projects, priority support, analytics",
  },
  {
    name: "Team",
    price: "$60 / month",
    includes: "Everything in Pro, shared workspaces, role-based access",
  },
]

const faqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, upgrade or downgrade at any time and we prorate the difference.",
  },
  {
    question: "Is there a free trial?",
    answer: "The Hobby plan is free forever, no trial period or card required.",
  },
  {
    question: "Do you offer discounts?",
    answer: "Students and open-source maintainers get Pro at no cost.",
  },
]

export default function Pricing() {
  return (
    <>
      <Section className="py-16">
        <H1>Pricing</H1>
        <p className="mt-4">Simple plans that scale with your project.</p>
      </Section>

      <Section>
        <H2>Plans</H2>
        <Table className="mt-6">
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Plan</TableHead>
              <TableHead scope="col">Price</TableHead>
              <TableHead scope="col">Includes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plans.map((plan) => (
              <TableRow key={plan.name}>
                <TableHead scope="row">{plan.name}</TableHead>
                <TableCell>{plan.price}</TableCell>
                <TableCell className="whitespace-normal">
                  {plan.includes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>

      <Section>
        <H2>Frequently asked questions</H2>
        <dl className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-sm font-medium">{faq.question}</dt>
              <dd className="mt-1 text-sm">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
