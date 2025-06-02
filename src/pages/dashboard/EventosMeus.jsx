"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../components/Card"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import TextInput from "../../components/TextInput"
import {
  CalendarIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  CheckBadgeIcon,
  ClockIcon as PendingIcon,
} from "@heroicons/react/24/outline"

export default function EventosMeus() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const eventosMeus = [
    {
      id: 3,
      data: "18 Jun 2025",
      hora: "10:00",
      titulo: "Workshop de Python para Data Science",
      local: "Laboratório 3",
      status: "Confirmado",
      pontos: 120,
      certificado: true,
    },
    {
      id: 4,
      data: "25 Jun 2025",
      hora: "16:00",
      titulo: "Palestra sobre Inteligência Artificial",
      local: "Auditório Principal",
      status: "Pendente",
      pontos: 80,
      certificado: false,
    },
    {
      id: 5,
      data: "02 Jul 2025",
      hora: "14:30",
      titulo: "Curso de UX Design",
      local: "Sala 201",
      status: "Confirmado",
      pontos: 150,
      certificado: true,
    },
  ]

  const filteredEventos = eventosMeus.filter((evento) => evento.titulo.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Meus Eventos</h1>
        <p className="text-gray-600">Gerencie seus eventos e certificados</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <TextInput
          placeholder="Buscar meus eventos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">{eventosMeus.length}</div>
          <div className="text-gray-600">Total de Eventos</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {eventosMeus.filter((e) => e.status === "Confirmado").length}
          </div>
          <div className="text-gray-600">Presenças Confirmadas</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{eventosMeus.filter((e) => e.certificado).length}</div>
          <div className="text-gray-600">Certificados Disponíveis</div>
        </Card>
      </div>

      {/* Eventos List */}
      {filteredEventos.length > 0 ? (
        <div className="space-y-6 mb-8">
          {filteredEventos.map((evt) => (
            <Card key={evt.id} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">
                      {evt.data}
                    </div>
                    <span className="text-gray-600 text-sm">{evt.hora}</span>
                    <span
                      className={`ml-3 px-2 py-1 rounded-full text-xs font-medium flex items-center ${evt.status === "Confirmado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {evt.status === "Confirmado" ? (
                        <>
                          <CheckBadgeIcon className="w-4 h-4 mr-1" />
                          Confirmado
                        </>
                      ) : (
                        <>
                          <PendingIcon className="w-4 h-4 mr-1" />
                          Pendente
                        </>
                      )}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{evt.titulo}</h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {evt.local}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {evt.pontos} pontos
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  {evt.status === "Confirmado" ? (
                    <>
                      {evt.certificado && (
                        <ButtonPrimary onClick={() => navigate("/perfil/certificados")}>Ver Certificado</ButtonPrimary>
                      )}
                    </>
                  ) : (
                    <ButtonPrimary onClick={() => navigate(`/dashboard/eventos/meus/${evt.id}/checkin`)}>
                      Check-in
                    </ButtonPrimary>
                  )}
                  <ButtonSecondary onClick={() => navigate(`/dashboard/eventos/${evt.id}`)}>
                    Ver Detalhes
                  </ButtonSecondary>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">Nenhum evento encontrado</h3>
          <p className="text-gray-500 mb-6">
            Você ainda não se inscreveu em nenhum evento ou sua busca não retornou resultados
          </p>
          <ButtonPrimary onClick={() => navigate("/dashboard/eventos")}>Descobrir Eventos</ButtonPrimary>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between">
        <ButtonSecondary onClick={() => navigate("/dashboard/eventos")}>Voltar aos Eventos</ButtonSecondary>
        <ButtonPrimary onClick={() => navigate("/dashboard/eventos")}>Descobrir Novos Eventos</ButtonPrimary>
      </div>
    </div>
  )
}
