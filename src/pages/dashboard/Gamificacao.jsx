"use client"

import { useNavigate } from "react-router-dom"
import { TrophyIcon, StarIcon, FireIcon, ChartBarIcon, LightBulbIcon, CalendarIcon } from "@heroicons/react/24/outline"
import ButtonSecondary from "../../components/ButtonSecondary"
import ButtonPrimary from "../../components/ButtonPrimary"
import Card from "../../components/Card"

export default function Gamificacao() {
  const navigate = useNavigate()

  const badges = [
    {
      id: 1,
      title: "Conquistador de Desafios",
      date: "05/05/2025",
      unlocked: true,
      icon: <TrophyIcon className="w-8 h-8 text-yellow-500" />,
      description: "Completou 5 desafios com sucesso",
    },
    {
      id: 2,
      title: "Gênio da Lógica",
      date: "---",
      unlocked: false,
      icon: <LightBulbIcon className="w-8 h-8 text-gray-400" />,
      description: "Complete 3 desafios de algoritmos avançados",
    },
    {
      id: 3,
      title: "Mestre da Comunicação",
      date: "28/04/2025",
      unlocked: true,
      icon: <StarIcon className="w-8 h-8 text-yellow-500" />,
      description: "Participou de 3 workshops de comunicação",
    },
    {
      id: 4,
      title: "Líder Nato",
      date: "---",
      unlocked: false,
      icon: <StarIcon className="w-8 h-8 text-gray-400" />,
      description: "Lidere um grupo de estudo por 1 mês",
    },
  ]

  const ranking = [
    { nome: "Alice", pontos: 980, avatar: "AS" },
    { nome: "Bob", pontos: 920, avatar: "BS" },
    { nome: "Charlie", pontos: 880, avatar: "CS" },
    { nome: "Você", pontos: 820, avatar: "YS", isUser: true },
    { nome: "Diana", pontos: 780, avatar: "DS" },
  ]

  const niveis = [
    { nivel: 1, nome: "Iniciante", pontos: 0, concluido: true },
    { nivel: 2, nome: "Aprendiz", pontos: 500, concluido: true },
    { nivel: 3, nome: "Especialista", pontos: 1000, concluido: false },
    { nivel: 4, nome: "Mestre", pontos: 2000, concluido: false },
    { nivel: 5, nome: "Guru", pontos: 5000, concluido: false },
  ]

  // Encontrar o nível atual e o próximo
  const pontosAtuais = 820
  const nivelAtual = niveis.filter((n) => n.pontos <= pontosAtuais).pop()
  const proximoNivel = niveis.find((n) => n.pontos > pontosAtuais)
  const progresso = proximoNivel
    ? ((pontosAtuais - nivelAtual.pontos) / (proximoNivel.pontos - nivelAtual.pontos)) * 100
    : 100

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Gamificação</h1>
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
            <div className="text-3xl font-bold text-primary mb-1">{pontosAtuais} pts</div>
            {proximoNivel && (
              <p className="text-gray-600">
                Faltam <span className="font-semibold">{proximoNivel.pontos - pontosAtuais}</span> pontos para o próximo
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
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <TrophyIcon className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-xl font-boldold text-gray-800">Minhas Conquistas</h2>
          </div>
          <ButtonSecondary onClick={() => navigate("/perfil/pontos-badges")}>Ver Todas</ButtonSecondary>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <Card
              key={badge.id}
              className={`p-4 flex flex-col items-center text-center ${!badge.unlocked ? "opacity-60" : ""}`}
            >
              <div className="mb-3">{badge.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-1">{badge.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{badge.date}</p>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Ranking */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Card className="p-6">
            <div className="flex items-center mb-6">
              <ChartBarIcon className="w-6 h-6 text-primary mr-2" />
              <h2 className="text-xl font-bold text-gray-800">Ranking</h2>
            </div>

            <div className="space-y-4">
              {ranking.map((user, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-lg ${user.isUser ? "bg-blue-50 border border-blue-200" : "bg-gray-50"
                    }`}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 mr-3">
                      {idx + 1}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                      {user.avatar}
                    </div>
                    <span className={`font-medium ${user.isUser ? "text-primary" : "text-gray-800"}`}>{user.nome}</span>
                  </div>
                  <div className="font-bold text-lg">{user.pontos} pts</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <div className="flex items-center mb-6">
              <FireIcon className="w-6 h-6 text-primary mr-2" />
              <h2 className="text-xl font-bold text-gray-800">Atividades</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-green-100 text-green-800 flex items-center justify-center mr-3">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Desafio Concluído</p>
                    <p className="text-xs text-gray-500">Hoje, 10:30</p>
                  </div>
                </div>
                <span className="text-green-600 font-medium">+50 pts</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mr-3">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Evento Participado</p>
                    <p className="text-xs text-gray-500">Ontem, 14:00</p>
                  </div>
                </div>
                <span className="text-green-600 font-medium">+100 pts</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center mr-3">
                    <TrophyIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Badge Conquistado</p>
                    <p className="text-xs text-gray-500">28/04/2025</p>
                  </div>
                </div>
                <span className="text-green-600 font-medium">+200 pts</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <ButtonSecondary onClick={() => navigate("/dashboard/tendencias")}>Voltar ao Dashboard</ButtonSecondary>
        <ButtonPrimary onClick={() => navigate("/dashboard/desafios")}>Explorar Desafios</ButtonPrimary>
      </div>
    </div>
  )
}

// Componente auxiliar para o ícone de check
function CheckIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
