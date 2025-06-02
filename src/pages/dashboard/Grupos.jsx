"use client"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Card from "../../components/Card"
import TextInput from "../../components/TextInput"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import { UsersIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline"

export default function Grupos() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const grupos = [
    {
      id: 1,
      nome: "Data Science Club",
      membros: 10,
      descricao: "Grupo focado em análise de dados e machine learning",
      categoria: "Tecnologia",
      ativo: true,
    },
    {
      id: 2,
      nome: "UX & Design",
      membros: 8,
      descricao: "Discussões sobre design de experiência do usuário",
      categoria: "Design",
      ativo: true,
    },
    {
      id: 3,
      nome: "Product Management",
      membros: 15,
      descricao: "Estratégias e metodologias de gestão de produtos",
      categoria: "Gestão",
      ativo: false,
    },
  ]

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Grupos de Estudo</h1>
        <p className="text-gray-600">Conecte-se com pessoas que compartilham seus interesses</p>
      </div>

      {/* Search and Create */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-7/8 text-gray-400" />
          <TextInput
            placeholder="Buscar grupos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <ButtonPrimary onClick={() => alert("Criar Novo Grupo (Modal)")}>
          <PlusIcon className="w-5 h-5 mr-2" />
          Criar Grupo
        </ButtonPrimary>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {grupos.map((grupo) => (
          <Card key={grupo.id} className="p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-primary-light p-3 rounded-lg mr-4">
                  <UsersIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{grupo.nome}</h3>
                  <p className="text-sm text-gray-600">{grupo.membros} membros</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${grupo.ativo ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                  }`}
              >
                {grupo.ativo ? "Ativo" : "Inativo"}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{grupo.descricao}</p>

            <div className="flex items-center justify-between">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {grupo.categoria}
              </span>
              <div className="flex space-x-2">
                <ButtonSecondary onClick={() => navigate(`/dashboard/grupos/${grupo.id}`)}>
                  Ver Detalhes
                </ButtonSecondary>
                <ButtonPrimary onClick={() => navigate(`/dashboard/grupos/${grupo.id}`)}>Entrar</ButtonPrimary>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center">
        <ButtonSecondary onClick={() => navigate("/dashboard/tendencias")}>Voltar ao Dashboard</ButtonSecondary>
      </div>
    </div>
  )
}
