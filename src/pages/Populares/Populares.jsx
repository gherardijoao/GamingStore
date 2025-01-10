import React from "react";
import NavBar from "../../components/NavBar";
import "./Populares.css";
import GOW from "../../assets/GOWPOP.png";
import HORIZON from "../../assets/horizonPOP.png";
import DAYSGONE from "../../assets/daysGonePOP.png";
import CART from "../../assets/carrin.png";
import Footer from "../../components/Footer";

function Populares() {
  return (
    <div className="containerPOPULARES">
      {/* Importando a NAVBAR */}
      <NavBar />
      <div className="main-content">
        <div className="titulo">
          <h1 className="popular-title">Populares</h1>
        </div>

        <main className="popular-content">
          {/* Seção do jogo "God of War" */}
          <section className="game-section">
            <div className="game-image">
              {/* Imagem do jogo */}
              <img src={GOW} alt="God of War" />
              <div className="svgs">
                <span className="svg-icon svg-gow"></span>
              </div>
            </div>
            <div className="game-info">
              <h2>God of War</h2>
              <p>
                Kratos é pai novamente. Como mentor e protetor de Atreus, um
                filho determinado a ganhar seu respeito, ele é forçado a encarar
                e controlar a fúria que há muito tempo o define enquanto viaja
                por um mundo ameaçador com o seu filho. Com a vingança contra os
                deuses do Olimpo no passado, Kratos agora vive no reino das
                divindades e monstros nórdicos. É nesse mundo duro e impiedoso
                que ele deve lutar para sobreviver enquanto ensina seu filho a
                fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do
                Fantasma de Esparta.
              </p>
            </div>
          </section>

          {/* Seção do jogo "Horizon Zero Dawn" */}
          <section className="game-section reverse">
            <div className="game-image">
              {/* Imagem do jogo */}
              <img src={HORIZON} alt="Horizon Zero Dawn" />
              <div className="svgs">
                <span className="svg-icon svg-horizon"></span>
              </div>
            </div>
            <div className="game-info">
              <h2>Horizon Zero Dawn</h2>
              <p>
                Em um futuro distante, dominado por máquinas colossais que vagam
                pela Terra, a natureza retomou as ruínas da nossa civilização
                esquecida e pequenos grupos de sobreviventes se dividem em
                diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem
                caçadora de máquinas exilada da sua tribo, que parte em busca da
                verdade sobre suas origens e o misterioso mundo que ela precisa
                salvar.
              </p>
            </div>
          </section>

          {/* Seção do jogo "Days Gone" */}
          <section className="game-section">
            <div className="game-image">
              {/* Imagem do jogo */}
              <img src={DAYSGONE} alt="Days Gone" />
              <div className="svgs">
                <span className="svg-icon svg-daysgone"></span>
              </div>
            </div>
            <div className="game-info">
              <h2>Days Gone</h2>
              <p>
                Days Gone é um jogo de ação e aventura em mundo aberto que se
                passa em um ambiente adverso dois anos após uma pandemia mundial
                devastadora. Entre na pele do antigo motociclista fora da lei
                Deacon St. John, um caçador de recompensas que tenta achar uma
                razão para viver numa terra cercada pela morte. Vasculhe
                assentamentos abandonados em busca de equipamentos para produzir
                itens e armas valiosos ou arrisque-se com outros sobreviventes
                que tentam ganhar a vida honestamente... ou de formas mais
                violentas.
              </p>
            </div>

            {/* Ícone do carrinho de compras */}
            <div className="cart-container1">
              <img src={CART} alt="Shopping Cart" className="cart-icon" />
            </div>
          </section>
        </main>
        {/* Componente do rodapé */}
        <Footer />
      </div>
    </div>
  );
}

export default Populares;
