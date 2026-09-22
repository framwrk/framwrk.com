import { cn } from "cn"

function Ol({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="ol"
      className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
      {...props}
    />
  )
}

export { Ol }
