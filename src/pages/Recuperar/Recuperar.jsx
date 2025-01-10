import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Recuperar.css";

// Componente para o campo de entrada (Input Field)
const FormInput = ({ type, label, value, onChange, error }) => {
  return (
    <div className="container-entrada">
      {/* Campo de entrada com estilização condicional para erros */}
      <input
        className={`campo-entrada ${error ? "entrada-erro" : ""}`}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      {/* Exibe uma mensagem de erro, caso exista */}
      {error && <span className="mensagem-erro">{error}</span>}
    </div>
  );
};

// Componente para o botão de envio (seta)
const ArrowButton = ({ onClick, disabled }) => {
  return (
    <button
      className="botao-setinha"
      type="submit"
      onClick={onClick}
      disabled={disabled} // Desabilita o botão enquanto o processamento ocorre
    >
      ➜
    </button>
  );
};

// Página de recuperação de conta
function Recuperar() {
  // Gerencia o estado do e-mail digitado pelo usuário
  const [email, setEmail] = useState("");
  // Gerencia o estado de processamento da submissão
  const [processing, setProcessing] = useState(false);
  // Gerencia os erros de validação
  const [errors, setErrors] = useState({});

  // Função para validar o formato do e-mail
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar o e-mail
    return emailRegex.test(email);
  };

  // Função executada ao enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Validação simples
    if (!email.trim()) {
      setErrors({ email: "E-mail é obrigatório" }); // Erro se o campo estiver vazio
      return;
    }

    if (!validateEmail(email)) {
      setErrors({ email: "E-mail inválido" }); // Erro se o e-mail for inválido
      return;
    }

    setProcessing(true); // Inicia o estado de processamento
    // Simula o envio ou validação do e-mail
    setTimeout(() => {
      setProcessing(false); // Finaliza o processamento após 1 segundo
    }, 1000);
  };

  return (
    <div className="container">
      {/* Área da imagem de fundo */}
      <div className="container-imagem">
        <div className="imagem-fundo"></div>
      </div>
      {/* Área do formulário */}
      <div className="secao-login">
        <form className="form-login" onSubmit={handleSubmit}>
          <h1>Recuperar Conta</h1>
          {/* Campo de entrada do e-mail */}
          <FormInput
            type="email"
            label="Endereço de E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({}); // Limpa os erros ao alterar o valor
            }}
            error={errors.email} // Passa a mensagem de erro, se existir
          />
          {/* Botão de envio */}
          <ArrowButton onClick={handleSubmit} disabled={processing} />
          {/* Links para outras páginas */}
          <div className="links-adicionais">
            <Link className="link-autenticacao" to="/login">
              Voltar para Login
            </Link>
            <Link className="link-autenticacao" to="/register">
              Criar Nova Conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Recuperar;
