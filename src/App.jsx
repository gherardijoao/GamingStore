import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/Login";
import Registrar from "./pages/Registrar/Registrar";
import AccountScreen from "./pages/accountScreen/AccountScreen";
import Populares from "./pages/Populares/Populares";
import Principal from "./pages/Principal/Principal";
import Recuperar from "./pages/Recuperar/Recuperar";

/* 
  Componente principal da aplicação.
  Gerencia rotas e o estado global dos usuários cadastrados e logados.
*/
function App() {
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState("");

  /* 
    Função para adicionar um novo usuário ao estado de usuários cadastrados.
  */
  const adicionarUsuario = (novoUsuario) => {
    setUsuariosCadastrados((prevUsuarios) => [...prevUsuarios, novoUsuario]);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para a página de login. Passa os usuários cadastrados e a função de login como props. */}
        <Route
          path="/login"
          element={
            <LoginPage
              usuariosCadastrados={usuariosCadastrados}
              definirUsuarioLogado={setUsuarioLogado}
            />
          }
        />
        {/* Rota para a página de registro. Passa os usuários cadastrados e a função de adição como props. */}
        <Route
          path="/register"
          element={
            <Registrar
              usuariosCadastrados={usuariosCadastrados}
              adicionarUsuario={adicionarUsuario}
            />
          }
        />
        {/* Rota para a tela de conta do usuário. Passa a lista de contas e o email do usuário logado. */}
        <Route
          path="/account"
          element={
            <AccountScreen
              account={usuariosCadastrados}
              loginEmail={usuarioLogado}
            />
          }
        />
        {/* Rota para a página de recuperação de senha. */}
        <Route path="/recover" element={<Recuperar />} />
        {/* Rota para a página de conteúdos populares. */}
        <Route path="/populares" element={<Populares />} />
        {/* Rota para a página principal */}
        <Route path="/lancamentos" element={<Principal />} />
        {/* Rota padrão que redireciona para a página de login. */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
