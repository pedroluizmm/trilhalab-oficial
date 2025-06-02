"use client"

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"
import { QrCodeIcon, ClockIcon } from "@heroicons/react/24/outline"

export default function EventoCheckin() {
  const { eventoId } = useParams()
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(30)
  const [isLoading, setIsLoading] = useState(false)

  // Dados simulados do evento
  const evento = {
    id: eventoId,
    titulo: `Evento ${eventoId}`,
    data: "25 Jun 2025",
    hora: "16:00",
    local: "Auditório Principal",
  }

  // Simulação de contagem regressiva para o QR Code
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleConfirmCheckin = () => {
    setIsLoading(true)

    // Simulação de processamento
    setTimeout(() => {
      navigate(`/dashboard/eventos/meus/${eventoId}/presenca-confirmada`)
    }, 1500)
  }

  const refreshQRCode = () => {
    setCountdown(30)
  }

  return (
    <div className="px-6 py-6 max-w-md mx-auto text-center">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Check-in</h1>
        <p className="text-gray-600">{evento.titulo}</p>
      </div>

      <Card className="p-6 mb-8">
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-1">Data e Hora</div>
          <p className="font-medium text-gray-800">
            {evento.data} às {evento.hora}
          </p>
        </div>

        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-1">Local</div>
          <p className="font-medium text-gray-800">{evento.local}</p>
        </div>

        {/* QR Code */}
        <div className="mb-6">
          <div className="w-64 h-64 bg-white mx-auto border-2 border-gray-200 rounded-lg flex items-center justify-center mb-4">
            <QrCodeIcon className="w-48 h-48 text-primary" />
          </div>

          <div className="flex items-center justify-center mb-2">
            <ClockIcon className="w-5 h-5 text-gray-500 mr-1" />
            <p className="text-gray-700">
              Expira em <span className="font-semibold">{countdown}</span> segundos
            </p>
          </div>

          <button
            onClick={refreshQRCode}
            className="text-primary hover:text-blue-700 text-sm font-medium"
            disabled={countdown > 25}
          >
            Gerar novo código
          </button>
        </div>

        <p className="text-gray-700 mb-6">Apresente este QR Code ao organizador do evento para validar sua presença.</p>

        <div className="space-y-3">
          <ButtonPrimary onClick={handleConfirmCheckin} className="w-full" disabled={isLoading}>
            {isLoading ? "Processando..." : "Confirmar Check-in"}
          </ButtonPrimary>

          <ButtonSecondary onClick={() => navigate("/dashboard/eventos/meus")} className="w-full" disabled={isLoading}>
            Voltar aos Meus Eventos
          </ButtonSecondary>
        </div>
      </Card>
    </div>
  )
}
