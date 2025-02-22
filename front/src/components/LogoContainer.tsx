import React from 'react';
import logoMin from '../assets/images/logo-min.svg';
import logoOpen from '../assets/images/logo-open.svg';
import '../global.scss';
import './styles/logo-container.scss';

const LogoContainer: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={logoMin} alt="Logo Min" className="logo logo-min" />
      <img src={logoOpen} alt="Logo Open" className="logo logo-open" />
    </div>
  );
}

export default LogoContainer; 