"use client"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import TextInput from "../../components/TextInput"
import ButtonSecondary from "../../components/ButtonSecondary"
import ButtonPrimary from "../../components/ButtonPrimary"
import Card from "../../components/Card"
import {
  UsersIcon,
  PaperAirplaneIcon,
  UserPlusIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline"

export default function GrupoDetalhe() {
  const { grupoId } = useParams()
  const navigate = useNavigate()
  const [mensagem, setMensagem] = useState("")

  // Dados simulados do grupo
  const grupos = {
    1: {
      id: 1,
      nome: "Data Science Club",
      descricao: "Grupo focado em análise de dados e machine learning",
      categoria: "Tecnologia",
      membros: [
        { id: 1, nome: "Ana Silva", cargo: "Líder", avatar: "AS" },
        { id: 2, nome: "Carlos Mendes", cargo: "Membro", avatar: "CM" },
        { id: 3, nome: "Juliana Costa", cargo: "Membro", avatar: "JC" },
      ],
      mensagens: [
        { id: 1, usuario: "Ana Silva", avatar: "AS", texto: "Olá pessoal! Bem-vindos ao grupo!", hora: "10:30" },
        {
          id: 2,
          usuario: "Carlos Mendes",
          avatar: "CM",
          texto: "Estou animado para discutir projetos de data science!",
          hora: "10:35",
        },
      ],
      eventos: [
        { id: 101, titulo: "Workshop de Python", data: "15 Jul 2025" },
        { id: 102, titulo: "Hackathon de Data Science", data: "20 Ago 2025" },
      ],
    },
    2: {
      id: 2,
      nome: "UX & Design",
      descricao: "Discussões sobre design de experiência do usuário",
      categoria: "Design",
      membros: [
        { id: 4, nome: "Pedro Alves", cargo: "Líder", avatar: "PA" },
        { id: 5, nome: "Marina Souza", cargo: "Membro", avatar: "MS" },
      ],
      mensagens: [
        {
          id: 3,
          usuario: "Pedro Alves",
          avatar: "PA",
          texto: "Vamos compartilhar referências de design?",
          hora: "14:20",
        },
      ],
      eventos: [{ id: 103, titulo: "Workshop de Figma", data: "10 Jul 2025" }],
    },
  }

  const grupo = grupos[grupoId] || {
    id: grupoId,
    nome: `Grupo ${grupoId}`,
    descricao: "Descrição do grupo",
    categoria: "Geral",
    membros: [
      { id: 1, nome: "Usuário 1", cargo: "Líder", avatar: "U1" },
      { id: 2, nome: "Usuário 2", cargo: "Membro", avatar: "U2" },
    ],
    mensagens: [],
    eventos: [],
  }

  const handleEnviarMensagem = () => {
    if (!mensagem.trim()) return

    // Em uma aplicação real, aqui enviaria a mensagem para o backend
    alert("Mensagem enviada: " + mensagem)
    setMensagem("")
  }

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
            {grupo.categoria}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{grupo.nome}</h1>
        <p className="text-gray-600">{grupo.descricao}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Chat Area */}
        <div className="md:col-span-2">
          <Card className="p-0 flex flex-col h-[500px]">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary mr-2" />
                <h2 className="text-lg font-bold text-gray-800">Chat do Grupo</h2>
              </div>
              <span className="text-sm text-gray-500">{grupo.membros.length} membros</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {grupo.mensagens.length > 0 ? (
                grupo.mensagens.map((msg) => (
                  <div key={msg.id} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">
                      {msg.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="font-medium text-gray-800 mr-2">{msg.usuario}</span>
                        <span className="text-xs text-gray-500">{msg.hora}</span>
                      </div>
                      <p className="text-gray-700 bg-white p-3 rounded-lg shadow-sm">{msg.texto}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-500 text-center">Nenhuma mensagem disponível</p>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <TextInput
                  placeholder="Digite sua mensagem..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="flex-1 rounded-r-none"
                />
                <button
                  onClick={handleEnviarMensagem}
                  className="bg-primary hover:bg-blue-700 text-white px-4 rounded-r-lg flex items-center justify-center"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Members */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Membros</h2>
              <button className="text-primary hover:text-blue-700">
                <UserPlusIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {grupo.membros.map((membro) => (
                <div key={membro.id} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                    {membro.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{membro.nome}</p>
                    <p className="text-xs text-gray-500">{membro.cargo}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <ButtonSecondary className="w-full flex items-center justify-center">
                <UsersIcon className="w-4 h-4 mr-2" />
                Ver Todos
              </ButtonSecondary>
            </div>
          </Card>

          {/* Upcoming Events */}
          {grupo.eventos.length > 0 && (
            <Card className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Próximos Eventos</h2>

              <div className="space-y-3">
                {grupo.eventos.map((evento) => (
                  <div key={evento.id} className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mr-3">
                      <CalendarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{evento.titulo}</p>
                      <p className="text-xs text-gray-500">{evento.data}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <ButtonSecondary className="w-full">Ver Todos</ButtonSecondary>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <ButtonSecondary onClick={() => navigate("/dashboard/grupos")}>Voltar aos Grupos</ButtonSecondary>
        <ButtonPrimary onClick={() => alert("Compartilhar grupo")}>Compartilhar Grupo</ButtonPrimary>
      </div>
    </div>
  )
}
