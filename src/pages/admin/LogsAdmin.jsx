"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextInput from "../../components/TextInput"
import Select from "../../components/Select"
import ButtonPrimary from "../../components/ButtonPrimary"
import ButtonSecondary from "../../components/ButtonSecondary"
import Card from "../../components/Card"
import {
  EyeIcon,
  MagnifyingGlassIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  CheckCircleIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline"

export default function LogsAdmin() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [nivelFilter, setNivelFilter] = useState("Todos")
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")

  const logs = [
    {
      id: 1,
      dataHora: "2025-05-15 14:23:45",
      nivel: "Info",
      categoria: "Sistema",
      usuario: "admin@trilhalab.com",
      acao: "Login realizado com sucesso",
      ip: "192.168.1.100",
      detalhes: "Usuário admin realizou login no sistema",
    },
    {
      id: 2,
      dataHora: "2025-05-16 09:45:12",
      nivel: "Erro",
      categoria: "Banco de Dados",
      usuario: "sistema",
      acao: "Falha na conexão com banco de dados",
      ip: "localhost",
      detalhes: "Timeout na conexão com PostgreSQL após 30 segundos",
    },
    {
      id: 3,
      dataHora: "2025-05-16 10:15:33",
      nivel: "Aviso",
      categoria: "Autenticação",
      usuario: "joao@exemplo.com",
      acao: "Tentativa de login com senha incorreta",
      ip: "203.0.113.45",
      detalhes: "3ª tentativa de login falhada para o usuário joao@exemplo.com",
    },
    {
      id: 4,
      dataHora: "2025-05-16 11:30:22",
      nivel: "Info",
      categoria: "Eventos",
      usuario: "maria@exemplo.com",
      acao: "Inscrição em evento realizada",
      ip: "198.51.100.25",
      detalhes: "Usuário se inscreveu no evento 'Workshop de Python'",
    },
    {
      id: 5,
      dataHora: "2025-05-16 12:45:18",
      nivel: "Erro",
      categoria: "API",
      usuario: "sistema",
      acao: "Falha na integração externa",
      ip: "localhost",
      detalhes: "Erro 500 ao tentar sincronizar dados com API externa",
    },
    {
      id: 6,
      dataHora: "2025-05-16 13:20:55",
      nivel: "Sucesso",
      categoria: "Backup",
      usuario: "sistema",
      acao: "Backup automático concluído",
      ip: "localhost",
      detalhes: "Backup diário realizado com sucesso - 2.3GB",
    },
    {
      id: 7,
      dataHora: "2025-05-16 14:10:41",
      nivel: "Aviso",
      categoria: "Performance",
      usuario: "sistema",
      acao: "Alto uso de CPU detectado",
      ip: "localhost",
      detalhes: "CPU atingiu 85% de uso por mais de 5 minutos",
    },
    {
      id: 8,
      dataHora: "2025-05-16 15:05:29",
      nivel: "Info",
      categoria: "Usuários",
      usuario: "admin@trilhalab.com",
      acao: "Novo usuário criado",
      ip: "192.168.1.100",
      detalhes: "Usuário ana@exemplo.com foi criado pelo administrador",
    },
  ]

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.acao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.usuario.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.detalhes.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesNivel = nivelFilter === "Todos" || log.nivel === nivelFilter

    const matchesData = true // Implementar filtro de data se necessário

    return matchesSearch && matchesNivel && matchesData
  })

  const handleViewDetails = (id) => {
    const log = logs.find((l) => l.id === id)
    alert(`Detalhes do Log ${id}:\n\n${JSON.stringify(log, null, 2)}`)
  }

  const getLevelIcon = (nivel) => {
    switch (nivel) {
      case "Erro":
        return <XCircleIcon className="w-5 h-5 text-red-500" />
      case "Aviso":
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
      case "Info":
        return <InformationCircleIcon className="w-5 h-5 text-blue-500" />
      case "Sucesso":
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />
      default:
        return <InformationCircleIcon className="w-5 h-5 text-gray-500" />
    }
  }

  const getLevelColor = (nivel) => {
    switch (nivel) {
      case "Erro":
        return "bg-red-100 text-red-800"
      case "Aviso":
        return "bg-yellow-100 text-yellow-800"
      case "Info":
        return "bg-blue-100 text-blue-800"
      case "Sucesso":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Logs do Sistema</h1>
        <p className="text-gray-600">Monitore atividades e eventos do sistema</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">{logs.length}</div>
          <div className="text-gray-600 text-sm">Total de Logs</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-red-600 mb-1">{logs.filter((l) => l.nivel === "Erro").length}</div>
          <div className="text-gray-600 text-sm">Erros</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {logs.filter((l) => l.nivel === "Aviso").length}
          </div>
          <div className="text-gray-600 text-sm">Avisos</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {logs.filter((l) => l.nivel === "Sucesso").length}
          </div>
          <div className="text-gray-600 text-sm">Sucessos</div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Buscar</label>
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <TextInput
                placeholder="Buscar logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nível</label>
            <Select
              options={["Todos", "Info", "Aviso", "Erro", "Sucesso"]}
              value={nivelFilter}
              onChange={(e) => setNivelFilter(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data Início</label>
            <div className="relative">
              <CalendarIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <TextInput
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data Fim</label>
            <div className="relative">
              <CalendarIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <TextInput type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} className="pl-10" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <ButtonSecondary
            onClick={() => {
              setSearchTerm("")
              setNivelFilter("Todos")
              setDataInicio("")
              setDataFim("")
            }}
          >
            Limpar Filtros
          </ButtonSecondary>
          <ButtonPrimary onClick={() => alert("Aplicar filtros")}>Aplicar Filtros</ButtonPrimary>
        </div>
      </Card>

      {/* Logs Table */}
      <Card className="mb-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data/Hora
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nível
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Categoria
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Usuário
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ação
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  IP
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-600">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <div>
                        <div>{log.dataHora.split(" ")[0]}</div>
                        <div className="text-xs text-gray-500">{log.dataHora.split(" ")[1]}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getLevelIcon(log.nivel)}
                      <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getLevelColor(log.nivel)}`}>
                        {log.nivel}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{log.categoria}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.usuario}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-800">{log.acao}</div>
                    <div className="text-xs text-gray-500 truncate max-w-xs">{log.detalhes}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{log.ip}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewDetails(log.id)}
                      className="text-gray-600 hover:text-primary"
                      title="Ver detalhes"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Export and Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          Mostrando <span className="font-medium">{filteredLogs.length}</span> de{" "}
          <span className="font-medium">{logs.length}</span> logs
        </div>
        <div className="flex space-x-2">
          <ButtonSecondary onClick={() => alert("Exportar logs para CSV")}>Exportar CSV</ButtonSecondary>
          <ButtonSecondary onClick={() => alert("Exportar logs para PDF")}>Exportar PDF</ButtonSecondary>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2">
        <ButtonSecondary disabled>Anterior</ButtonSecondary>
        <ButtonSecondary>Próximo</ButtonSecondary>
      </div>
    </div>
  )
}
