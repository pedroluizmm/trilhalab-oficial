"use client"

import { useNavigate, useLocation } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const showBack = !["/login", "/cadastro", "/recuperar-senha"].includes(pathname)

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm flex items-center justify-center z-20 border-b border-gray-200">
      {showBack && (
        <button
          onClick={() => navigate("/dashboard/tendencias")}
          className="absolute left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeftIcon className="w-6 h-6 text-primary" />
        </button>
      )}
      <h1 className="text-2xl font-bold text-primary">TrilhaLab</h1>
    </header>
  )
}
