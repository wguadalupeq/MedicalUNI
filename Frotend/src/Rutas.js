import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route,Link} from "react-router-dom";

import InicioSesion from './componentes/InicioSesion';
import Dashboard from './componentes/Dashboard';
import Registro from './componentes/Registro';
import MensajeBienvenida from './componentes/MensajeBienvenida';

import styled from 'styled-components';


import PaginaInicio from './componentes/PaginaInicio';

const Rutas = () => {
  return ( 
    <Contenedor>
    <div>   
    
    <Route>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav__submenu " data-target="menu">
        <Route className="nav__menu-item">
          <Link to={"/pagina_inicio"}  className="nav-link text-center">Pagina de Incio</Link>            
        </Route>
        <input type="text" placeholder="Buscar" required />
        <Route className="nav__menu-item">
          <Link to={"/registro"}  className="nav-link text-center">Registro</Link>            
        </Route>
        <Route className="nav__menu-item">
          <Link to={"/inicio"}  className="nav-link text-center">Iniciar sesión</Link>            
        </Route>
      </nav>
   
      <Switch>
        <Contenido>
          <Route exact path="/" component={PaginaInicio}/>
          <Route exact path="/pagina_inicio" component={PaginaInicio}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/registro" component={Registro}/>
          <Route exact path="/inicio" component={InicioSesion}/>
          <Route exact path="/bienvenido" component={MensajeBienvenida}/>       
        </Contenido>
      </Switch>
    </Route>
    </div>
    </Contenedor>
   );
}

// Estilos

const Contenedor = styled.div`
  margin: 0;
  padding: 0;
  background: #8A807E;
  height: 200%; 
  width: 100%  
`;

const Contenido = styled.div`
  display: flex;
  align-items: center;
  justify-content: center
`;

export default Rutas;