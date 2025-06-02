"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextInput from "../../components/TextInput"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"
import {
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ClockIcon,
  UserGroupIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline"

export default function DesafiosAdmin() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const desafios = [
    {
      id: 1,
      titulo: "Análise de Dados de Vendas",
      categoria: "Data Science",
      nivel: "Intermediário",
      prazo: "30/06/2025",
      participantes: 28,
      mentor: "Ana Silva",
      status: "Ativo",
      submissoes: 12,
    },
    {
      id: 2,
      titulo: "Dashboard Interativo",
      categoria: "Front-end",
      nivel: "Avançado",
      prazo: "15/07/2025",
      participantes: 15,
      mentor: "Carlos Mendes",
      status: "Ativo",
      submissoes: 8,
    },
    {
      id: 3,
      titulo: "API RESTful",
      categoria: "Back-end",
      nivel: "Intermediário",
      prazo: "20/07/2025",
      participantes: 22,
      mentor: "Pedro Alves",
      status: "Ativo",
      submissoes: 10,
    },
    {
      id: 4,
      titulo: "Otimização de Algoritmo",
      categoria: "Algoritmos",
      nivel: "Avançado",
      prazo: "10/05/2025",
      participantes: 12,
      mentor: "Juliana Costa",
      status: "Encerrado",
      submissoes: 9,
    },
    {
      id: 5,
      titulo: "Prototipagem de App",
      categoria: "UX/UI",
      nivel: "Básico",
      prazo: "25/08/2025",
      participantes: 18,
      mentor: "Marina Souza",
      status: "Ativo",
      submissoes: 5,
    },
  ]

  const filteredDesafios = desafios.filter(
    (desafio) =>
      desafio.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desafio.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desafio.mentor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (id) => {
    alert(`Editar desafio ${id}`)
  }

  const handleDelete = (id) => {
    if (confirm(`Tem certeza que deseja excluir o desafio ${id}?`)) {
      alert(`Desafio ${id} excluído com sucesso`)
    }
  }

  const handleView = (id) => {
    alert(`Ver detalhes do desafio ${id}`)
  }

  const getNivelColor = (nivel) => {
    switch (nivel) {
      case "Básico":
        return "bg-green-100 text-green-800"
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800"
      case "Avançado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Gerenciamento de Desafios</h1>
        <p className="text-gray-600">Administre os desafios da plataforma</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">{desafios.length}</div>
          <div className="text-gray-600 text-sm">Total de Desafios</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {desafios.filter((d) => d.status === "Ativo").length}
          </div>
          <div className="text-gray-600 text-sm">Desafios Ativos</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {desafios.reduce((total, desafio) => total + desafio.participantes, 0)}
          </div>
          <div className="text-gray-600 text-sm">Total de Participantes</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {desafios.reduce((total, desafio) => total + desafio.submissoes, 0)}
          </div>
          <div className="text-gray-600 text-sm">Total de Submissões</div>
        </Card>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <TextInput
            placeholder="Buscar desafios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <ButtonPrimary onClick={() => alert("Criar Novo Desafio")} className="flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Criar Novo Desafio
        </ButtonPrimary>
      </div>

      {/* Challenges Table */}
      <Card className="mb-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Título
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Categoria
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nível
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Mentor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Participantes
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data Limite
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDesafios.map((desafio) => (
                <tr key={desafio.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800">{desafio.titulo}</div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <DocumentTextIcon className="w-4 h-4 mr-1" />
                      {desafio.submissoes} submissões
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {desafio.categoria}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getNivelColor(desafio.nivel)}`}>
                      {desafio.nivel}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{desafio.mentor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-gray-600">
                      <UserGroupIcon className="w-4 h-4 mr-1" />
                      {desafio.participantes}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-gray-600">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {desafio.prazo}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${desafio.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {desafio.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleView(desafio.id)}
                        className="text-gray-600 hover:text-primary"
                        title="Ver detalhes"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleEdit(desafio.id)}
                        className="text-gray-600 hover:text-blue-600"
                        title="Editar"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(desafio.id)}
                        className="text-gray-600 hover:text-red-600"
                        title="Excluir"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Mostrando <span className="font-medium">{filteredDesafios.length}</span> de{" "}
          <span className="font-medium">{desafios.length}</span> desafios
        </div>
        <div className="flex space-x-2">
          <ButtonSecondary disabled>Anterior</ButtonSecondary>
          <ButtonSecondary>Próximo</ButtonSecondary>
        </div>
      </div>
    </div>
  )
}
