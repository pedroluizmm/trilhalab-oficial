"use client"

import { useNavigate, useParams } from "react-router-dom"
import Card from "../../components/Card"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import { ArrowTrendingUpIcon, CalendarIcon, BookOpenIcon, AcademicCapIcon, ChartBarIcon } from "@heroicons/react/24/outline"

export default function SkillDetalhe() {
  const { skillId } = useParams()
  const navigate = useNavigate()

  // Dados simulados baseados no skillId
  const skillData = {
    python: {
      name: "Python",
      trend: "+15%",
      color: "bg-green-100 text-green-800",
      description:
        "Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.",
      eventos: [
        { id: 101, data: "10 Ago", hora: "16:00", titulo: "Bootcamp de Python", participantes: 32 },
        { id: 102, data: "15 Ago", hora: "09:00", titulo: "Workshop de Data Science com Python", participantes: 28 },
      ],
      desafios: [
        { id: 201, titulo: "Análise de Dados com Pandas", nivel: "Intermediário", prazo: "20 Ago" },
        { id: 202, titulo: "Automação com Python", nivel: "Básico", prazo: "25 Ago" },
      ],
      roadmap: [
        { etapa: 1, titulo: "Fundamentos de Python", progresso: 100 },
        { etapa: 2, titulo: "Estruturas de Dados e Algoritmos", progresso: 65 },
        { etapa: 3, titulo: "Frameworks e Bibliotecas", progresso: 30 },
      ],
    },
    "gestão-ágil": {
      name: "Gestão Ágil",
      trend: "+12%",
      color: "bg-blue-100 text-blue-800",
      description:
        "Gestão Ágil é uma abordagem iterativa que ajuda as equipes a entregar valor aos clientes mais rapidamente e com menos dores de cabeça.",
      eventos: [
        { id: 103, data: "12 Ago", hora: "14:00", titulo: "Workshop de Scrum", participantes: 25 },
        { id: 104, data: "18 Ago", hora: "10:00", titulo: "Certificação Agile", participantes: 20 },
      ],
      desafios: [
        { id: 203, titulo: "Implementação de Kanban", nivel: "Intermediário", prazo: "22 Ago" },
        { id: 204, titulo: "Planejamento de Sprint", nivel: "Avançado", prazo: "28 Ago" },
      ],
      roadmap: [
        { etapa: 1, titulo: "Fundamentos Ágeis", progresso: 100 },
        { etapa: 2, titulo: "Scrum e Kanban", progresso: 80 },
        { etapa: 3, titulo: "Liderança Ágil", progresso: 45 },
      ],
    },
    "ui-design": {
      name: "UI Design",
      trend: "+8%",
      color: "bg-purple-100 text-purple-800",
      description:
        "UI Design (User Interface Design) é o processo de criar interfaces em software ou dispositivos, com foco na aparência ou estilo.",
      eventos: [
        { id: 105, data: "14 Ago", hora: "15:00", titulo: "Workshop de Figma", participantes: 22 },
        { id: 106, data: "20 Ago", hora: "09:30", titulo: "Design Systems na Prática", participantes: 18 },
      ],
      desafios: [
        { id: 205, titulo: "Redesign de Interface", nivel: "Intermediário", prazo: "24 Ago" },
        { id: 206, titulo: "Prototipagem de App", nivel: "Básico", prazo: "30 Ago" },
      ],
      roadmap: [
        { etapa: 1, titulo: "Fundamentos de Design", progresso: 100 },
        { etapa: 2, titulo: "Ferramentas de UI", progresso: 70 },
        { etapa: 3, titulo: "Design Systems", progresso: 25 },
      ],
    },
  }

  // Normalizar o skillId para corresponder às chaves do objeto
  const normalizedSkillId = skillId.toLowerCase().replace(" ", "-")
  const skill = skillData[normalizedSkillId] || {
    name: skillId.charAt(0).toUpperCase() + skillId.slice(1),
    trend: "+10%",
    color: "bg-gray-100 text-gray-800",
    description: "Informações detalhadas sobre esta skill.",
    eventos: [
      { id: 1, data: "10 Ago", hora: "16:00", titulo: `Bootcamp de ${skillId}`, participantes: 30 },
      { id: 2, data: "15 Ago", hora: "09:00", titulo: `Seminário de ${skillId}`, participantes: 25 },
    ],
    desafios: [
      { id: 1, titulo: `Desafio de ${skillId} 1`, nivel: "Intermediário", prazo: "20 Ago" },
      { id: 2, titulo: `Desafio de ${skillId} 2`, nivel: "Básico", prazo: "25 Ago" },
    ],
    roadmap: [
      { etapa: 1, titulo: `Fundamentos de ${skillId}`, progresso: 100 },
      { etapa: 2, titulo: `${skillId} Intermediário`, progresso: 60 },
      { etapa: 3, titulo: `${skillId} Avançado`, progresso: 20 },
    ],
  }

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <h1 className="text-3xl font-bold text-gray-800 mr-3">{skill.name}</h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${skill.color}`}>{skill.trend}</span>
        </div>
        <p className="text-gray-600">{skill.description}</p>
      </div>

      {/* Gráfico de Tendência */}
      <Card className="p-6 mb-8">
        <div className="flex items-center mb-4">
          <ChartBarIcon className="w-6 h-6 text-primary mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Tendência de Mercado</h2>
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
          <div className="text-center">
            <p className="text-gray-500 mb-2">Gráfico de tendência para {skill.name}</p>
            <p className="text-sm text-gray-400">Dados dos últimos 12 meses</p>
          </div>
        </div>
      </Card>

      {/* Eventos Relacionados */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <CalendarIcon className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Eventos Relacionados</h2>
          </div>
          <ButtonSecondary onClick={() => navigate("/dashboard/eventos")}>Ver Todos</ButtonSecondary>
        </div>

        <div className="space-y-4">
          {skill.eventos.map((evt) => (
            <Card key={evt.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">
                      {evt.data}
                    </div>
                    <span className="text-gray-600 text-sm">{evt.hora}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{evt.titulo}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <AcademicCapIcon className="w-4 h-4 mr-1" />
                    {evt.participantes} interessados
                  </div>
                </div>
                <ButtonPrimary onClick={() => navigate("/dashboard/eventos")}>Inscrever-se</ButtonPrimary>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Desafios Relacionados */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <BookOpenIcon className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Desafios Relacionados</h2>
          </div>
          <ButtonSecondary onClick={() => navigate("/dashboard/desafios")}>Ver Todos</ButtonSecondary>
        </div>

        <div className="space-y-4">
          {skill.desafios.map((desafio) => (
            <Card key={desafio.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">{desafio.titulo}</h3>
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {desafio.nivel}
                    </span>
                    <span className="text-sm text-gray-600">Prazo: {desafio.prazo}</span>
                  </div>
                </div>
                <ButtonSecondary onClick={() => navigate(`/dashboard/desafios/${desafio.id}`)}>
                  Ver Detalhes
                </ButtonSecondary>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Meu Roadmap */}
      <section className="mb-8">
        <div className="flex items-center mb-6">
          <ArrowTrendingUpIcon className="w-6 h-6 text-primary mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Meu Roadmap</h2>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            {skill.roadmap.map((etapa) => (
              <div key={etapa.etapa}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">
                      {etapa.etapa}
                    </div>
                    <h3 className="font-semibold text-gray-800">{etapa.titulo}</h3>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{etapa.progresso}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{ width: `${etapa.progresso}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Actions */}
      <div className="flex justify-between">
        <ButtonSecondary onClick={() => navigate("/dashboard/tendencias")}>Voltar às Tendências</ButtonSecondary>
        <ButtonPrimary onClick={() => navigate("/dashboard/metas/definir")}>
          Definir Meta para {skill.name}
        </ButtonPrimary>
      </div>
    </div>
  )
}
