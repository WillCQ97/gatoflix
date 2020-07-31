import styled from 'styled-components';

import logo from '../../assets/img/imersao-react-logo.svg';

/* exemplo de styled components */
const LogoImersao = styled.img.attrs({ src: logo, alt: 'Logo da Imersão React da Alura'})`
    height: 50px;
    vertical-align: middle;
`;

export default LogoImersao;