import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import "./NavBar.css";

const NavBar = () => {
  // Estado que controla se o menu móvel está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lista centralizada de links de navegação para facilitar manutenção e reutilização
  const navLinks = [
    { to: "/lancamentos", text: "Lançamentos" },
    { to: "/populares", text: "Populares" },
    { to: "/generos", text: "Gêneros" },
    { to: "/promocoes", text: "Promoções" },
    { to: "/account", text: "Conta" },
  ];

  // Alterna entre abrir e fechar o menu móvel
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="NavBar">
      <div className="imagemMain"></div>

      {/*Botão exibido em telas móveis que permite abrir ou fechar o menu*/}
      <div className="hamburger-btn" onClick={toggleMenu}>
        {isMenuOpen ? <IoClose className="close-icon" /> : <RxHamburgerMenu />}
      </div>

      {/*Adiciona a classe 'active' ao menu móvel quando ele está aberto*/}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-links">
          {navLinks.map(({ to, text }) => (
            <Link key={to} to={to} onClick={toggleMenu}>
              {text}
            </Link>
          ))}
        </div>
        <div className="mobile-search">
          <input className="searchh" placeholder="Buscar..." />
          <button className="pesquisa">
            <HiOutlineMagnifyingGlass />
          </button>
        </div>
      </div>

      {/* Links visíveis apenas no modo desktop*/}
      <div className="buttonsTop">
        {navLinks.map(({ to, text }) => (
          <Link key={to} to={to}>
            {text}
          </Link>
        ))}
      </div>
      <div className="search">
        <input className="searchh" placeholder="Buscar..." />
        <button className="pesquisa">
          <HiOutlineMagnifyingGlass />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
