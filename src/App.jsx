import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/Login";
import Registrar from "./pages/Registrar/Registrar";

function App() {
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState("");

  // Função para adicionar um novo usuário
  const adicionarUsuario = (novoUsuario) => {
    setUsuariosCadastrados((prevUsuarios) => [...prevUsuarios, novoUsuario]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginPage
              usuariosCadastrados={usuariosCadastrados}
              definirUsuarioLogado={setUsuarioLogado}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Registrar
              usuariosCadastrados={usuariosCadastrados}
              adicionarUsuario={adicionarUsuario}
            />
          }
        />

        {/* Rota padrão redireciona para login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Adicione outras rotas aqui conforme necessário */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
