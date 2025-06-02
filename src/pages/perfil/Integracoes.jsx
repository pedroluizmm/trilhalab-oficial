"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import ButtonSecondary from "../../components/ButtonSecondary"
import ButtonPrimary from "../../components/ButtonPrimary"
import Card from "../../components/Card"
import {
  LinkIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline"

export default function Integracoes() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const integracoes = [
    {
      id: "linkedin",
      nome: "LinkedIn",
      conectado: true,
      ultimaSincronizacao: "Hoje, 10:30",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      opcoes: [
        { id: "conexoes", label: "Sincronizar conexões", ativo: true },
        { id: "habilidades", label: "Importar habilidades", ativo: true },
        { id: "experiencias", label: "Importar experiências", ativo: false },
      ],
    },
    {
      id: "github",
      nome: "GitHub",
      conectado: true,
      ultimaSincronizacao: "Ontem, 15:45",
      icon: (
        <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      opcoes: [
        { id: "repositorios", label: "Sincronizar repositórios", ativo: true },
        { id: "contribuicoes", label: "Importar contribuições", ativo: true },
      ],
    },
    {
      id: "kaggle",
      nome: "Kaggle",
      conectado: false,
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.825 23.859c-.022.092-.097.15-.179.172-.082.021-.174 0-.229-.076l-6.345-7.636-3.35 3.477c-.051.054-.124.081-.199.081-.022 0-.045-.004-.067-.008-.1-.022-.179-.093-.199-.194v-16.562c0-.101.079-.172.18-.194.022-.004.045-.008.067-.008.075 0 .147.027.199.081l9.973 10.354c.071.072.09.181.048.274l-.015.031c-.043.094-.125.149-.225.149-.057 0-.111-.02-.156-.054l-7.889-6.764-.169.180 7.889 9.475c.055.067.071.158.045.241zm-18.645-12.688c-.014-.138.068-.268.198-.309.039-.013.078-.017.117-.017.1 0 .194.038.263.109l6.363 6.519 3.637-3.78c.06-.062.139-.096.221-.096.079 0 .158.034.217.096l8.381 8.599c.059.061.093.141.093.226 0 .001 0 .001 0 .002 0 .036-.007.071-.021.105-.035.086-.11.149-.196.168l-.083.014c-.075 0-.15-.029-.206-.084l-8.182-8.394-3.647 3.789c-.06.062-.139.096-.221.096-.079 0-.158-.034-.217-.096l-6.541-6.7c-.061-.062-.091-.143-.091-.225 0-.055.015-.109.046-.157l-.007-.008c.038-.069.098-.117.167-.137z" />
        </svg>
      ),
    },
  ]

  const handleToggleIntegracao = (id) => {
    setIsLoading(true)

    // Simulação de conexão/desconexão
    setTimeout(() => {
      setIsLoading(false)
      alert(`${id === "linkedin" || id === "github" ? "Desconectado de" : "Conectado com"} ${id}`)
    }, 1500)
  }

  const handleToggleOpcao = (integracaoId, opcaoId) => {
    // Em uma aplicação real, aqui atualizaria o estado
    alert(`Opção ${opcaoId} ${opcaoId === "experiencias" ? "ativada" : "desativada"} para ${integracaoId}`)
  }

  const handleSincronizar = (id) => {
    setIsLoading(true)

    // Simulação de sincronização
    setTimeout(() => {
      setIsLoading(false)
      alert(`Sincronização com ${id} concluída com sucesso!`)
    }, 2000)
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
          <button
            className="flex-1 min-w-[120px] text-center py-3 text-gray-600 hover:text-gray-800"
            onClick={() => navigate("/perfil/certificados")}
          >
            Certificados
          </button>
          <button className="flex-1 min-w-[120px] text-center py-3 border-b-2 border-primary text-primary font-medium">
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Integrações</h1>
          <p className="text-gray-600">Conecte suas contas para sincronizar dados e melhorar sua experiência</p>
        </div>

        <div className="space-y-6 mb-8">
          {integracoes.map((integracao) => (
            <Card key={integracao.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    {integracao.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{integracao.nome}</h2>
                    {integracao.conectado && (
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1" />
                        <span>Conectado • Última sincronização: {integracao.ultimaSincronizacao}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3">
                  {integracao.conectado ? (
                    <>
                      <ButtonSecondary
                        onClick={() => handleSincronizar(integracao.id)}
                        disabled={isLoading}
                        className="flex items-center"
                      >
                        <ArrowPathIcon className="w-5 h-5 mr-2" />
                        Sincronizar
                      </ButtonSecondary>
                      <ButtonSecondary onClick={() => handleToggleIntegracao(integracao.id)} disabled={isLoading}>
                        Desconectar
                      </ButtonSecondary>
                    </>
                  ) : (
                    <ButtonPrimary
                      onClick={() => handleToggleIntegracao(integracao.id)}
                      disabled={isLoading}
                      className="flex items-center"
                    >
                      <LinkIcon className="w-5 h-5 mr-2" />
                      Conectar
                    </ButtonPrimary>
                  )}
                </div>
              </div>

              {integracao.conectado && integracao.opcoes && (
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Opções de Sincronização</h3>
                  <div className="space-y-3">
                    {integracao.opcoes.map((opcao) => (
                      <div key={opcao.id} className="flex items-center justify-between">
                        <label htmlFor={`${integracao.id}-${opcao.id}`} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            id={`${integracao.id}-${opcao.id}`}
                            checked={opcao.ativo}
                            onChange={() => handleToggleOpcao(integracao.id, opcao.id)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="ml-2 text-gray-700">{opcao.label}</span>
                        </label>
                        {opcao.ativo ? (
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircleIcon className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Outras Integrações Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                <GlobeAltIcon className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">Plataformas de Cursos Online</h3>
                <p className="text-sm text-gray-600">Coursera, Udemy, edX</p>
              </div>
              <ButtonSecondary>Explorar</ButtonSecondary>
            </Card>

            <Card className="p-4 flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                <CodeBracketIcon className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">Plataformas de Código</h3>
                <p className="text-sm text-gray-600">GitLab, Bitbucket, Stack Overflow</p>
              </div>
              <ButtonSecondary>Explorar</ButtonSecondary>
            </Card>
          </div>
        </div>

        <div className="flex justify-center">
          <ButtonSecondary onClick={() => navigate("/perfil/dados-pessoais")}>Voltar ao Perfil</ButtonSecondary>
        </div>
      </div>
    </div>
  )
}
