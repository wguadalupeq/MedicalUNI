import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone , faVolumeUp , faBars} from '@fortawesome/free-solid-svg-icons'

const ConsultaAgenda = () => {
    
        return (  
            <Contenedor>
                <Encabezado>
                    <div>
                        <div>
                        <Div>
                            <h4>Bienvenid@</h4> 
                        </Div>
                        <Div>
                            <Icono><FontAwesomeIcon icon={faVolumeUp}/></Icono> 
                        </Div>
                        <Div className='text-right'>
                            <Icono><FontAwesomeIcon icon={faBars}/></Icono> 
                        </Div>
                        </div>
    
                    </div>
                </Encabezado>
                <div>
                    <ContenedorBoton>
                    <Boton className='border p-3 form'>
                         <div>
                             <div className="text-decoration-none">
                             <NavLink to = "/citasprogramadas" className="text-decoration-none">
                                <h5>Citas Programadas</h5>
                            </NavLink>                            
                            </div>
                        </div>
                    </Boton>
                    </ContenedorBoton> 
                    <ContenedorBoton>
                    <Boton className='border p-3 form'>
                         <div>
                             <div className="text-decoration-none">
                             <NavLink to = "/reprogramarhorarios" className="text-decoration-none">
                                <h5>Reprogramar Horario de Citas</h5>
                            </NavLink>                                                            </div>
                        </div>
                    </Boton>
                    </ContenedorBoton> 
                    <ContenedorBoton>
                    <Boton className='border p-3 form'>
                         <div>
                             <div className="text-decoration-none">
                             <NavLink to = "/triaje" className="text-decoration-none">
                                <h5>Triaje</h5>
                            </NavLink> 
                            </div>
                        </div>
                    </Boton>
                    </ContenedorBoton> 
                    <ContenedorBoton>
                    <Boton className='border p-3 form'>
                         <div>
                             <div className="text-decoration-none">
                             <NavLink to = "/gestionarhistoria" className="text-decoration-none">
                                <h5>Gestion de Historias</h5>
                            </NavLink> 
                            </div>
                        </div>
                    </Boton>
                    </ContenedorBoton>                

                    <ContenedorBoton>
                    <Boton className='border p-3 form' >
                         <div>
                            <div className="text-decoration-none ">
                            <NavLink to = "/facturacion" className="text-decoration-none">
                                <h5>Facturacion</h5>
                            </NavLink> 
                             </div>
                         </div>
                    </Boton>
                    </ContenedorBoton>
                    <Icono className='text-center'><FontAwesomeIcon icon={faMicrophone}/></Icono>  
    
                </div>  
            </Contenedor>
            
        );
    
}

const Contenedor = styled.div`
    background: #C6BFBE;
    width: 100%;    
    max-width: 100%;
    pagging: 0px;
    margin: auto;
    border: 10px;
    border-radius: 2px;
    border: 5px solid #000
    
`;

const Encabezado = styled.header`
    padding: 10px;
    margin: 13px;
    width: 95%;
    background: #EC1E43;
    border-radius: 10px;
    font-weight: bold;
    display: flex
`;

const ContenedorBoton = styled.div`
    padding: 20px;
    margin: 0px
`;

const Boton = styled.button`
    background-color: #23B7DB ; 
    width: 100%;
    display: inline-block;
    padding: 10px;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;   
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 30px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all

    &:hover {
    background: #44a559;
    color: #fff
    }
`;

const Icono = styled.h1`
    margin:auto;
    width: 250px;
    heihgt: 250px;
    padding: 10px

`;

const Div = styled.div`
    width: 160px;
    height: 50px;
    margin-bottom: 20px;
    display: inline-block

`;

export default ConsultaAgenda;