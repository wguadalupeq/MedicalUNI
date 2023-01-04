import React from 'react';
import styled from 'styled-components';
import Imagen from './../../images/Imagen.png'

const ConsultaAgendaCitasProgramadas = () => {
    return (			    
    <Contenedor>
        <Carta>
    <LadoFrente>
        <Titulo>Citas</Titulo>
                    <Image className="mx-auto d-block" src={Imagen} alt="" />
	</LadoFrente>

            <LadoAtras>
            <h3>Ideas</h3>
                <Ul>
                    <Li>Idea Cero</Li>
                    <Li>Idea Uno</Li>
                    <Li>Idea Dos</Li>
                    <Li>Idea Tres</Li>
                    <Li>Idea Cuatro</Li>
                </Ul>
            </LadoAtras>
        </Carta>	
    </Contenedor> 
    );
}

const Contenedor = styled.div`
    height: 250px;
    margin: auto;
    width: 250px;
    -webkit-perspective: 700   
`;

const Carta = styled.div`
    height: 100%;
    width: 100%;
    transition: all 1s;
    transform-style: preserve-3d;
    box-shadow: 0px 0px 5px black;
    position: absolute;
    
    
    &:hover {
        transform: rotateY(180deg);
      }
`;

const LadoFrente = styled.div`
position: absolute;
height: 100%;
width: 100%;
background: #F0F0F0;
backface-visibility: hidden;
background-color: crimson  
`;


const LadoAtras = styled.div`
position: absolute;
height: 100%;
width: 100%;
background: #F0F0F0;
backface-visibility: hidden;
height: 100%;
width: 100%;
transform: rotateY(180deg)

`;

const Titulo = styled.h3`
position: absolute;
font-size: 38px;
margin-top: 200px;
color: #fff  
`;

const Ul = styled.ul`
    padding: 0;
    margin:0;
    list-style: none;
    height: 204px  
`;

const Li = styled.li`
    text-decoration: none;
    padding: 10px;
    z-index:80
`;

const Image = styled.img`
width: 80%;
heihgt: 80%;
padding:2px;
border: 1px solid #2b18d4;
border-radius:30px;
`;

export default ConsultaAgendaCitasProgramadas;