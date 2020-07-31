import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Home from './pages/Home';
import ResourceNotFound from './pages/ResourceNotFound';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro/video" exact component={CadastroVideo} />
            <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
            <Route component={ResourceNotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
