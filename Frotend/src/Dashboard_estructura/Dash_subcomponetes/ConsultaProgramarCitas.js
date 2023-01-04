import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone , faVolumeUp , faBars} from '@fortawesome/free-solid-svg-icons'

const ConsultaaProgramarCitas = () => {
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
            <Cuerpo>
            <div>
                <h3>Elija una opcion:</h3>
                <input type="checkbox"></input> Hombre<br/>
                <input type="checkbox"></input> Mujer<br></br>
            </div>
            <div>
                <h3>Selecciona una especialidad:</h3>
                <Seleccionador>
                    <option>Ninguna </option>
                    <option>Alergología.</option>
                    <option>Cardiología.</option>
                    <option>Dermatología.</option>
                    <option>Endocrinología.</option>
                    <option>Gastroenterología.</option>
                    <option>Geriatría.</option>
                    <option>Ginecología Oncológica</option>
                </Seleccionador>
            </div>
            <div>
                <h3>Selecciona un horario en el Primer Turno:</h3>
                <Seleccionador>
                    <option>Ninguna </option>
                    <option>8:00 am </option>
                    <option>9:00 am</option>
                    <option>10:00 am</option>
                    <option>11:00 am</option>
                    <option>12:00 am</option>
                </Seleccionador>
            </div>
            <div>
                <h3>Selecciona un horario en el Segundo Turno:</h3>
                <Seleccionador>
                    <option>Ninguna </option>
                    <option>13:00 am </option>
                    <option>14:00 am</option>
                    <option>15:00 am</option>
                    <option>16:00 am</option>
                    <option>17:00 am</option>
                </Seleccionador>
            </div>
        <hr/>
        <ContenedorBoton>
            <Boton>Enviar</Boton>
        </ContenedorBoton>
        <Icono className='text-center'><FontAwesomeIcon icon={faMicrophone}/></Icono> 
        </Cuerpo>
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

const Cuerpo = styled.div`
    margin: 25px;
`;

const Seleccionador = styled.select`
width: 100%;
min-width: 15ch;
max-width: 30ch;
border: 1px solid var(--select-border);
border-radius: 0.25em;
padding: 0.25em 0.5em;
font-size: 1.25rem;
cursor: pointer;
line-height: 1.1;
background-color: #23B7DB;
background-image: linear-gradient(to top, #f9f9f9, #fff 33%)
`;


export default ConsultaaProgramarCitas;