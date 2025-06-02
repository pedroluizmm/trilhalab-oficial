"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import TextInput from "../../components/TextInput"
import TextArea from "../../components/TextArea"
import Select from "../../components/Select"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"
import { UserIcon, CameraIcon, DocumentIcon } from "@heroicons/react/24/outline"

export default function DadosPessoais() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nomeCompleto: "João da Silva",
    matricula: "2023001234",
    email: "joao.silva@email.com",
    telefone: "(11) 98765-4321",
    curso: "Engenharia de Software",
    semestre: "3º",
    endereco: "Rua Exemplo, 123\nBairro Centro\nCidade - Estado\nCEP: 12345-678",
    curriculo: null,
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        curriculo: e.target.files[0],
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de envio
    setTimeout(() => {
      setIsLoading(false)
      alert("Alterações salvas com sucesso!")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16 pb-16 px-4 max-w-4xl mx-auto">
        {/* Abas Horizontais */}
        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
          <button className="flex-1 min-w-[120px] text-center py-3 border-b-2 border-primary text-primary font-medium">
            Dados Pessoais
          </button>
          <button
            className="flex-1 min-w-[120px] text-center py-3 text-gray-600 hover:text-gray-800"
            onClick={() => navigate("/perfil/certificados")}
          >
            Certificados
          </button>
          <button
            className="flex-1 min-w-[120px] text-center py-3 text-gray-600 hover:text-gray-800"
            onClick={() => navigate("/perfil/integracoes")}
          >
            Integrações
          </button>
          <button
            className="flex-1 min-w-[120px] text-center py-3 text-gray-600 hover:text-gray-800"
            onClick={() => navigate("/perfil/pontos-badges")}
          >
            Pontos & Badges
          </button>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Meu Perfil</h1>

        <Card className="p-6 mb-8">
          <form onSubmit={handleSubmit}>
            {/* Foto de Perfil */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-4">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <UserIcon className="w-16 h-16 text-gray-400" />
                </div>
                <button
                  type="button"
                  className="absolute bottom-0 right-0 bg-blue-700 text-white p-2 rounded-full shadow-md hover:bg-blue-800 transition-colors"
                >
                  <CameraIcon className="w-5 h-5" />
                </button>
              </div>
              <ButtonSecondary type="button">Upload de Foto</ButtonSecondary>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <TextInput id="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="matricula" className="block text-sm font-medium text-gray-700 mb-1">
                  Matrícula
                </label>
                <TextInput id="matricula" value={formData.matricula} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <TextInput id="email" type="email" value={formData.email} onChange={handleChange} disabled />
                <p className="text-xs text-gray-500 mt-1">O e-mail não pode ser alterado</p>
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <TextInput id="telefone" value={formData.telefone} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="curso" className="block text-sm font-medium text-gray-700 mb-1">
                  Curso
                </label>
                <TextInput id="curso" value={formData.curso} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="semestre" className="block text-sm font-medium text-gray-700 mb-1">
                  Semestre
                </label>
                <Select
                  id="semestre"
                  options={["1º", "2º", "3º", "4º", "5º", "6º", "7º", "8º", "9º", "10º"]}
                  value={formData.semestre}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-1">
                Endereço
              </label>
              <TextArea id="endereco" rows={3} value={formData.endereco} onChange={handleChange} />
            </div>

            <div className="mt-6">
              <label htmlFor="curriculo" className="block text-sm font-medium text-gray-700 mb-1">
                Upload de Currículo
              </label>
              <div className="flex items-center">
                <label
                  htmlFor="curriculo"
                  className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <DocumentIcon className="w-5 h-5 mr-2 text-gray-500" />
                  Escolher arquivo
                </label>
                <input
                  type="file"
                  id="curriculo"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <span className="ml-3 text-sm text-gray-500">
                  {formData.curriculo ? formData.curriculo.name : "Nenhum arquivo selecionado"}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)</p>
            </div>

            <div className="mt-8 flex justify-center">
              <ButtonPrimary type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Salvando...
                  </>
                ) : (
                  "Salvar Alterações"
                )}
              </ButtonPrimary>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
