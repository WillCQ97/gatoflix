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
            <BannerMain url="https://www.youtube.com/watch?v=ZY3-MFxVdEw" />
            <Carousel category={Dados.categorias[0]} />
            <Carousel category={Dados.categorias[1]} />
            <Carousel category={Dados.categorias[2]} />
            <Carousel category={Dados.categorias[3]} />
            <Carousel category={Dados.categorias[4]} />
            <Carousel category={Dados.categorias[5]} />
            <Footer />
        </nav>
    );
}

export default Home;
