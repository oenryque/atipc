import React from 'react';
import './styles/header.scss';
import LogoContainer from './LogoContainer';
import IconLinkButton from './IconLinkButton';
import CustomButton from './CustomButton';

const Header: React.FC = () => {

  return (
    <div className="header">
      <LogoContainer />
      <div className="header-content">
        <IconLinkButton icon="faFacebook" link="https://facebook.com" />
        <IconLinkButton icon="faTwitter" link="https://twitter.com" />
    

        <IconLinkButton icon="faInstagram" link="https://instagram.com" />
        <CustomButton text="Fale Conosco" icon="faStar" />

      </div>
    </div>
  );
}

export default Header; 