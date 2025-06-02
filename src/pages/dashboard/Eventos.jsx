"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../components/Card"
import TextInput from "../../components/TextInput"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import { MagnifyingGlassIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/outline"

export default function Eventos() {
  const navigate = useNavigate()
  const [abas, setAbas] = useState("descobrir")
  const [searchTerm, setSearchTerm] = useState("")

  const eventosDescobrir = [
    {
      id: 1,
      data: "10 Jul",
      hora: "14:00",
      titulo: "Workshop de Oratória",
      descricao: "Desenvolva suas habilidades de comunicação e apresentação",
      local: "Auditório Principal",
      participantes: 45,
      categoria: "Soft Skills",
    },
    {
      id: 2,
      data: "15 Jul",
      hora: "09:00",
      titulo: "Curso de Liderança",
      descricao: "Aprenda técnicas modernas de liderança e gestão de equipes",
      local: "Sala 201",
      participantes: 32,
      categoria: "Gestão",
    },
  ]

  const eventosMeus = [
    { id: 3, data: "18 Jun", hora: "10:00", titulo: "Evento X", status: "Confirmado" },
    { id: 4, data: "25 Jun", hora: "16:00", titulo: "Evento Y", status: "Pendente" },
  ]

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Eventos</h1>
        <p className="text-gray-600">Descubra e participe de eventos incríveis</p>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
        <button
          className={`flex-1 text-center py-3 px-4 rounded-md font-medium transition-all ${abas === "descobrir" ? "bg-white text-primary shadow-sm" : "text-gray-600 hover:text-gray-800"
            }`}
          onClick={() => setAbas("descobrir")}
        >
          Descobrir Eventos
        </button>
        <button
          className={`flex-1 text-center py-3 px-4 rounded-md font-medium transition-all ${abas === "meus" ? "bg-white text-primary shadow-sm" : "text-gray-600 hover:text-gray-800"
            }`}
          onClick={() => setAbas("meus")}
        >
          Meus Eventos
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <TextInput
          placeholder="Buscar eventos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Content */}
      {abas === "descobrir" ? (
        <div className="space-y-6">
          {eventosDescobrir.map((evt) => (
            <Card key={evt.id} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">
                      {evt.data}
                    </div>
                    <span className="text-gray-600 text-sm">{evt.hora}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium ml-3">
                      {evt.categoria}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{evt.titulo}</h3>
                  <p className="text-gray-600 mb-3">{evt.descricao}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {evt.local}
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      {evt.participantes} interessados
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <ButtonPrimary onClick={() => alert("Inscrição confirmada!")}>Inscrever-se</ButtonPrimary>
                  <ButtonSecondary onClick={() => navigate(`/dashboard/eventos/${evt.id}`)}>
                    Ver Detalhes
                  </ButtonSecondary>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {eventosMeus.map((evt) => (
            <Card key={evt.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">
                      {evt.data}
                    </div>
                    <span className="text-gray-600 text-sm">{evt.hora}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ml-3 ${evt.status === "Confirmado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {evt.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800">{evt.titulo}</h3>
                </div>
                <ButtonPrimary onClick={() => navigate(`/dashboard/eventos/meus/${evt.id}/checkin`)}>
                  Check-in
                </ButtonPrimary>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
