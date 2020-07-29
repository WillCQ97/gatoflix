import styled from 'styled-components';
import source from '../../assets/img/Logo.png';

/* exemplo de styled component */
const Logo = styled.img.attrs({ src: source , alt: 'Gatoflix logo'})`
    height: 40px;
`;

export default Logo;