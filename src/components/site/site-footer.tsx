import { Muted } from "@/components/typography"
import { Separator } from "@/components/ui/separator"
import { cn } from "cn"

function SiteFooter({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="site-footer"
      className={cn("px-4 py-6", className)}
      {...props}
    >
      <Separator className="mb-6" />
      <Muted className="block text-center">
        &copy; {new Date().getFullYear()} Framwrk. All rights reserved.
      </Muted>
    </footer>
  )
}

export { SiteFooter }
