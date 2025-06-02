"use client"

import { useNavigate } from "react-router-dom"
import Card from "../../components/Card"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import { PencilIcon, TrashIcon, PlusIcon, CalendarIcon, CheckCircleIcon } from "@heroicons/react/24/outline"

export default function Metas() {
  const navigate = useNavigate()

  const metas = [
    {
      id: 1,
      titulo: "Completar Curso X",
      progresso: 75,
      prazo: "10 Jul 2025",
      prioridade: "Alta",
      categoria: "Educação",
    },
    {
      id: 2,
      titulo: "Aprender React",
      progresso: 45,
      prazo: "15 Ago 2025",
      prioridade: "Média",
      categoria: "Tecnologia",
    },
    {
      id: 3,
      titulo: "Certificação AWS",
      progresso: 20,
      prazo: "30 Set 2025",
      prioridade: "Alta",
      categoria: "Cloud",
    },
  ]

  const getPriorityColor = (prioridade) => {
    switch (prioridade) {
      case "Alta":
        return "bg-red-100 text-red-800"
      case "Média":
        return "bg-yellow-100 text-yellow-800"
      case "Baixa":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getProgressColor = (progresso) => {
    if (progresso >= 75) return "bg-green-500"
    if (progresso >= 50) return "bg-yellow-500"
    return "bg-blue-500"
  }

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Metas de Carreira</h1>
          <p className="text-gray-600">Acompanhe seu progresso e alcance seus objetivos</p>
        </div>
        <ButtonPrimary onClick={() => navigate("/dashboard/metas/definir")}>
          <PlusIcon className="w-5 h-5 mr-2" />
          Nova Meta
        </ButtonPrimary>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">3</div>
          <div className="text-gray-600">Metas Ativas</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">47%</div>
          <div className="text-gray-600">Progresso Médio</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
          <div className="text-gray-600">Próximas ao Prazo</div>
        </Card>
      </div>

      {/* Goals List */}
      <div className="space-y-6">
        {metas.map((meta) => (
          <Card key={meta.id} className="p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800 mr-3">{meta.titulo}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(meta.prioridade)}`}>
                    {meta.prioridade}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                    {meta.categoria}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  Prazo: {meta.prazo}
                </div>

                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Progresso</span>
                    <span className="text-sm font-medium text-gray-700">{meta.progresso}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(meta.progresso)}`}
                      style={{ width: `${meta.progresso}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <PencilIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <TrashIcon className="w-5 h-5" />
                </button>
                {meta.progresso === 100 && <CheckCircleIcon className="w-6 h-6 text-green-500" />}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-center mt-8">
        <ButtonSecondary onClick={() => navigate("/dashboard/tendencias")}>Voltar ao Dashboard</ButtonSecondary>
      </div>
    </div>
  )
}
