import { NavLink } from "react-router-dom"
import { FireIcon, CalendarIcon, UsersIcon, ListBulletIcon, UserIcon } from "@heroicons/react/24/outline"

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white shadow-card z-10">
      <div className="grid grid-cols-5 h-full">
        <NavLink
          to="/dashboard/tendencias"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${isActive ? "bg-primary-light" : ""}`
          }
        >
          <FireIcon className="w-6 h-6 text-primary" />
          <span className="text-xs font-normal text-primary">Tendências</span>
        </NavLink>
        <NavLink
          to="/dashboard/eventos"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${isActive ? "bg-primary-light" : ""}`
          }
        >
          <CalendarIcon className="w-6 h-6 text-primary" />
          <span className="text-xs font-normal text-primary">Eventos</span>
        </NavLink>
        <NavLink
          to="/dashboard/grupos"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${isActive ? "bg-primary-light" : ""}`
          }
        >
          <UsersIcon className="w-6 h-6 text-primary" />
          <span className="text-xs font-normal text-primary">Grupos</span>
        </NavLink>
        <NavLink
          to="/dashboard/metas"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${isActive ? "bg-primary-light" : ""}`
          }
        >
          <ListBulletIcon className="w-6 h-6 text-primary" />
          <span className="text-xs font-normal text-primary">Metas</span>
        </NavLink>
        <NavLink
          to="/perfil/dados-pessoais"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${isActive ? "bg-primary-light" : ""}`
          }
        >
          <UserIcon className="w-6 h-6 text-primary" />
          <span className="text-xs font-normal text-primary">Perfil</span>
        </NavLink>
      </div>
    </nav>
  )
}
