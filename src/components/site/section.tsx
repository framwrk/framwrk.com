import { cn } from "cn"

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("mx-auto w-full max-w-3xl px-4 py-12", className)}
      {...props}
    />
  )
}

export { Section }
