import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import Logo from '../../assets/img/gatoflix-logo.png';
import { LogoImage, MenuWrapper } from './style';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="Gatoflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
