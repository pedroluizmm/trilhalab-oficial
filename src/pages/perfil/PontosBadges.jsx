"use client"

import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"
import { TrophyIcon, LockClosedIcon, StarIcon, ChartBarIcon, FireIcon } from "@heroicons/react/24/outline"

export default function PontosBadges() {
  const navigate = useNavigate()

  const badges = [
    {
      id: 1,
      title: "Conquistador de Desafios",
      date: "05/05/2025",
      unlocked: true,
      icon: <TrophyIcon className="w-8 h-8 text-yellow-500" />,
      description: "Completou 5 desafios com sucesso",
      progresso: 100,
    },
    {
      id: 2,
      title: "Gênio da Lógica",
      date: "---",
      unlocked: false,
      icon: <LockClosedIcon className="w-8 h-8 text-gray-400" />,
      description: "Complete 3 desafios de algoritmos avançados",
      progresso: 33,
    },
    {
      id: 3,
      title: "Mestre da Comunicação",
      date: "28/04/2025",
      unlocked: true,
      icon: <StarIcon className="w-8 h-8 text-yellow-500" />,
      description: "Participou de 3 workshops de comunicação",
      progresso: 100,
    },
    {
      id: 4,
      title: "Líder Nato",
      date: "---",
      unlocked: false,
      icon: <LockClosedIcon className="w-8 h-8 text-gray-400" />,
      description: "Lidere um grupo de estudo por 1 mês",
      progresso: 0,
    },
    {
      id: 5,
      title: "Especialista em Python",
      date: "---",
      unlocked: false,
      icon: <LockClosedIcon className="w-8 h-8 text-gray-400" />,
      description: "Complete 5 desafios de Python",
      progresso: 60,
    },
    {
      id: 6,
      title: "Networker",
      date: "10/03/2025",
      unlocked: true,
      icon: <StarIcon className="w-8 h-8 text-yellow-500" />,
      description: "Participou de 10 eventos",
      progresso: 100,
    },
  ]

  const historicoPontos = [
    { data: "15/05/2025", atividade: "Desafio concluído: Análise de Dados", pontos: 50 },
    { data: "10/05/2025", atividade: "Participação em evento: Workshop de Python", pontos: 100 },
    { data: "28/04/2025", atividade: "Badge conquistado: Mestre da Comunicação", pontos: 200 },
    { data: "20/04/2025", atividade: "Submissão de solução aprovada", pontos: 75 },
    { data: "15/04/2025", atividade: "Participação em grupo de estudo", pontos: 30 },
  ]

  // Calcular total de pontos
  const totalPontos = historicoPontos.reduce((total, item) => total + item.pontos, 0)

  // Níveis
  const niveis = [
    { nivel: 1, nome: "Iniciante", pontos: 0, concluido: true },
    { nivel: 2, nome: "Aprendiz", pontos: 300, concluido: true },
    { nivel: 3, nome: "Especialista", pontos: 600, concluido: false },
    { nivel: 4, nome: "Mestre", pontos: 1000, concluido: false },
    { nivel: 5, nome: "Guru", pontos: 2000, concluido: false },
  ]

  // Encontrar o nível atual e o próximo
  const nivelAtual = niveis.filter((n) => n.pontos <= totalPontos).pop()
  const proximoNivel = niveis.find((n) => n.pontos > totalPontos)
  const progresso = proximoNivel
    ? ((totalPontos - nivelAtual.pontos) / (proximoNivel.pontos - nivelAtual.pontos)) * 100
    : 100

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
          <button
            className="flex-1 min-w-[120px] text-center py-3 text-gray-600 hover:text-gray-800"
            onClick={() => navigate("/perfil/integracoes")}
          >
            Integrações
          </button>
          <button className="flex-1 min-w-[120px] text-center py-3 border-b-2 border-primary text-primary font-medium">
            Pontos & Badges
          </button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Sistema de Pontos e Badges</h1>
          <p className="text-gray-600">Acompanhe seu progresso e conquistas</p>
        </div>

        {/* Nível e Progresso */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-white">{nivelAtual.nivel}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{nivelAtual.nome}</h2>
                <p className="text-gray-600">Nível atual</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-3xl font-bold text-primary mb-1">{totalPontos} pts</div>
              {proximoNivel && (
                <p className="text-gray-600">
                  Faltam <span className="font-semibold">{proximoNivel.pontos - totalPontos}</span> pontos para o próximo
                  nível
                </p>
              )}
            </div>
          </div>

          {proximoNivel && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progresso para {proximoNivel.nome}</span>
                <span className="text-sm font-medium text-gray-700">{Math.round(progresso)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progresso}%` }}
                />
              </div>
            </div>
          )}
        </Card>

        {/* Badges Grid */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <TrophyIcon className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Minhas Conquistas</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {badges.map((badge) => (
              <Card
                key={badge.id}
                className={`p-4 ${!badge.unlocked ? "opacity-70" : ""}`}
              >
                <div className="flex items-center mb-3">
                  <div className="mr-3">{badge.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{badge.title}</h3>
                    <p className="text-xs text-gray-500">{badge.date}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                {!badge.unlocked && (
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Progresso</span>
                      <span className="text-xs text-gray-500">{badge.progresso}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${badge.progresso}%` }}
                      />
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Histórico de Pontos */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <ChartBarIcon className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Histórico de Pontos</h2>
          </div>

          <Card className="p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Atividade
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pontos
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {historicoPontos.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.data}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{item.atividade}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">
                        +{item.pontos}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td colSpan="2" className="px-6 py-4 text-sm font-medium text-gray-800">
                      Total
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-primary">
                      {totalPontos} pts
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>
        </div>

        {/* Próximas Conquistas */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <FireIcon className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Próximas Conquistas</h2>
          </div>

          <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <StarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Especialista em Python</h3>
                <p className="text-sm text-gray-600">Complete mais 2 desafios de Python</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">Progresso</span>
              <span className="text-sm text-gray-600">60%</span>
            </div>
            <div className="w-full bg-white rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }} />
            </div>
          </Card>
        </div>

        <div className="flex justify-center">
          <ButtonSecondary onClick={() => navigate("/dashboard/gamificacao")}>
            Ver Gamificação Completa
          </ButtonSecondary>
        </div>
      </div>
    </div>
  )
}
