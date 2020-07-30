import React from 'react';
import styled from 'styled-components';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Dados from '../../data/dados_iniciais.json';

const HomeWrapper = styled.nav`
    background-color: var(--grayDark);

    padding-top: 94px;

    @media(max-width: 800px){
        padding-top: 40px;
    }
`;

function Home() {
    return (
        <HomeWrapper className="Home">
            <Menu />
            <BannerMain
                videoTitle="Gatos e dominós"
                videoDescription="Afinal de contas, por que não assistir a gatos derrubando dominós?"
                url="https://youtu.be/7Nn7NZI_LN4"
            />
            <Carousel category={Dados.categorias[0]} />
            <Carousel category={Dados.categorias[1]} />
            <Carousel category={Dados.categorias[2]} />
            <Footer />
        </HomeWrapper>
    );
}

export default Home;
