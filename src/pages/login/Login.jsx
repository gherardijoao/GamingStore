import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

// Componente de Campo de Entrada
const EntradaFormulario = ({
  variante,
  rotulo,
  valorAtual,
  aoModificar,
  erro,
}) => {
  return (
    <div className="container-entrada">
      <input
        className={`campo-entrada ${erro ? "entrada-erro" : ""}`}
        type={variante}
        placeholder={rotulo}
        value={valorAtual}
        onChange={aoModificar}
      />
      {erro && <span className="mensagem-erro">{erro}</span>}
    </div>
  );
};

// Componente de Navegação de Botão
const BotaoSetinha = ({ aoClicar, desabilitado }) => {
  return (
    <button
      className="botao-setinha"
      type="submit"
      onClick={aoClicar}
      disabled={desabilitado}
    >
      ➜
    </button>
  );
};

// Página de Login
function LoginPage({ usuariosCadastrados, definirUsuarioLogado }) {
  const [identificador, definirIdentificador] = useState("");
  const [senhaAcesso, definirSenhaAcesso] = useState("");
  const [processando, definirProcessando] = useState(false);
  const [erros, definirErros] = useState({});

  const direcionar = useNavigate();

  // Função de validação de e-mail
  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

  // Função de validação de senha
  const validarSenha = (senha) => {
    return senha.length >= 6;
  };

  // Nova função de validação de formulário
  const validarFormulario = () => {
    const novosErros = {};

    if (!identificador.trim()) {
      novosErros.identificador = "E-mail é obrigatório";
    } else if (!validarEmail(identificador)) {
      novosErros.identificador = "E-mail inválido";
    }

    if (!senhaAcesso.trim()) {
      novosErros.senhaAcesso = "Senha é obrigatória";
    } else if (!validarSenha(senhaAcesso)) {
      novosErros.senhaAcesso = "Senha deve ter no mínimo 6 caracteres";
    }

    definirErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const processarAcesso = (evento) => {
    evento.preventDefault();

    // Validação antes de processar
    if (!validarFormulario()) {
      return;
    }

    // Verificação de credenciais usando método mais robusto
    const usuarioEncontrado = usuariosCadastrados.find(
      (usuario) =>
        usuario.email.toLowerCase() === identificador.toLowerCase() &&
        usuario.password === senhaAcesso
    );

    if (!usuarioEncontrado) {
      definirErros({
        identificador: "Credenciais inválidas",
        senhaAcesso: "Credenciais inválidas",
      });
      return;
    }

    try {
      definirProcessando(true);

      // Aqui você define o usuário logado
      definirUsuarioLogado(usuarioEncontrado.email);

      setTimeout(() => {
        definirProcessando(false);
        direcionar("/account");
      }, 1000);
    } catch (erro) {
      alert("Ocorreu um erro durante a autenticação: " + erro);
      definirProcessando(false);
    }
  };

  return (
    <div className="container">
      <div className="container-imagem">
        <div className="imagem-fundo"></div>
      </div>
      <div className="secao-login">
        <form className="form-login" onSubmit={processarAcesso}>
          <h1>Login</h1>
          <EntradaFormulario
            variante="email"
            rotulo="Endereço de E-mail"
            valorAtual={identificador}
            aoModificar={(e) => {
              definirIdentificador(e.target.value);
              definirErros((prev) => ({ ...prev, identificador: "" }));
            }}
            erro={erros.identificador}
          />
          <EntradaFormulario
            variante="password"
            rotulo="Senha de Acesso"
            valorAtual={senhaAcesso}
            aoModificar={(e) => {
              definirSenhaAcesso(e.target.value);
              definirErros((prev) => ({ ...prev, senhaAcesso: "" }));
            }}
            erro={erros.senhaAcesso}
          />
          <BotaoSetinha aoClicar={processarAcesso} desabilitado={processando} />
          <div className="links-adicionais">
            <Link className="link-autenticacao" to="/register">
              Criar Nova Conta
            </Link>
            <Link className="link-autenticacao" to="/recover">
              Recuperar Acesso
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
