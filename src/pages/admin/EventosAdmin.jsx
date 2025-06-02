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
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  EyeIcon,
} from "@heroicons/react/24/outline"

export default function EventosAdmin() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const eventos = [
    {
      id: 1,
      data: "20 Jun 2025",
      hora: "14:00",
      nome: "Workshop de Oratória",
      local: "Auditório Principal",
      palestrante: "Dra. Maria Santos",
      vagas: 50,
      inscritos: 45,
      categoria: "Soft Skills",
      status: "Agendado",
    },
    {
      id: 2,
      data: "30 Jun 2025",
      hora: "10:00",
      nome: "Seminário de UX",
      local: "Sala 101",
      palestrante: "Carlos Mendes",
      vagas: 40,
      inscritos: 32,
      categoria: "Design",
      status: "Agendado",
    },
    {
      id: 3,
      data: "15 Mai 2025",
      hora: "15:30",
      nome: "Workshop de Python",
      local: "Laboratório 3",
      palestrante: "Ana Silva",
      vagas: 30,
      inscritos: 30,
      categoria: "Tecnologia",
      status: "Realizado",
    },
    {
      id: 4,
      data: "10 Jul 2025",
      hora: "09:00",
      nome: "Palestra sobre IA",
      local: "Auditório Principal",
      palestrante: "Dr. Pedro Alves",
      vagas: 100,
      inscritos: 65,
      categoria: "Tecnologia",
      status: "Agendado",
    },
    {
      id: 5,
      data: "05 Mai 2025",
      hora: "16:00",
      nome: "Curso de Liderança",
      local: "Sala 201",
      palestrante: "Juliana Costa",
      vagas: 25,
      inscritos: 25,
      categoria: "Gestão",
      status: "Realizado",
    },
  ]

  const filteredEventos = eventos.filter(
    (evento) =>
      evento.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.palestrante.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.local.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (id) => {
    alert(`Editar evento ${id}`)
  }

  const handleDelete = (id) => {
    if (confirm(`Tem certeza que deseja excluir o evento ${id}?`)) {
      alert(`Evento ${id} excluído com sucesso`)
    }
  }

  const handleView = (id) => {
    alert(`Ver detalhes do evento ${id}`)
  }

  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Gerenciamento de Eventos</h1>
        <p className="text-gray-600">Administre os eventos da plataforma</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">{eventos.length}</div>
          <div className="text-gray-600 text-sm">Total de Eventos</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {eventos.filter((e) => e.status === "Agendado").length}
          </div>
          <div className="text-gray-600 text-sm">Eventos Agendados</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {eventos.reduce((total, evento) => total + evento.inscritos, 0)}
          </div>
          <div className="text-gray-600 text-sm">Total de Inscritos</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">{new Set(eventos.map((e) => e.categoria)).size}</div>
          <div className="text-gray-600 text-sm">Categorias</div>
        </Card>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <TextInput
            placeholder="Buscar eventos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <ButtonPrimary onClick={() => alert("Criar Novo Evento")} className="flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Criar Novo Evento
        </ButtonPrimary>
      </div>

      {/* Events Table */}
      <Card className="mb-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data/Hora
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nome do Evento
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Local
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Palestrante
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Inscritos
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
              {filteredEventos.map((evento) => (
                <tr key={evento.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 text-gray-500 mr-2" />
                      <div>
                        <div className="font-medium text-gray-800">{evento.data}</div>
                        <div className="text-xs text-gray-500">{evento.hora}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800">{evento.nome}</div>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 mt-1 inline-block">
                      {evento.categoria}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {evento.local}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{evento.palestrante}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-gray-600">
                      <UserGroupIcon className="w-4 h-4 mr-1" />
                      {evento.inscritos}/{evento.vagas}
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-1.5 mt-1">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: `${(evento.inscritos / evento.vagas) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${evento.status === "Agendado" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {evento.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleView(evento.id)}
                        className="text-gray-600 hover:text-primary"
                        title="Ver detalhes"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleEdit(evento.id)}
                        className="text-gray-600 hover:text-blue-600"
                        title="Editar"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(evento.id)}
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
          Mostrando <span className="font-medium">{filteredEventos.length}</span> de{" "}
          <span className="font-medium">{eventos.length}</span> eventos
        </div>
        <div className="flex space-x-2">
          <ButtonSecondary disabled>Anterior</ButtonSecondary>
          <ButtonSecondary>Próximo</ButtonSecondary>
        </div>
      </div>
    </div>
  )
}
