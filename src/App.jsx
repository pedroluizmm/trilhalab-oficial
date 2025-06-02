import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import DashboardLayout from "./components/Layouts/DashboardLayout"
import AdminLayout from "./components/Layouts/AdminLayout"

import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import RecuperarSenha from "./pages/RecuperarSenha"

// Dashboard
import Tendencias from "./pages/dashboard/Tendencias"
import SkillDetalhe from "./pages/dashboard/SkillDetalhe"
import Desafios from "./pages/dashboard/Desafios"
import DesafioDetalhe from "./pages/dashboard/DesafioDetalhe"
import DesafioSubmissao from "./pages/dashboard/DesafioSubmissao"
import Eventos from "./pages/dashboard/Eventos"
import EventoDetalhe from "./pages/dashboard/EventoDetalhe"
import EventosMeus from "./pages/dashboard/EventosMeus"
import EventoCheckin from "./pages/dashboard/EventoCheckin"
import EventoPresencaConfirmada from "./pages/dashboard/EventoPresencaConfirmada"
import Metas from "./pages/dashboard/Metas"
import DefinirMeta from "./pages/dashboard/DefinirMeta"
import Grupos from "./pages/dashboard/Grupos"
import GrupoDetalhe from "./pages/dashboard/GrupoDetalhe"
import Gamificacao from "./pages/dashboard/Gamificacao"

// Perfil
import DadosPessoais from "./pages/perfil/DadosPessoais"
import Certificados from "./pages/perfil/Certificados"
import Integracoes from "./pages/perfil/Integracoes"
import PontosBadges from "./pages/perfil/PontosBadges"

// Admin
import UsuariosAdmin from "./pages/admin/UsuariosAdmin"
import GruposAdmin from "./pages/admin/GruposAdmin"
import EventosAdmin from "./pages/admin/EventosAdmin"
import DesafiosAdmin from "./pages/admin/DesafiosAdmin"
import LogsAdmin from "./pages/admin/LogsAdmin"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />

        {/* Dashboard (autenticado) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="tendencias" replace />} />
          <Route path="tendencias" element={<Tendencias />} />
          <Route path="tendencias/:skillId" element={<SkillDetalhe />} />
          <Route path="desafios" element={<Desafios />} />
          <Route path="desafios/:desafioId" element={<DesafioDetalhe />} />
          <Route path="desafios/:desafioId/submissao" element={<DesafioSubmissao />} />

          <Route path="eventos" element={<Eventos />} />
          <Route path="eventos/:eventoId" element={<EventoDetalhe />} />
          <Route path="eventos/meus" element={<EventosMeus />} />
          <Route path="eventos/meus/:eventoId/checkin" element={<EventoCheckin />} />
          <Route path="eventos/meus/:eventoId/presenca-confirmada" element={<EventoPresencaConfirmada />} />

          <Route path="grupos" element={<Grupos />} />
          <Route path="grupos/:grupoId" element={<GrupoDetalhe />} />

          <Route path="metas" element={<Metas />} />
          <Route path="metas/definir" element={<DefinirMeta />} />

          <Route path="gamificacao" element={<Gamificacao />} />
        </Route>

        {/* Perfil (sem BottomNav, mas com Header e abas) */}
        <Route path="/perfil/dados-pessoais" element={<DadosPessoais />} />
        <Route path="/perfil/certificados" element={<Certificados />} />
        <Route path="/perfil/integracoes" element={<Integracoes />} />
        <Route path="/perfil/pontos-badges" element={<PontosBadges />} />

        {/* Admin (sem BottomNav) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="usuarios" replace />} />
          <Route path="usuarios" element={<UsuariosAdmin />} />
          <Route path="grupos" element={<GruposAdmin />} />
          <Route path="eventos" element={<EventosAdmin />} />
          <Route path="desafios" element={<DesafiosAdmin />} />
          <Route path="logs" element={<LogsAdmin />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
