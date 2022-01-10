import React from 'react';
import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <><Router>
      <nav>
        <h1>Mi aplicación</h1>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to="/listas">Listas de tareas</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      
        <Route path="/" exact component={Home} />
        <Route path="/listas" component={PaginaListas} />
        <Route path="/perfil" component={Perfil} />
      </Router>
    </>
  );
}
