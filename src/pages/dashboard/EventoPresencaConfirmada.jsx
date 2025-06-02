"use client"

import { useNavigate, useParams } from "react-router-dom"
import { CheckCircleIcon, DocumentTextIcon, TrophyIcon } from "@heroicons/react/24/outline"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"

export default function EventoPresencaConfirmada() {
  const { eventoId } = useParams()
  const navigate = useNavigate()

  // Dados simulados do evento
  const evento = {
    id: eventoId,
    titulo: `Evento ${eventoId}`,
    data: "25 Jun 2025",
    hora: "16:00",
    local: "Auditório Principal",
    pontos: 100,
  }

  return (
    <div className="px-6 py-6 max-w-md mx-auto text-center">
      {/* Header */}
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircleIcon className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Presença Confirmada!</h1>
        <p className="text-gray-600">Sua presença no evento foi registrada com sucesso.</p>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{evento.titulo}</h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Data e Hora</p>
            <p className="font-medium text-gray-800">
              {evento.data} às {evento.hora}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Local</p>
            <p className="font-medium text-gray-800">{evento.local}</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <TrophyIcon className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-blue-800">Recompensa</h3>
          </div>
          <p className="text-blue-700">
            Você ganhou <span className="font-bold">{evento.pontos} pontos</span> por participar deste evento!
          </p>
        </div>

        <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg mb-6">
          <DocumentTextIcon className="w-6 h-6 text-gray-600 mr-2" />
          <p className="text-gray-700">Seu certificado estará disponível em até 48 horas após o término do evento.</p>
        </div>

        <div className="space-y-3">
          <ButtonPrimary onClick={() => navigate("/perfil/certificados")} className="w-full">
            Ver Meus Certificados
          </ButtonPrimary>
          <ButtonSecondary onClick={() => navigate("/dashboard/eventos")} className="w-full">
            Voltar aos Eventos
          </ButtonSecondary>
        </div>
      </Card>
    </div>
  )
}
