import Plantilla_perfil from './../../images/Plantilla_perfil.png'
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Eliminar_perfil from './../../images/Eliminar_perfil.png';


const PerfilEliminar = () => {

  const efecto = () => {
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
          MEDICAL-UNI
          </p>
          <Image className="mx-auto d-block" src={Eliminar_perfil} alt="" />
          <p>
            ¿Esta seguro de eliminar este perfil?
          </p>
          
      </div>
      )
    }) 
  }


    return (
        <div>  
            <div>
                <h1 className='text-center'>Hola Willian!!</h1>
                <Imagen className="mx-auto d-block" src={Plantilla_perfil} alt="" /> 
            </div>
                    <ContenedorBoton>
                        <Boton onClick={()=> efecto()}>                
                            <h5>Eliminar Perfil</h5>                                                                             
                        </Boton>
                        
                    </ContenedorBoton>
                    <Icono className='text-center'><FontAwesomeIcon icon={faMicrophone}/></Icono>
        </div>
    );
}
 
const Imagen = styled.img`
    padding: 0px;
    margin: 0px;
    width: 50%
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

const Icono = styled.h1`
margin:auto;
width: 250px;
heihgt: 250px;
padding: 10px
`;

const ContenedorBoton = styled.div`
    padding: 20px;
    margin: 0px
`;

const Image = styled.img`
width: 200px;
heihgt: 200px;
padding:2px;
border: 1px solid #2b18d4;
border-radius:30px;
`;

export default PerfilEliminar;