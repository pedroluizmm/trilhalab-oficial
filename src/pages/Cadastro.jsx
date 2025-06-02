"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextInput from "../components/TextInput"
import ButtonPrimary from "../components/ButtonPrimary"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

export default function Cadastro() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    matricula: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    aceitarTermos: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nomeCompleto) newErrors.nomeCompleto = "Nome é obrigatório"
    if (!formData.matricula) newErrors.matricula = "Matrícula é obrigatória"
    if (!formData.email) newErrors.email = "E-mail é obrigatório"
    if (!formData.senha) newErrors.senha = "Senha é obrigatória"
    if (formData.senha !== formData.confirmarSenha) newErrors.confirmarSenha = "Senhas não coincidem"
    if (!formData.aceitarTermos) newErrors.aceitarTermos = "Você deve aceitar os termos"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simular cadastro
    setTimeout(() => {
      alert("Cadastro realizado com sucesso!")
      navigate("/login")
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">TrilhaLab</h1>
          <p className="text-gray-600">Crie sua conta e comece sua jornada</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Criar Conta</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nomeCompleto" className="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo
              </label>
              <TextInput
                id="nomeCompleto"
                placeholder="Digite seu nome completo"
                value={formData.nomeCompleto}
                onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                className={errors.nomeCompleto ? "border-red-500" : ""}
              />
              {errors.nomeCompleto && <p className="text-red-500 text-xs mt-1">{errors.nomeCompleto}</p>}
            </div>

            <div>
              <label htmlFor="matricula" className="block text-sm font-semibold text-gray-700 mb-2">
                Matrícula
              </label>
              <TextInput
                id="matricula"
                placeholder="Digite sua matrícula"
                value={formData.matricula}
                onChange={(e) => setFormData({ ...formData, matricula: e.target.value })}
                className={errors.matricula ? "border-red-500" : ""}
              />
              {errors.matricula && <p className="text-red-500 text-xs mt-1">{errors.matricula}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <TextInput
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                  className={errors.senha ? "border-red-500" : ""}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
              {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha}</p>}
            </div>

            <div>
              <label htmlFor="confirmarSenha" className="block text-sm font-semibold text-gray-700 mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <TextInput
                  id="confirmarSenha"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  value={formData.confirmarSenha}
                  onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                  className={errors.confirmarSenha ? "border-red-500" : ""}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmarSenha && <p className="text-red-500 text-xs mt-1">{errors.confirmarSenha}</p>}
            </div>

            <div>
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.aceitarTermos}
                  onChange={(e) => setFormData({ ...formData, aceitarTermos: e.target.checked })}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1"
                />
                <span className="text-sm text-gray-600">
                  Aceito os{" "}
                  <button type="button" className="text-primary hover:text-blue-700 font-medium">
                    Termos de Uso
                  </button>{" "}
                  e{" "}
                  <button type="button" className="text-primary hover:text-blue-700 font-medium">
                    Política de Privacidade
                  </button>
                </span>
              </label>
              {errors.aceitarTermos && <p className="text-red-500 text-xs mt-1">{errors.aceitarTermos}</p>}
            </div>

            <ButtonPrimary type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Criando conta..." : "Criar Conta"}
            </ButtonPrimary>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Já tem uma conta?{" "}
              <button onClick={() => navigate("/login")} className="text-primary hover:text-blue-700 font-semibold">
                Faça login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
