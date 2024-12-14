import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registrar.css";

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

// Página de Registro
function RegisterPage({ usuariosCadastrados, adicionarUsuario }) {
  const [nomeUsuario, definirNomeUsuario] = useState("");
  const [email, definirEmail] = useState("");
  const [cpf, definirCPF] = useState("");
  const [senhaAcesso, definirSenhaAcesso] = useState("");
  const [confirmacaoSenha, definirConfirmacaoSenha] = useState("");
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

  // Função de validação de CPF
  const validarCPF = (cpf) => {
    const cpfLimpo = cpf.replace(/[.\-]/g, "");
    return cpfLimpo.length === 11;
  };

  // Função de validação de formulário
  const validarFormulario = () => {
    const novosErros = {};

    // Validação de Nome de Usuário
    if (!nomeUsuario.trim()) {
      novosErros.nomeUsuario = "Nome de Usuário é obrigatório";
    }

    // Validação de E-mail
    if (!email.trim()) {
      novosErros.email = "E-mail é obrigatório";
    } else if (!validarEmail(email)) {
      novosErros.email = "E-mail inválido";
    }

    // Validação de CPF
    if (!cpf.trim()) {
      novosErros.cpf = "CPF é obrigatório";
    } else if (!validarCPF(cpf)) {
      novosErros.cpf = "CPF inválido. Digite um CPF com 11 dígitos.";
    }

    // Validação de Senha
    if (!senhaAcesso.trim()) {
      novosErros.senhaAcesso = "Senha é obrigatória";
    } else if (!validarSenha(senhaAcesso)) {
      novosErros.senhaAcesso = "Senha deve ter no mínimo 6 caracteres";
    }

    // Validação de Confirmação de Senha
    if (!confirmacaoSenha.trim()) {
      novosErros.confirmacaoSenha = "Confirmação de Senha é obrigatória";
    } else if (senhaAcesso !== confirmacaoSenha) {
      novosErros.confirmacaoSenha = "As senhas não coincidem";
    }

    // Verificação de email único
    const emailExistente = usuariosCadastrados.some(
      (usuario) => usuario.email === email
    );
    if (emailExistente) {
      novosErros.email = "Já existe uma conta cadastrada com este email";
    }

    definirErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const processarRegistro = (evento) => {
    evento.preventDefault();

    // Validação antes de processar
    if (!validarFormulario()) {
      return;
    }

    try {
      definirProcessando(true);
      setTimeout(() => {
        // Criar novo usuário
        const novoUsuario = {
          nome: nomeUsuario,
          email: email,
          cpf: cpf.replace(/[.\-]/g, ""),
          password: senhaAcesso,
        };

        // Adicionar usuário (presumindo que exista uma função para isso)
        adicionarUsuario(novoUsuario);

        alert("Registro realizado com sucesso!");
        definirProcessando(false);
        direcionar("/login");
      }, 1000);
    } catch (erro) {
      alert("Ocorreu um erro durante o registro: " + erro);
      definirProcessando(false);
    }
  };

  return (
    <div className="container">
      <div className="container-imagem">
        <div className="imagem-fundo"></div>
      </div>
      <div className="secao-login">
        <form className="form-login" onSubmit={processarRegistro}>
          <h1>Registrar</h1>
          <EntradaFormulario
            variante="text"
            rotulo="Nome de Usuário"
            valorAtual={nomeUsuario}
            aoModificar={(e) => {
              definirNomeUsuario(e.target.value);
              definirErros((prev) => ({ ...prev, nomeUsuario: "" }));
            }}
            erro={erros.nomeUsuario}
          />
          <EntradaFormulario
            variante="email"
            rotulo="Endereço de E-mail"
            valorAtual={email}
            aoModificar={(e) => {
              definirEmail(e.target.value);
              definirErros((prev) => ({ ...prev, email: "" }));
            }}
            erro={erros.email}
          />
          <EntradaFormulario
            variante="text"
            rotulo="CPF"
            valorAtual={cpf}
            aoModificar={(e) => {
              definirCPF(e.target.value);
              definirErros((prev) => ({ ...prev, cpf: "" }));
            }}
            erro={erros.cpf}
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
          <EntradaFormulario
            variante="password"
            rotulo="Confirmar Senha"
            valorAtual={confirmacaoSenha}
            aoModificar={(e) => {
              definirConfirmacaoSenha(e.target.value);
              definirErros((prev) => ({ ...prev, confirmacaoSenha: "" }));
            }}
            erro={erros.confirmacaoSenha}
          />
          <BotaoSetinha
            aoClicar={processarRegistro}
            desabilitado={processando}
          />
          <div className="links-adicionais">
            <Link className="link-autenticacao" to="/login">
              Fazer Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
