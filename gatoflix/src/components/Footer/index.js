import React from 'react';

import { FooterBase } from './styles';
import LogoImersao from '../LogoImersao';

function Footer() {
    return (
        <FooterBase>
            <a href="https://www.alura.com.br/" target="_blank">
                <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
            </a>
            <p>
                Orgulhosamente criado durante a
                <a href="https://www.alura.com.br/imersao-react/" target="_blank">
                    <LogoImersao />
                </a>
            </p>
        </FooterBase>
    );
}

export default Footer;
