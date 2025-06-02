"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextInput from "../../components/TextInput"
import TextArea from "../../components/TextArea"
import Select from "../../components/Select"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"
import { FlagIcon, CalendarIcon, CheckCircleIcon } from "@heroicons/react/24/outline"

export default function DefinirMeta() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    prazo: "",
    prioridade: "Média",
    categoria: "Educação",
    notificacoes: true,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.titulo || !formData.prazo) {
      alert("Por favor, preencha pelo menos o título e o prazo da meta.")
      return
    }

    setIsSubmitting(true)

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false)
      navigate("/dashboard/metas")
    }, 1500)
  }

  return (
    <div className="px-6 py-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Definir Nova Meta</h1>
        <p className="text-gray-600">Estabeleça objetivos claros para sua carreira</p>
      </div>

      <Card className="p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                Título da Meta
              </label>
              <TextInput
                id="titulo"
                placeholder="Ex: Aprender Python"
                value={formData.titulo}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição da Meta
              </label>
              <TextArea
                id="descricao"
                placeholder="Descreva sua meta em detalhes..."
                rows={4}
                value={formData.descricao}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="prazo" className="block text-sm font-medium text-gray-700 mb-1">
                  Prazo
                </label>
                <div className="relative">
                  <CalendarIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <TextInput id="prazo" type="date" value={formData.prazo} onChange={handleChange} className="pl-10" />
                </div>
              </div>

              <div>
                <label htmlFor="prioridade" className="block text-sm font-medium text-gray-700 mb-1">
                  Prioridade
                </label>
                <Select
                  id="prioridade"
                  options={["Alta", "Média", "Baixa"]}
                  value={formData.prioridade}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
                  Categoria
                </label>
                <Select
                  id="categoria"
                  options={["Educação", "Carreira", "Tecnologia", "Soft Skills", "Certificação"]}
                  value={formData.categoria}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center h-full pt-6">
                <input
                  type="checkbox"
                  id="notificacoes"
                  checked={formData.notificacoes}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="notificacoes" className="ml-2 text-gray-700">
                  Receber lembretes e notificações
                </label>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-800">Dicas para Metas Efetivas</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                <li>Defina metas específicas e mensuráveis</li>
                <li>Estabeleça prazos realistas</li>
                <li>Divida metas grandes em etapas menores</li>
                <li>Revise seu progresso regularmente</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <ButtonPrimary type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Salvando...
                </>
              ) : (
                <>
                  <FlagIcon className="w-5 h-5 mr-2" />
                  Salvar Meta
                </>
              )}
            </ButtonPrimary>
            <ButtonSecondary onClick={() => navigate("/dashboard/metas")} className="flex-1">
              Cancelar
            </ButtonSecondary>
          </div>
        </form>
      </Card>
    </div>
  )
}
