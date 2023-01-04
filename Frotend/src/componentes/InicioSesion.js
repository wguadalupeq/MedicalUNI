import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Uni_escudo from './../images/Uni_escudo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const InicioSesion = () => {
    return(
        <Div>
        <Contenedor className='text-center'>
            <h1 className='text-danger display-5'>Medical UNI</h1> 
            <Imagen className="mx-auto d-block" src={Uni_escudo} alt="" /> 
            <h1 className='text-danger display-5'>Ingreso al Sistema</h1> 
            <ContenedorInterno>
                                        
                <form >
                    <div >
                        <Label htmlFor="nombreUsuario">Usuario</Label>
                        <Inputs
                            type="text"
                            className="form-control bg-light"
                            name="nombreUsuario"
                        />
                        <Label htmlFor="clave">Contraseña</Label>
                        <Inputs
                            type="password"
                            className="form-control bg-light"
                            name="clave"
                        />
                        <ContenedorBoton>
                        <Boton>
                                <div>
                                    <NavLink to = "/dashboard" className="text-decoration-none">
                                    <h5>Ingresar</h5>
                                    </NavLink>
                                </div>                       
                        </Boton>
                        </ContenedorBoton>                        

                        <ContenedorBoton>
                        <Boton>
                                <div>
                                    <NavLink to = "/registro" className="text-decoration-none">
                                    <h5>Registrarse</h5>
                                    </NavLink>
                                </div>                       
                        </Boton>
                        </ContenedorBoton>
                        <Icono><FontAwesomeIcon icon={faMicrophone}/></Icono>
                        {/*
                        <input
                            type="submit"
                            value="Acceder"
                        />
                        */}

                    </div>            
                </form>
            </ContenedorInterno>
        </Contenedor>
        </Div>    
    );

}

//Estilos

const Contenedor = styled.div`
    background: #C6BFBE;
    width: 90%;    
    max-width: 500px;
    pagging: 50px;
    margin: auto;
    border: 10px;
    border-radius: 2px;
    box-shadow: 0 0 50px rgba(0,0,0,.1);
    border: 5px solid #000
`;


const ContenedorInterno = styled.div`
    background: #C6BFBE;
    width: 90%;
    max-width: 500px;
    margin: auto;
`;

const Inputs = styled.input`
    width: 100%;
    padding: 10px;
    border: 2px solid #d1d1d1;
    border-radius: 10px
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  display: block;
  margin-bottom: 5px  
`;

const ContenedorBoton = styled.div`
    padding: 20px;
    margin: 0px
`;

const Boton = styled.button`
    background: #EC1E43;
    width: 100%;
    display: inline-block;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all

    &:hover {
      background: #44a559;
      color: #fff
    }
`;

const Imagen = styled.img`
    padding: 0px;
    margin: 0px;
    width: 50%
`;

const Div = styled.div`
    padding: 8px    
`;

const Icono = styled.h1`
margin:auto;
width: 250px;
heihgt: 250px;
padding: 10px
`;

export default InicioSesion;