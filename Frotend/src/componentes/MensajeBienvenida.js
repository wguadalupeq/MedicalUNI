import Swal from 'sweetalert2';
import ImagenCiencias from './../images/ImagenCiencias.jpg';
import styled from 'styled-components';
import withReactContent from 'sweetalert2-react-content'
import CruzRoja from './../images/CruzRoja.png'
import Welcome from './../images/Welcome.jpg'
import { NavLink } from 'react-router-dom';

const MensajeBienvenida = () => {
    
  const MySwal = withReactContent(Swal)

  MySwal.fire({
    title: <p>Farmuni</p>,
    footer: 'Copyright 2021',
    didOpen: () => {
      // `MySwal` is a subclass of `Swal`
      //   with all the same instance & static methods
      MySwal.clickConfirm()
    }
  }).then(() => {
    return MySwal.fire(
      <div>
        
        <p className="text-danger">
        MEDICAL UNI !TE DA LA BIENVENIDA!
        </p>
        <Image className="mx-auto d-block" src={ImagenCiencias} alt="" />
        <p>
          Ahora estas registrado en nuestra APP
        </p>
        
    </div>
    )
  })

  return ( 
    <Div class="contenedor">
        <ContenedorBasico className='text-center'>
          <Image className="mx-auto d-block" src={Welcome} alt="" />
          !Bienvenido Usuario!
          <br/>
          <br/>
          <Image className="mx-auto d-block" src={CruzRoja} alt="" />
          <ContenedorBoton>
          <NavLink to = "/dashboard" className="text-decoration-none">
              <Boton>Ir a Pagina Principal</Boton>
          </NavLink>          
          </ContenedorBoton>
          </ContenedorBasico>
        
    </Div>
);
    }


const Image = styled.img`
width: 300px;
heihgt: 200px;
padding:2px;
border: 1px solid #2b18d4;
border-radius:30px;
`;

const ContenedorBasico = styled.div`
  background: #B1E4C2;
  width: 100%;
  heihgt: 100%;
  padding: 30px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(0,0,0,.1);
  border: 5px solid #000 
`;

const Div = styled.div`
    padding: 20px;
    width: 50%   
`;

const ContenedorBoton = styled.div`
    padding: 20px;
    margin: 0px
`;

const Boton = styled.button`
    background: #EC1E43;
    display: inline-block;
    padding: 20px;
    border: none;
    color: white;
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

export default MensajeBienvenida;