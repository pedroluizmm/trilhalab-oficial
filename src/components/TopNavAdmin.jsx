import { NavLink } from "react-router-dom"
import { 
  UsersIcon, 
  UserGroupIcon, 
  CalendarIcon, 
  PuzzlePieceIcon, 
  DocumentTextIcon 
} from "@heroicons/react/24/outline"

export default function TopNavAdmin() {
  return (
    <nav className="fixed top-16 left-0 right-0 h-14 bg-white shadow-sm z-10 border-b border-gray-200">
      <div className="grid grid-cols-5 h-full">
        <NavLink
          to="/admin/usuarios"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${
              isActive
                ? "bg-primary-light text-primary border-b-2 border-primary"
                : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <UsersIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Usuários</span>
        </NavLink>
        <NavLink
          to="/admin/grupos"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${
              isActive
                ? "bg-primary-light text-primary border-b-2 border-primary"
                : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <UserGroupIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Grupos</span>
        </NavLink>
        <NavLink
          to="/admin/eventos"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${
              isActive
                ? "bg-primary-light text-primary border-b-2 border-primary"
                : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <CalendarIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Eventos</span>
        </NavLink>
        <NavLink
          to="/admin/desafios"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${
              isActive
                ? "bg-primary-light text-primary border-b-2 border-primary"
                : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <PuzzlePieceIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Desafios</span>
        </NavLink>
        <NavLink
          to="/admin/logs"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${
              isActive
                ? "bg-primary-light text-primary border-b-2 border-primary"
                : "text-gray-600 hover:text-primary hover:bg-gray-50"
            }`
          }
        >
          <DocumentTextIcon className="w-5 h-5" />
          <span className="text-xs font-medium">Logs</span>
        </NavLink>
      </div>
    </nav>
  )
}
