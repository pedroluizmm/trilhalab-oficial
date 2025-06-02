"use client"

import { useNavigate, useParams } from "react-router-dom"
import Card from "../../components/Card"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  UserIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline"

export default function EventoDetalhe() {
  const { eventoId } = useParams()
  const navigate = useNavigate()

  // Dados simulados baseados no eventoId
  const eventos = {
    1: {
      id: 1,
      titulo: "Workshop de Oratória",
      data: "20 Jul 2025",
      hora: "14:00",
      local: "Auditório Principal",
      endereco: "Av. Principal, 1000 - Centro",
      descricao:
        "Aprenda técnicas avançadas de oratória e comunicação em público com especialistas da área. Este workshop prático irá ajudá-lo a superar o medo de falar em público e desenvolver habilidades essenciais para apresentações impactantes.",
      palestrante: "Dra. Maria Santos",
      cargo: "Especialista em Comunicação",
      vagas: 50,
      inscritos: 45,
      categoria: "Soft Skills",
      inscrito: false,
      pontos: 100,
      online: false,
      requisitos: ["Notebook (opcional)", "Material para anotações"],
    },
    2: {
      id: 2,
      titulo: "Curso de Liderança",
      data: "25 Jul 2025",
      hora: "10:00",
      local: "Sala 201",
      endereco: "Av. Principal, 1000 - Centro",
      descricao:
        "Desenvolva habilidades essenciais de liderança para gerenciar equipes de alto desempenho. Este curso aborda desde os fundamentos da liderança até técnicas avançadas de gestão de conflitos e motivação de equipes.",
      palestrante: "Dr. Carlos Oliveira",
      cargo: "Consultor de Liderança",
      vagas: 40,
      inscritos: 32,
      categoria: "Gestão",
      inscrito: true,
      pontos: 150,
      online: false,
      requisitos: ["Material para anotações", "Leitura prévia recomendada"],
    },
  }

  // Exemplo de mock: determinar se já está inscrito => usar eventoId par/ímpar
  const evento = eventos[eventoId] || {
    id: eventoId,
    titulo: `Evento ${eventoId}`,
    data: "30 Jul 2025",
    hora: "15:00",
    local: "Auditório",
    endereco: "Av. Principal, 1000 - Centro",
    descricao: `Descrição completa do evento "Evento ${eventoId}". Texto de exemplo para simular a apresentação de detalhes.`,
    palestrante: "João Silva",
    cargo: "Especialista",
    vagas: 60,
    inscritos: 45,
    categoria: "Tecnologia",
    inscrito: Number.parseInt(eventoId) % 2 === 0,
    pontos: 100,
    online: false,
    requisitos: ["Notebook", "Conhecimentos básicos"],
  }

  const handleInscrever = () => {
    alert("Inscrição confirmada com sucesso!")
    navigate("/dashboard/eventos")
  }

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
            {evento.categoria}
          </span>
          {evento.inscrito && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <CheckBadgeIcon className="w-4 h-4 mr-1" />
              Inscrito
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{evento.titulo}</h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 mr-1 text-gray-500" />
            {evento.data}
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 mr-1 text-gray-500" />
            {evento.hora}
          </div>
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5 mr-1 text-gray-500" />
            {evento.local}
          </div>
        </div>
      </div>

      {/* Detalhes do Evento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Sobre o Evento</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{evento.descricao}</p>

            {evento.requisitos.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">O que levar</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {evento.requisitos.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                <UserIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{evento.palestrante}</h3>
                <p className="text-gray-600 text-sm">{evento.cargo}</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Informações</h2>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Local</p>
                <p className="text-gray-800">{evento.local}</p>
                <p className="text-sm text-gray-600">{evento.endereco}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Data e Hora</p>
                <p className="text-gray-800">
                  {evento.data} às {evento.hora}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Vagas</p>
                <div className="flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-1 text-gray-500" />
                  <p className="text-gray-800">
                    {evento.inscritos}/{evento.vagas}
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(evento.inscritos / evento.vagas) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Pontos</p>
                <p className="text-gray-800">{evento.pontos} pontos</p>
              </div>
            </div>

            {evento.inscrito ? (
              <ButtonPrimary onClick={() => navigate(`/dashboard/eventos/meus/${eventoId}/checkin`)} className="w-full">
                Fazer Check-in
              </ButtonPrimary>
            ) : (
              <ButtonPrimary onClick={handleInscrever} className="w-full">
                Inscrever-se
              </ButtonPrimary>
            )}
          </Card>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <ButtonSecondary onClick={() => navigate("/dashboard/eventos")}>Voltar aos Eventos</ButtonSecondary>
        {evento.inscrito && (
          <ButtonSecondary onClick={() => navigate("/dashboard/eventos/meus")}>Meus Eventos</ButtonSecondary>
        )}
      </div>
    </div>
  )
}
