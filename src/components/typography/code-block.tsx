import { cn } from "cn"

function CodeBlock({ className, ...props }: React.ComponentProps<"pre">) {
  return (
    <pre
      data-slot="code-block"
      className={cn(
        "mt-6 mb-6 overflow-x-auto rounded bg-muted p-4 font-mono text-sm",
        className
      )}
      {...props}
    />
  )
}

export { CodeBlock }
