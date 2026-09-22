import { cn } from "cn"

function Large({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="large"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}

export { Large }
