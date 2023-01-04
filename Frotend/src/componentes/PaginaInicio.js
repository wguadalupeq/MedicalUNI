import Swal from 'sweetalert2';
import ImagenMicro from './../images/ImagenMicro.jpg';
import Ciencias_uni from './../images/Ciencias_uni.jpg';
import styled from 'styled-components';
import withReactContent from 'sweetalert2-react-content'


const PaginaInicio = () => {

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
          MEDICAL-UNI Te saluda
          </p>
          <Image className="mx-auto d-block" src={ImagenMicro} alt="" />
          <p>
            Le recordamos que esta página cuenta con reconocimiento de voz
          </p>
          
      </div>
      )
    })
  
    return ( 
        <div>
            <h1 className='text-center'>Proyecto Medical UNI</h1>
            <ImageInterna className="mx-auto d-block" src={Ciencias_uni} alt="" />
        </div>
  );


}


const Image = styled.img`
width: 200px;
heihgt: 200px;
padding:2px;
border: 1px solid #2b18d4;
border-radius:30px;
`;

const ImageInterna = styled.img`
width: 80%;
heihgt: 60%;
padding:20px;
border: 1px solid #2b18d4;
border-radius:30px;
`;

export default PaginaInicio;