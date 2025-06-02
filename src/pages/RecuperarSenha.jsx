"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextInput from "../components/TextInput"
import ButtonPrimary from "../components/ButtonPrimary"
import ButtonSecondary from "../components/ButtonSecondary"
import { CheckCircleIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

export default function RecuperarSenha() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      alert("Por favor, digite seu e-mail")
      return
    }

    setIsLoading(true)

    // Simular envio de e-mail
    setTimeout(() => {
      setEmailSent(true)
      setIsLoading(false)
    }, 2000)
  }

  if (emailSent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">E-mail Enviado!</h2>
            <p className="text-gray-600 mb-6">
              Enviamos as instruções para recuperação de senha para <strong>{email}</strong>. Verifique sua caixa de
              entrada e spam.
            </p>
            <div className="space-y-3">
              <ButtonPrimary onClick={() => navigate("/login")} className="w-full">
                Voltar ao Login
              </ButtonPrimary>
              <ButtonSecondary onClick={() => setEmailSent(false)} className="w-full">
                Enviar Novamente
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">TrilhaLab</h1>
          <p className="text-gray-600">Recupere o acesso à sua conta</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-6">
            <EnvelopeIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Recuperar Senha</h2>
            <p className="text-gray-600">Digite seu e-mail e enviaremos as instruções para redefinir sua senha</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <TextInput
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <ButtonPrimary type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Instruções"}
            </ButtonPrimary>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Lembrou da senha?{" "}
              <button onClick={() => navigate("/login")} className="text-primary hover:text-blue-700 font-semibold">
                Voltar ao Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
