import React from "react"; // Importando a biblioteca React para criar componentes
import ICONZIN from "../assets/womanPOP.png"; // Importando a imagem que será usada como ícone
import "./Footer.css"; // Importando o arquivo CSS para estilizar o rodapé

// Definindo o componente Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Seção de Apresentação da Gaming Store */}
        <div className="footer-section">
          <h3>Game Dame</h3>
          <p className="textin">Seu próximo jogo começa aqui.</p>
        </div>

        {/* Seção de navegação com links */}
        <div className="footer-section">
          <h3>Explorar</h3>
          <nav>
            {/* Links para outras páginas do site */}
            <a href="/">Início</a>
            <a href="/populares">Populares</a>
            <a href="/account">Conta</a>
          </nav>
        </div>

        {/* Seção de Contato */}
        <div className="footer-section contact-section">
          <h3>Contato</h3>
          <div className="contact-wrapper">
            <div className="iconzin">
              <img src={ICONZIN} alt="Icon" />
            </div>
            <div className="contact-items">
              {/* Contém os itens de contato */}

              {/* Item de contato para email */}
              <div className="contact-item">
                <span className="mail"></span>
                <p>gamegamedame@teste.com</p>
              </div>

              {/* Item de contato para telefone */}
              <div className="contact-item">
                <span className="phone"></span>
                <p>(99) 9 9999-9999</p>
              </div>

              {/* Item de contato para localização */}
              <div className="contact-item">
                <span className="location"></span>
                <p>Shopping X, Lavras - MG</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de direitos autorais no final do rodapé */}
      <div className="direitos">
        <p>2024 Game Dame | By Emakers Júnior</p>
      </div>
    </footer>
  );
}

export default Footer;
