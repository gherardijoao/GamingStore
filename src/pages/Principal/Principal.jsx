// Importação de bibliotecas e componentes
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Componente de carrossel
import { Navigation, Pagination } from "swiper/modules"; // Módulos de navegação e paginação
import NavBar from "../../components/NavBar"; // Componente de navegação
import Footer from "../../components/Footer"; // Componente de rodapé

// Importação de estilos e imagens
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Principal.css";
import bobSponjaPrice from "../../assets/bobSponjaPrice.png";
import deliverUsMarsPrice from "../../assets/deliverUsMarsPrice.png";
import carousel01 from "../../assets/carousel01.png";
import deathStrandingPrice from "../../assets/deathStrandingPrice.png";
import perish from "../../assets/perish.png";
import spellforce from "../../assets/spellforce.png";
import CART from "../../assets/carrin.png";
import DAYSGONEPRICE from "../../assets/daysGonePrice.png";

const Principal = () => {
  // Estado para o slide atual do carrossel principal
  const [setMainCurrentSlide] = useState(0);

  // Estado para armazenar a largura da janela
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Atualiza a largura da janela ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slides do carrossel principal, adaptados para mobile e desktop
  const mainSlides =
    windowWidth <= 480
      ? [
          { image: DAYSGONEPRICE },
          { image: DAYSGONEPRICE },
          { image: DAYSGONEPRICE },
        ]
      : [{ image: carousel01 }, { image: carousel01 }, { image: carousel01 }];

  // Slides do carrossel secundário
  const secondarySlides = [
    { image: bobSponjaPrice },
    { image: deliverUsMarsPrice },
    { image: deathStrandingPrice },
    { image: perish },
    { image: spellforce },
  ];

  return (
    <div className="home-container">
      <NavBar /> {/* Componente de navegação */}
      <main className="main-contentPRINCIPAL">
        {/* Carrossel principal */}
        <section className="main-carousel">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setMainCurrentSlide(swiper.activeIndex)}
            className="carousel-container"
          >
            {mainSlides.map((slide, index) => (
              <SwiperSlide key={index} className="slide">
                <img src={slide.image} alt={`Featured game ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Carrossel secundário */}
        <section className="secondary-carousel">
          <h2>Lançamentos</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            loop={true}
            slidesPerView={5}
            spaceBetween={20}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="carousel-container"
          >
            {[...secondarySlides, ...secondarySlides].map((slide, index) => (
              <SwiperSlide key={index} className="game-card">
                <img src={slide.image} alt={`Game ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Ícone do carrinho de compras */}
          <div className="cart-container">
            <img src={CART} alt="Shopping Cart" className="cart-icon" />
          </div>
        </section>
      </main>
      <Footer /> {/* Componente de rodapé */}
    </div>
  );
};

export default Principal;
