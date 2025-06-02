"use client"

import { useNavigate, useParams } from "react-router-dom"
import { CheckIcon, ClockIcon, UserGroupIcon, TagIcon, TrophyIcon } from "@heroicons/react/24/outline"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"

export default function DesafioDetalhe() {
  const { desafioId } = useParams()
  const navigate = useNavigate()

  // Dados simulados baseados no desafioId
  const desafios = {
    1: {
      id: 1,
      titulo: "Análise de Dados de Vendas",
      descricao:
        "Neste desafio, você irá trabalhar com um conjunto de dados reais de vendas de uma empresa de e-commerce. Seu objetivo é analisar os dados, identificar padrões, tendências e insights que possam ajudar a empresa a tomar decisões estratégicas.",
      categoria: "Data Science",
      nivel: "Intermediário",
      prazo: "20 Ago 2025",
      participantes: 28,
      pontos: 150,
      requisitos: [
        "Carregar e limpar o dataset fornecido",
        "Realizar análise exploratória dos dados",
        "Identificar os produtos mais vendidos e períodos de pico",
        "Criar visualizações relevantes",
        "Gerar um relatório com recomendações",
      ],
      skills: ["Python", "Pandas", "Matplotlib", "Análise de Dados"],
      mentor: "Ana Silva",
      submissoes: 12,
    },
    2: {
      id: 2,
      titulo: "Dashboard de Visão Geral",
      descricao:
        "Desenvolva um dashboard interativo que apresente métricas importantes de negócio de forma clara e intuitiva. O dashboard deve permitir filtragem e drill-down para análises mais detalhadas.",
      categoria: "Front-end",
      nivel: "Avançado",
      prazo: "25 Ago 2025",
      participantes: 15,
      pontos: 200,
      requisitos: [
        "Criar interface responsiva e intuitiva",
        "Implementar gráficos interativos",
        "Permitir filtragem de dados",
        "Garantir performance mesmo com grandes volumes de dados",
        "Documentar o código e decisões de design",
      ],
      skills: ["React", "D3.js", "JavaScript", "UI/UX"],
      mentor: "Carlos Mendes",
      submissoes: 8,
    },
  }

  const desafio = desafios[desafioId] || {
    id: desafioId,
    titulo: `Desafio ${desafioId}`,
    descricao:
      "Parágrafo de texto explicando o objetivo do desafio. Descrição completa do que se espera do usuário neste desafio fictício.",
    categoria: "Tecnologia",
    nivel: "Intermediário",
    prazo: "30 Ago 2025",
    participantes: 20,
    pontos: 100,
    requisitos: ["Carregar CSV", "Limpar dados", "Gerar relatório"],
    skills: ["Análise de Dados", "Programação"],
    mentor: "João Silva",
    submissoes: 10,
  }

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
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getNivelColor(desafio.nivel)}`}>
            {desafio.nivel}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {desafio.categoria}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{desafio.titulo}</h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 mr-1 text-gray-500" />
            Prazo: {desafio.prazo}
          </div>
          <div className="flex items-center">
            <UserGroupIcon className="w-5 h-5 mr-1 text-gray-500" />
            {desafio.participantes} participantes
          </div>
          <div className="flex items-center">
            <TrophyIcon className="w-5 h-5 mr-1 text-gray-500" />
            {desafio.pontos} pontos
          </div>
        </div>
      </div>

      {/* Descrição */}
      <Card className="p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Descrição do Desafio</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">{desafio.descricao}</p>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">Requisitos</h3>
        <div className="space-y-3 mb-6">
          {desafio.requisitos.map((req, idx) => (
            <div key={idx} className="flex items-start">
              <CheckIcon className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{req}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills Relacionadas</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {desafio.skills.map((skill, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <TagIcon className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-blue-800">Informações Adicionais</h3>
          </div>
          <p className="text-blue-700 mb-2">Mentor: {desafio.mentor}</p>
          <p className="text-blue-700">Submissões até o momento: {desafio.submissoes}</p>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <ButtonSecondary onClick={() => navigate("/dashboard/desafios")}>Voltar aos Desafios</ButtonSecondary>
        <ButtonPrimary onClick={() => navigate(`/dashboard/desafios/${desafioId}/submissao`)}>
          Submeter Solução
        </ButtonPrimary>
      </div>
    </div>
  )
}
