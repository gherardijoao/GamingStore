import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import CART from "../../assets/carrin.png";
import "./AccountScreen.css";

// Componente principal que recebe 'account' (lista de contas) e 'loginEmail' (email do usuário logado).
const AccountScreen = ({ account, loginEmail }) => {
  const [nomeUsuario, definirNomeUsuario] = useState("");
  const [cpf, definirCPF] = useState("");

  const conta = account.find(({ email }) => email === loginEmail);

  // useEffect usado para atualizar os estados com base nos dados da conta, se ela for encontrada.
  useEffect(() => {
    if (conta) {
      definirNomeUsuario(conta.nome || "User");
      definirCPF(conta.cpf || "CPF não encontrado");
    }
  }, [conta]);

  // Lista estática de jogos.
  const userGames = [
    { id: 1, rating: "100/100", className: "Jogo1" },
    { id: 2, rating: "95/100", className: "Jogo2" },
    { id: 3, rating: "75/100", className: "Jogo3" },
    { id: 4, rating: "adicionar avaliação", className: "Jogo4" },
  ];

  // Botões do perfil.
  const profileButtons = [
    { text: "Alterar Dados", icon: null, disabled: false },
    { text: "Excluir Conta", icon: null, disabled: false },
    { text: "Tela do admin", icon: null, disabled: true },
  ];

  // Retorno do JSX: estrutura visual do componente, dividida em duas seções principais.
  return (
    <div className="containerACCOUNT">
      {/* Importando a NavBar */}
      <NavBar />

      <main className="body">
        {/* Seção do perfil */}
        <section className="profile-section">
          <div className="profile-content">
            <h1 className="boasVindas">Olá, {nomeUsuario}!</h1>
            {/* Dados do usuário, com fallback caso informações estejam ausentes */}
            <p className="about">
              Seu email é {conta?.email || "Não disponível"}
            </p>
            <p className="about">CPF: {cpf}</p>
            {/* Botões de ações do perfil */}
            <div className="pfButtonsContainer">
              {profileButtons.map(({ text, disabled }, index) => (
                <button key={index} className="pfButtons" disabled={disabled}>
                  {text}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Seção dos jogos do usuário */}
        <section className="games-section">
          <div className="games-content">
            <h1 className="joguinhosH1">Jogos Adquiridos:</h1>
            <div className="joguinhos">
              {userGames.map(({ id, rating, className }) => (
                <div key={id} className={className}>
                  <div className="avaliação">{rating}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Ícone do carrinho */}
          <div className="cart-containerCONTA">
            <img src={CART} alt="Shopping Cart" className="cart-iconCONTA" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccountScreen;
