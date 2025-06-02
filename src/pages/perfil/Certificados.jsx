"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import ButtonSecondary from "../../components/ButtonSecondary"
import ButtonPrimary from "../../components/ButtonPrimary"
import Card from "../../components/Card"
import TextInput from "../../components/TextInput"
import {
  DocumentTextIcon,
  ArrowDownTrayIcon,
  TrashIcon,
  ShareIcon,
  MagnifyingGlassIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline"

export default function Certificados() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const certificados = [
    {
      id: 1,
      titulo: "Workshop de Oratória",
      data: "20 Jul 2025",
      emissor: "Departamento de Comunicação",
      cargaHoraria: "8 horas",
      status: "Emitido",
    },
    {
      id: 2,
      titulo: "Curso de Liderança",
      data: "15 Jun 2025",
      emissor: "Centro de Desenvolvimento Profissional",
      cargaHoraria: "20 horas",
      status: "Emitido",
    },
    {
      id: 3,
      titulo: "Workshop de Python para Data Science",
      data: "18 Jun 2025",
      emissor: "Departamento de Tecnologia",
      cargaHoraria: "12 horas",
      status: "Emitido",
    },
    {
      id: 4,
      titulo: "Palestra sobre Inteligência Artificial",
      data: "25 Jun 2025",
      emissor: "Departamento de Tecnologia",
      cargaHoraria: "4 horas",
      status: "Pendente",
    },
  ]

  const filteredCertificados = certificados.filter((cert) =>
    cert.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDownload = (id) => {
    alert(`Download do certificado ${id} iniciado`)
  }

  const handleDelete = (id) => {
    if (confirm(`Tem certeza que deseja excluir o certificado ${id}?`)) {
      alert(`Certificado ${id} excluído com sucesso`)
    }
  }

  const handleShare = (id) => {
    alert(`Link para compartilhamento do certificado ${id} copiado para a área de transferência`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16 pb-16 px-4 max-w-4xl mx-auto">
        {/* Abas Horizontais */}
        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
          <button
            className="flex-1 min-w-[120px] text-center py-3 text-gray-600 hover:text-gray-800"
            onClick={() => navigate("/perfil/dados-pessoais")}
          >
            Dados Pessoais
          </button>
          <button className="flex-1 min-w-[120px] text-center py-3 border-b-2 border-primary text-primary font-medium">
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

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Meus Certificados</h1>
          <p className="text-gray-600">Gerencie seus certificados e comprovantes de participação</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">{certificados.length}</div>
            <div className="text-gray-600 text-sm">Total de Certificados</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {certificados.filter((c) => c.status === "Emitido").length}
            </div>
            <div className="text-gray-600 text-sm">Certificados Emitidos</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-1">
              {certificados.filter((c) => c.status === "Pendente").length}
            </div>
            <div className="text-gray-600 text-sm">Certificados Pendentes</div>
          </Card>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <TextInput
            placeholder="Buscar certificados..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Certificados List */}
        {filteredCertificados.length > 0 ? (
          <div className="space-y-4 mb-8">
            {filteredCertificados.map((cert) => (
              <Card key={cert.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <DocumentTextIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h3 className="text-lg font-bold text-gray-800 mr-2">{cert.titulo}</h3>
                        {cert.status === "Emitido" ? (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                            <CheckBadgeIcon className="w-3 h-3 mr-1" />
                            Emitido
                          </span>
                        ) : (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pendente</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        Emissor: <span className="font-medium">{cert.emissor}</span>
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-3">Data: {cert.data}</span>
                        <span>Carga Horária: {cert.cargaHoraria}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {cert.status === "Emitido" && (
                      <>
                        <button
                          onClick={() => handleDownload(cert.id)}
                          className="p-2 text-gray-600 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"
                          title="Download"
                        >
                          < ArrowDownTrayIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleShare(cert.id)}
                          className="p-2 text-gray-600 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"
                          title="Compartilhar"
                        >
                          <ShareIcon className="w-5 h-5" />
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleDelete(cert.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Excluir"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <DocumentTextIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Nenhum certificado encontrado</h3>
            <p className="text-gray-500 mb-6">Não encontramos certificados com os critérios de busca informados</p>
            <ButtonPrimary onClick={() => setSearchTerm("")}>Limpar Busca</ButtonPrimary>
          </div>
        )}

        {/* Upload Section */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center mb-4">
            <DocumentTextIcon className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Adicionar Certificado Externo</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Você pode adicionar certificados obtidos em outras plataformas ou instituições para manter seu histórico
            completo.
          </p>
          <ButtonPrimary onClick={() => alert("Funcionalidade de upload de certificados externos")}>
            Fazer Upload de Certificado
          </ButtonPrimary>
        </Card>

        <div className="flex justify-center">
          <ButtonSecondary onClick={() => navigate("/dashboard/eventos")}>Ver Próximos Eventos</ButtonSecondary>
        </div>
      </div>
    </div>
  )
}
