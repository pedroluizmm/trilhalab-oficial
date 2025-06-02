"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextInput from "../../components/TextInput"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"
import { PencilIcon, TrashIcon, MagnifyingGlassIcon, PlusIcon, UsersIcon, EyeIcon } from "@heroicons/react/24/outline"

export default function GruposAdmin() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const grupos = [
    {
      id: 1,
      nome: "Data Science Club",
      membros: 10,
      categoria: "Tecnologia",
      lider: "Ana Silva",
      dataCriacao: "10/03/2025",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "UX & Design",
      membros: 8,
      categoria: "Design",
      lider: "Pedro Alves",
      dataCriacao: "15/03/2025",
      status: "Ativo",
    },
    {
      id: 3,
      nome: "Product Management",
      membros: 15,
      categoria: "Gestão",
      lider: "Carla Mendes",
      dataCriacao: "20/03/2025",
      status: "Ativo",
    },
    {
      id: 4,
      nome: "Mobile Development",
      membros: 12,
      categoria: "Tecnologia",
      lider: "Lucas Santos",
      dataCriacao: "25/03/2025",
      status: "Inativo",
    },
    {
      id: 5,
      nome: "Marketing Digital",
      membros: 9,
      categoria: "Marketing",
      lider: "Julia Costa",
      dataCriacao: "01/04/2025",
      status: "Ativo",
    },
  ]

  const filteredGrupos = grupos.filter(
    (grupo) =>
      grupo.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grupo.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grupo.lider.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (id) => {
    alert(`Editar grupo ${id}`)
  }

  const handleDelete = (id) => {
    if (confirm(`Tem certeza que deseja excluir o grupo ${id}?`)) {
      alert(`Grupo ${id} excluído com sucesso`)
    }
  }

  const handleView = (id) => {
    alert(`Ver detalhes do grupo ${id}`)
  }

  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Gerenciamento de Grupos</h1>
        <p className="text-gray-600">Administre os grupos de estudo da plataforma</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">{grupos.length}</div>
          <div className="text-gray-600 text-sm">Total de Grupos</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {grupos.filter((g) => g.status === "Ativo").length}
          </div>
          <div className="text-gray-600 text-sm">Grupos Ativos</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {grupos.reduce((total, grupo) => total + grupo.membros, 0)}
          </div>
          <div className="text-gray-600 text-sm">Total de Membros</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">{new Set(grupos.map((g) => g.categoria)).size}</div>
          <div className="text-gray-600 text-sm">Categorias</div>
        </Card>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <TextInput
            placeholder="Buscar grupos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <ButtonPrimary onClick={() => alert("Criar Novo Grupo")} className="flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Criar Novo Grupo
        </ButtonPrimary>
      </div>

      {/* Groups Table */}
      <Card className="mb-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nome do Grupo
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
                  Líder
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Membros
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data de Criação
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
              {filteredGrupos.map((grupo) => (
                <tr key={grupo.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{grupo.nome}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">{grupo.categoria}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{grupo.lider}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-gray-600">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      {grupo.membros}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${grupo.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                    >
                      {grupo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{grupo.dataCriacao}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleView(grupo.id)}
                        className="text-gray-600 hover:text-primary"
                        title="Ver detalhes"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleEdit(grupo.id)}
                        className="text-gray-600 hover:text-blue-600"
                        title="Editar"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(grupo.id)}
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
          Mostrando <span className="font-medium">{filteredGrupos.length}</span> de{" "}
          <span className="font-medium">{grupos.length}</span> grupos
        </div>
        <div className="flex space-x-2">
          <ButtonSecondary disabled>Anterior</ButtonSecondary>
          <ButtonSecondary>Próximo</ButtonSecondary>
        </div>
      </div>
    </div>
  )
}
