import React from 'react';
import styled from 'styled-components';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Dados from '../../data/dados_iniciais.json';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

const HomeWrapper = styled.nav`
    background-color: var(--grayDark);
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
