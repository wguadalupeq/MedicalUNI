import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	return (
		<ContenedorHeader>
			<Titulo>Bienvendo Usuario</Titulo>
			<Menu>
				<NavLink to="/" exact={true}>Perfil</NavLink>
				<NavLink to="/blog">Consultas</NavLink>
				<NavLink to="/acerca-de">Acerca de</NavLink>
			</Menu>
		</ContenedorHeader>
	);
}

const ContenedorHeader = styled.header`
	text-align: center;
	margin-bottom: 40px;
`;

const Titulo = styled.h1`
	margin-bottom: 10px;
	font-size: 26px;
	text-transform: uppercase;
`;

const Menu = styled.nav`
	a {
		text-decoration: none;
		color: #165168;
		margin: 0 10px;
	}

	a:hover {
		color: #191668;
	}

	a.active {
		border-bottom: 2px solid #165168;
		padding-bottom: 3px;
	}
`;
 
export default Header;