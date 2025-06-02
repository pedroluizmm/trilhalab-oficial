import { NavLink } from "react-router-dom"
import { FireIcon, CalendarIcon, UsersIcon, ListBulletIcon, UserIcon } from "@heroicons/react/24/outline"

export default function TopNav() {
  return (
    <nav className="fixed top-16 left-0 right-0 h-14 bg-white shadow-sm z-10 border-b border-gray-200">
      <div className="grid grid-cols-5 h-full">
        <NavLink
          to="/dashboard/tendencias"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${isActive
              ? "bg-primary-light text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <FireIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Tendências</span>
        </NavLink>
        <NavLink
          to="/dashboard/eventos"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${isActive
              ? "bg-primary-light text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <CalendarIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Eventos</span>
        </NavLink>
        <NavLink
          to="/dashboard/grupos"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${isActive
              ? "bg-primary-light text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <UsersIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Grupos</span>
        </NavLink>
        <NavLink
          to="/dashboard/metas"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${isActive
              ? "bg-primary-light text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <ListBulletIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Metas</span>
        </NavLink>
        <NavLink
          to="/perfil/dados-pessoais"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${isActive
              ? "bg-primary-light text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <UserIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Perfil</span>
        </NavLink>
      </div>
    </nav>
  )
}
