// src/pages/dashboard/Tendencias.jsx
"use client";

import { Link } from "react-router-dom";
import Card from "../../components/Card";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
// O ícone “TrendingUpIcon” não existe em 24/outline, trocamos para ArrowTrendingUpIcon
import { ArrowTrendingUpIcon, CalendarIcon, StarIcon }
  from "@heroicons/react/24/outline";

export default function Tendencias() {
  // Dados simulados de skills
  const skills = [
    { name: "Python", trend: "+15%", color: "bg-green-100 text-green-800" },
    { name: "Gestão Ágil", trend: "+12%", color: "bg-blue-100 text-blue-800" },
    { name: "UI Design", trend: "+8%", color: "bg-purple-100 text-purple-800" },
  ];

  // Próximos eventos (simulados)
  const proximosEventos = [
    { id: 1, data: "20 Jul", hora: "14:00", titulo: "Workshop de Oratória", participantes: 45 },
    { id: 2, data: "25 Jul", hora: "10:00", titulo: "Curso de Liderança", participantes: 32 },
  ];

  return (
    <div className="px-6 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tendências de Mercado</h1>
        <p className="text-gray-600">Descubra as habilidades mais procuradas e eventos em destaque</p>
      </div>

      {/* Skills em Alta */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <ArrowTrendingUpIcon className="w-6 h-6 text-primary mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Skills em Alta</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill) => {
            // Normaliza o nome para montar a URL: ex. "Python" → "python", "UI Design" → "ui-design"
            const slug = skill.name.toLowerCase().replace(/ /g, "-");
            return (
              <Link
                key={skill.name}
                to={`/dashboard/tendencias/${slug}`}
                className="block"
              >
                <Card
                  className="p-6 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${skill.color}`}
                    >
                      {skill.trend}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
                    Em alta esta semana
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <CalendarIcon className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Próximos Eventos</h2>
          </div>
          <ButtonSecondary onClick={() => window.location.href = "/dashboard/eventos"}>
            Ver Todos
          </ButtonSecondary>
        </div>

        <div className="space-y-4">
          {proximosEventos.map((evt) => (
            <Card key={evt.id} className="p-6">
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
                    <StarIcon className="w-4 h-4 mr-1" />
                    {evt.participantes} interessados
                  </div>
                </div>
                <ButtonPrimary onClick={() => window.location.href = "/dashboard/eventos"}>
                  Inscrever-se
                </ButtonPrimary>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Ações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ButtonPrimary
          onClick={() => window.location.href = "/dashboard/eventos"}
          className="w-full py-4"
        >
          Explorar Todos os Eventos
        </ButtonPrimary>
        <ButtonSecondary
          onClick={() => window.location.href = "/dashboard/gamificacao"}
          className="w-full py-4"
        >
          Ver Gamificação
        </ButtonSecondary>
      </div>
    </div>
  );
}
