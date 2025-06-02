"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextInput from "../components/TextInput"
import ButtonPrimary from "../components/ButtonPrimary"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    matricula: "",
    senha: "",
    lembrarMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular validação
    setTimeout(() => {
      if (formData.matricula && formData.senha) {
        navigate("/dashboard/tendencias")
      } else {
        alert("Por favor, preencha todos os campos")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">TrilhaLab</h1>
          <p className="text-gray-600">Sua jornada de aprendizado começa aqui</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Entrar</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="matricula" className="block text-sm font-semibold text-gray-700 mb-2">
                Matrícula
              </label>
              <TextInput
                id="matricula"
                placeholder="Digite sua matrícula"
                value={formData.matricula}
                onChange={(e) => setFormData({ ...formData, matricula: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-semibold text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <TextInput
                  id="senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.lembrarMe}
                  onChange={(e) => setFormData({ ...formData, lembrarMe: e.target.checked })}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-600">Lembrar-me</span>
              </label>
              <button
                type="button"
                onClick={() => navigate("/recuperar-senha")}
                className="text-sm text-primary hover:text-blue-700 font-medium"
              >
                Esqueci minha senha
              </button>
            </div>

            <ButtonPrimary type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </ButtonPrimary>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Não tem uma conta?{" "}
              <button onClick={() => navigate("/cadastro")} className="text-primary hover:text-blue-700 font-semibold">
                Cadastre-se
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
