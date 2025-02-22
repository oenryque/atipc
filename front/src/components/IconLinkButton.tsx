import React from 'react';
import './styles/icon-link-button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome, 
  faCog, 
  faUser, 
  faStar, 
  faHeart, 
  faBell, 
  faEnvelope, 
  faSearch, 
  faTrash, 
  faEdit 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

// Adicionando ícones específicos à biblioteca
library.add(
  faHome, 
  faCog, 
  faUser, 
  faStar, 
  faHeart, 
  faBell, 
  faEnvelope, 
  faSearch, 
  faTrash, 
  faEdit,
  faFacebook,
  faTwitter,
  faInstagram
);

// Definindo um tipo para os ícones
type IconName = 
  | 'faHome' 
  | 'faCog' 
  | 'faUser' 
  | 'faStar' 
  | 'faHeart' 
  | 'faBell' 
  | 'faEnvelope' 
  | 'faSearch' 
  | 'faTrash' 
  | 'faEdit'
  | 'faFacebook' 
  | 'faTwitter' 
  | 'faInstagram';

interface IconLinkButtonProps {
  icon: IconName; // Mantenha o tipo para o ícone
  link: string; // Link para onde o botão deve redirecionar
}

const IconLinkButton: React.FC<IconLinkButtonProps> = ({ icon, link }) => {
  // Mapeando o nome do ícone para a definição do ícone
  const iconDefinition = {
    faHome: faHome,
    faCog: faCog,
    faUser: faUser,
    faStar: faStar,
    faHeart: faHeart,
    faBell: faBell,
    faEnvelope: faEnvelope,
    faSearch: faSearch,
    faTrash: faTrash,
    faEdit: faEdit,
    faFacebook: faFacebook,
    faTwitter: faTwitter,
    faInstagram: faInstagram,
  }[icon];

  return (
    <a href={link} className="icon-link-button">
      <FontAwesomeIcon icon={iconDefinition} className="icon" />
    </a>
  );
}

export default IconLinkButton; 