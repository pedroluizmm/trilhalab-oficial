import { Outlet, useNavigate } from "react-router-dom"
import Header from "../Header"
import TopNavAdmin from "../TopNavAdmin"

export default function AdminLayout() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <TopNavAdmin />
      <main className="flex-1 pt-30 pb-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
