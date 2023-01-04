import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone , faVolumeUp , faBars} from '@fortawesome/free-solid-svg-icons'

const ConsultaAutoseguro = () => {
    return (  
        <Contenedor>
            <Encabezado>
                <div>
                    <div>
                    <Div>
                        <h4>Bienvenid@ Maria Cueva</h4> 
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
                             <h5>Actualizar Autoseguro</h5>
                        </div>
                    </div>
                </Boton>
                </ContenedorBoton>                
                <form id="form1" className='text-center'>
                    <Inputs type='file' id="imgInp" />
                    <br/>
                    <Imagenes id="blah" src="https://via.placeholder.com/150" alt="Tu imagen" />
                </form> 
                <ContenedorBoton>
                <Boton className='border p-3 form' >
                     <div>
                        <div className="text-decoration-none ">
                            <h5>Actualizar Ficha de Matricula</h5>
                         </div>
                     </div>
                </Boton>
                </ContenedorBoton>
                <form id="form1" className='text-center'>
                    <Inputs type='file' id="imgInp" />
                    <br/>
                    <Imagenes id="blah" src="https://via.placeholder.com/150" alt="Tu imagen" />
                </form> 
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

const Inputs = styled.input`
    width: 90%;    
    border: 2px solid #d1d1d1;
    border-radius: 10px;
    background: #23B7DB;
    margin: auto
`;


const Div = styled.div`
    width: 160px;
    height: 50px;
    margin-bottom: 20px;
    display: inline-block

`;

const Imagenes = styled.img`
    margin-bottom: 20px;
    margin: auto

`;

export default ConsultaAutoseguro;