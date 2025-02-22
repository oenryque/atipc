import React from 'react';
import './styles/banner.scss';
import bannerImage from '../assets/images/rocket.png'; // Substitua pelo caminho da sua imagem

const Banner: React.FC = () => {
  return (
    <div className="banner">
      {/* Renderiza 20 estrelas */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className={`star-${i + 1}`}></div>
      ))}

      <div className="banner-content">
        <h1>Inovação e Inteligência para transformar seu negócio.</h1>
      </div>

      <img src={bannerImage} alt="Banner" className="banner-image" /> {/* Adicionando a imagem */}
    </div>
  );
};

export default Banner;
