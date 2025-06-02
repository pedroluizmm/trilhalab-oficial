"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextInput from "../../components/TextInput"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"
import { PencilIcon, TrashIcon, MagnifyingGlassIcon, PlusIcon, EyeIcon } from "@heroicons/react/24/outline"

export default function UsuariosAdmin() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const usuarios = [
    {
      id: 1,
      nome: "Maria Silva",
      email: "maria@exemplo.com",
      perfil: "Administrador",
      status: "Ativo",
      ultimoAcesso: "Hoje, 10:30",
    },
    {
      id: 2,
      nome: "João Souza",
      email: "joao@exemplo.com",
      perfil: "Usuário",
      status: "Ativo",
      ultimoAcesso: "Ontem, 15:45",
    },
    {
      id: 3,
      nome: "Ana Oliveira",
      email: "ana@exemplo.com",
      perfil: "Mentor",
      status: "Ativo",
      ultimoAcesso: "15/05/2025",
    },
    {
      id: 4,
      nome: "Carlos Santos",
      email: "carlos@exemplo.com",
      perfil: "Usuário",
      status: "Inativo",
      ultimoAcesso: "10/04/2025",
    },
    {
      id: 5,
      nome: "Juliana Costa",
      email: "juliana@exemplo.com",
      perfil: "Mentor",
      status: "Ativo",
      ultimoAcesso: "Hoje, 09:15",
    },
  ]

  const filteredUsuarios = usuarios.filter(
    (user) =>
      user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.perfil.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (id) => {
    alert(`Editar usuário ${id}`)
  }

  const handleDelete = (id) => {
    if (confirm(`Tem certeza que deseja excluir o usuário ${id}?`)) {
      alert(`Usuário ${id} excluído com sucesso`)
    }
  }

  const handleView = (id) => {
    alert(`Ver detalhes do usuário ${id}`)
  }

  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Gerenciamento de Usuários</h1>
        <p className="text-gray-600">Administre os usuários da plataforma</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">{usuarios.length}</div>
          <div className="text-gray-600 text-sm">Total de Usuários</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {usuarios.filter((u) => u.status === "Ativo").length}
          </div>
          <div className="text-gray-600 text-sm">Usuários Ativos</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {usuarios.filter((u) => u.perfil === "Mentor").length}
          </div>
          <div className="text-gray-600 text-sm">Mentores</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {usuarios.filter((u) => u.perfil === "Administrador").length}
          </div>
          <div className="text-gray-600 text-sm">Administradores</div>
        </Card>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <TextInput
            placeholder="Buscar usuários..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <ButtonPrimary onClick={() => alert("Criar Novo Usuário")} className="flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Criar Novo Usuário
        </ButtonPrimary>
      </div>

      {/* Users Table */}
      <Card className="mb-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nome
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  E-mail
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tipo de Perfil
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
                  Último Acesso
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
              {filteredUsuarios.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{user.nome}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${user.perfil === "Administrador"
                          ? "bg-yellow-100 text-yellow-800"
                          : user.perfil === "Mentor"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {user.perfil}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${user.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.ultimoAcesso}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleView(user.id)}
                        className="text-gray-600 hover:text-primary"
                        title="Ver detalhes"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="text-gray-600 hover:text-blue-600"
                        title="Editar"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
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
          Mostrando <span className="font-medium">{filteredUsuarios.length}</span> de{" "}
          <span className="font-medium">{usuarios.length}</span> usuários
        </div>
        <div className="flex space-x-2">
          <ButtonSecondary disabled>Anterior</ButtonSecondary>
          <ButtonSecondary>Próximo</ButtonSecondary>
        </div>
      </div>
    </div>
  )
}
