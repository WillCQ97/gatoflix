import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404. O que você queria acessar? </div>)
//https://youtu.be/eh7lp9umG2I

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro/video" exact component={CadastroVideo} />
            <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
            <Route component={Pagina404} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
