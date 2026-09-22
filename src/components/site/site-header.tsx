import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { cn } from "cn"

const navItems = [
  { to: "/about", label: "About" },
]

function SiteHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="site-header"
      className={cn("flex items-center justify-between gap-4 px-4 py-3", className)}
      {...props}
    >
      <Link to="/" className="text-sm font-semibold">
        Framwrk
      </Link>
      <nav aria-label="Main">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <Button variant="ghost" render={<Link to={item.to} />}>
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export { SiteHeader }
