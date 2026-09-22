import { cn } from "cn"

function H4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="h4"
      className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

export { H4 }
