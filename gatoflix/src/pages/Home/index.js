import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Dados from '../../data/dados_iniciais.json';

function Home() {
    return (
        <nav className="Home">
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
        </nav>
    );
}

export default Home;
