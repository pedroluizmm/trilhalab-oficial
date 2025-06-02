"use client"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import TextArea from "../../components/TextArea"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"
import {
  PaperClipIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline"

export default function DesafioSubmissao() {
  const { desafioId } = useParams()
  const navigate = useNavigate()
  const [solucao, setSolucao] = useState("")
  const [concordaTermos, setConcordaTermos] = useState(false)
  const [arquivos, setArquivos] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Simulação de feedback do mentor (normalmente viria do backend)
  const feedbackMentor = [
    "O código precisa de otimização na função de processamento de dados.",
    'Corrigir caso de erro "undefined" na linha 42.',
    "Excelente abordagem para visualização dos resultados!",
    "Considere adicionar mais comentários explicativos no código.",
  ]

  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setArquivos([...arquivos, ...newFiles])
    }
  }

  const removeFile = (index) => {
    const newFiles = [...arquivos]
    newFiles.splice(index, 1)
    setArquivos(newFiles)
  }

  const handleSubmit = () => {
    if (!solucao && arquivos.length === 0) {
      alert("Por favor, adicione uma solução ou arquivos antes de enviar.")
      return
    }

    if (!concordaTermos) {
      alert("Você precisa concordar com os termos de avaliação.")
      return
    }

    setIsSubmitting(true)

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  const handleConfirmFeedback = () => {
    navigate(`/dashboard/desafios/${desafioId}`)
  }

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Submissão de Solução</h1>
        <p className="text-gray-600">Desafio #{desafioId} - Envie sua solução para avaliação</p>
      </div>

      {submitted ? (
        <Card className="p-6 mb-8">
          <div className="flex items-center mb-6">
            <CheckCircleIcon className="w-10 h-10 text-green-500 mr-4" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">Solução Enviada com Sucesso!</h2>
              <p className="text-gray-600">Sua submissão foi recebida e está sendo avaliada.</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-800">Feedback do Mentor</h3>
            </div>
            <ul className="space-y-3">
              {feedbackMentor.map((cmt, idx) => (
                <li key={idx} className="flex items-start">
                  {idx < 2 ? (
                    <ExclamationCircleIcon className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  ) : (
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  )}
                  <span className="text-gray-700">{cmt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between">
            <ButtonSecondary onClick={() => navigate(`/dashboard/desafios/${desafioId}`)}>
              Voltar ao Desafio
            </ButtonSecondary>
            <ButtonPrimary onClick={handleConfirmFeedback}>Confirmar Feedback</ButtonPrimary>
          </div>
        </Card>
      ) : (
        <>
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Sua Solução</h2>

            <div className="mb-6">
              <label htmlFor="solucao" className="block text-sm font-medium text-gray-700 mb-2">
                Descrição da Solução
              </label>
              <TextArea
                id="solucao"
                placeholder="Descreva sua solução ou cole seu código aqui..."
                rows={8}
                value={solucao}
                onChange={(e) => setSolucao(e.target.value)}
                className="mb-2"
              />
              <p className="text-sm text-gray-500">
                Explique sua abordagem e como sua solução atende aos requisitos do desafio.
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Anexar Arquivos (opcional)</label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <PaperClipIcon className="w-10 h-10 text-gray-400 mb-3" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                    </p>
                    <p className="text-xs text-gray-500">ZIP, PDF, Python, JavaScript, etc. (máx. 10MB)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileChange} />
                </label>
              </div>

              {arquivos.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Arquivos Anexados:</p>
                  <ul className="space-y-2">
                    {arquivos.map((file, index) => (
                      <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                        <div className="flex items-center">
                          <PaperClipIcon className="w-5 h-5 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-700">{file.name}</span>
                        </div>
                        <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700 text-sm">
                          Remover
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="termos"
                checked={concordaTermos}
                onChange={(e) => setConcordaTermos(e.target.checked)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="termos" className="ml-2 text-gray-700">
                Concordo com os{" "}
                <button type="button" className="text-primary hover:text-blue-700 font-medium">
                  termos de avaliação
                </button>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary onClick={handleSubmit} disabled={isSubmitting} className="flex-1">
                {isSubmitting ? "Enviando..." : "Enviar Solução"}
              </ButtonPrimary>
              <ButtonSecondary onClick={() => navigate(`/dashboard/desafios/${desafioId}`)} className="flex-1">
                Cancelar
              </ButtonSecondary>
            </div>
          </Card>
        </>
      )}
    </div>
  )
}
