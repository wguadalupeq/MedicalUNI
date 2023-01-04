import { NavLink } from 'react-router-dom';

const Inicio = () => {
	return (
		<div>
			<h2>Página de Perfil del Usuario</h2>
			<ul>
				<li >
				<NavLink to = "/editar_perfil" className="text-decoration-none">
                    <h5>Editar Perfil</h5>
                </NavLink>
				</li>
				<li>
				<NavLink to = "/agregar_perfil" className="text-decoration-none">
                    <h5>Agregar Usuario</h5>
                </NavLink>
				</li>	
				<li>
				<NavLink to = "/elimnar_perfil" className="text-decoration-none">
                    <h5>Eliminare Perfil</h5>
                </NavLink>
				</li>
			</ul>

		</div>
	);
}
 
export default Inicio;