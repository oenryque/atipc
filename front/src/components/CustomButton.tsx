import React from 'react';
import './styles/custom-button.scss';
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
} from '@fortawesome/free-solid-svg-icons'; // Importando ícones específicos

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
  faEdit
);

// Definindo um tipo para os ícones
type IconName = 'faHome' | 'faCog' | 'faUser' | 'faStar' | 'faHeart' | 'faBell' | 'faEnvelope' | 'faSearch' | 'faTrash' | 'faEdit';

interface CustomButtonProps {
  text: string;
  icon?: IconName; // Agora é um tipo que representa os nomes dos ícones
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, icon }) => {
  const renderIcon = () => {
    if (icon) {
      // Usando um switch para obter a definição do ícone
      let iconDefinition;
      switch (icon) {
        case 'faHome':
          iconDefinition = faHome;
          break;
        case 'faCog':
          iconDefinition = faCog;
          break;
        case 'faUser':
          iconDefinition = faUser;
          break;
        case 'faStar':
          iconDefinition = faStar;
          break;
        case 'faHeart':
          iconDefinition = faHeart;
          break;
        case 'faBell':
          iconDefinition = faBell;
          break;
        case 'faEnvelope':
          iconDefinition = faEnvelope;
          break;
        case 'faSearch':
          iconDefinition = faSearch;
          break;
        case 'faTrash':
          iconDefinition = faTrash;
          break;
        case 'faEdit':
          iconDefinition = faEdit;
          break;
        default:
          return null;
      }
      return <FontAwesomeIcon icon={iconDefinition} className="icon" />; // Usando Font Awesome
    }
    return null;
  };

  return (
    <button className="custom-button">
      {icon && renderIcon()}
      <span>{text}</span>
    </button>
  );
}

export default CustomButton; 