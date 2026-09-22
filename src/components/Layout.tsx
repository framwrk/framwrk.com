import { SiteFooter, SiteHeader } from "@/components/site"
import { Outlet } from "react-router"

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
