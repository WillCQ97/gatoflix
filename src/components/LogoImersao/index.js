import styled from 'styled-components';

import Logo from '../../assets/img/imersao-react-logo.svg';

/* exemplo de styled components */
const LogoImersao = styled.img.attrs({ src: Logo, alt: 'Logo da Imersão React da Alura'})`
    height: 50px;
    vertical-align: middle;
`;

export default LogoImersao;