"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../components/Card"
import TextInput from "../../components/TextInput"
import Select from "../../components/Select"
import ButtonSecondary from "../../components/ButtonSecondary"
import { MagnifyingGlassIcon, BookOpenIcon, TagIcon, ClockIcon } from "@heroicons/react/24/outline"

export default function Desafios() {
  const navigate = useNavigate()
  const [pagina, setPagina] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const desafios = [
    {
      id: 1,
      titulo: "Análise de Dados de Vendas",
      descricao: "Gerar insights a partir de um conjunto de dados de vendas usando Python e Pandas.",
      categoria: "Data Science",
      nivel: "Intermediário",
      prazo: "20 Ago 2025",
      participantes: 28,
    },
    {
      id: 2,
      titulo: "Dashboard de Visão Geral",
      descricao: "Criar dashboard interativo com métricas de negócio usando React e D3.js.",
      categoria: "Front-end",
      nivel: "Avançado",
      prazo: "25 Ago 2025",
      participantes: 15,
    },
    {
      id: 3,
      titulo: "Otimização de Algoritmo",
      descricao: "Melhorar a performance de um algoritmo de busca para grandes volumes de dados.",
      categoria: "Algoritmos",
      nivel: "Avançado",
      prazo: "30 Ago 2025",
      participantes: 12,
    },
    {
      id: 4,
      titulo: "Prototipagem de App",
      descricao: "Criar um protótipo de alta fidelidade para um aplicativo de gestão de tarefas.",
      categoria: "UX/UI",
      nivel: "Intermediário",
      prazo: "15 Set 2025",
      participantes: 24,
    },
  ]

  const categorias = ["Todas", "Data Science", "Front-end", "Back-end", "UX/UI", "Algoritmos", "DevOps"]

  const filteredDesafios = desafios.filter((desafio) => {
    const matchesSearch =
      desafio.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desafio.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todas" || desafio.categoria === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getNivelColor = (nivel) => {
    switch (nivel) {
      case "Básico":
        return "bg-green-100 text-green-800"
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800"
      case "Avançado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Desafios</h1>
        <p className="text-gray-600">Teste suas habilidades e aprenda com desafios práticos</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <TextInput
            placeholder="Buscar desafios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select
          options={categorias}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-48"
        />
      </div>

      {/* Desafios List */}
      {filteredDesafios.length > 0 ? (
        <div className="space-y-6 mb-8">
          {filteredDesafios.map((desafio) => (
            <Card key={desafio.id} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getNivelColor(desafio.nivel)}`}>
                      {desafio.nivel}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {desafio.categoria}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{desafio.titulo}</h3>
                  <p className="text-gray-600 mb-3">{desafio.descricao}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      Prazo: {desafio.prazo}
                    </div>
                    <div className="flex items-center">
                      <TagIcon className="w-4 h-4 mr-1" />
                      {desafio.participantes} participantes
                    </div>
                  </div>
                </div>

                <ButtonSecondary onClick={() => navigate(`/dashboard/desafios/${desafio.id}`)}>
                  Ver Detalhes
                </ButtonSecondary>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">Nenhum desafio encontrado</h3>
          <p className="text-gray-500">Tente ajustar seus filtros de busca</p>
        </div>
      )}

      {/* Pagination */}
      {filteredDesafios.length > 0 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            className={`px-4 py-2 rounded-md border ${pagina === 1
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            disabled={pagina === 1}
            onClick={() => setPagina(pagina - 1)}
          >
            Anterior
          </button>

          <button className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark">
            {pagina}
          </button>

          <button
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={() => setPagina(pagina + 1)}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  )
}
