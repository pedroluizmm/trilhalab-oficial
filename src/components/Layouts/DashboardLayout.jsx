import { Outlet } from "react-router-dom"
import Header from "../Header"
import TopNav from "../TopNav"

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <TopNav />
      <main className="flex-1 pt-30 pb-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
