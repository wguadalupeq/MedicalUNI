import React from 'react';
import styled from 'styled-components';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './../Dashboard_estructura/Dash_componetes/Header';
import Inicio from './../Dashboard_estructura/Dash_componetes/Inicio';
import Blog from './../Dashboard_estructura/Dash_componetes/Blog';
import Post from './../Dashboard_estructura/Dash_componetes/Post';
import AcercaDe from './../Dashboard_estructura/Dash_componetes/AcercaDe';
import Error404 from './../Dashboard_estructura/Dash_componetes/Error404';
import PerfilEditar from '../Dashboard_estructura/Dash_subcomponetes/PerfilEditar';
import PerfilAgregar from '../Dashboard_estructura/Dash_subcomponetes/PerfilAgregar';
import PerfilEliminar from '../Dashboard_estructura/Dash_subcomponetes/PerfilEliminar';
import ConsultaAgendaCitasProgramadas from '../Dashboard_estructura/Dash_subcomponetes/ConsultaAgendaCitasProgramadas';
import ConsultaAgendaReprogramarHorarios from '../Dashboard_estructura/Dash_subcomponetes/ConsultaAgendaReprogramarHorarios';
import ConsultaAgendaFacturacion from '../Dashboard_estructura/Dash_subcomponetes/ConsultaAgendaFacturacion';
import ConsultaAgendaTriaje from '../Dashboard_estructura/Dash_subcomponetes/ConsultaAgendaTriaje';
import ConsultaAgendaGestionarHistoria from '../Dashboard_estructura/Dash_subcomponetes/ConsultaAgendaGestionarHistoria';

const Dashboard = () => {
	return (
		<BrowserRouter>
			<ContenedorPrincipal>
				<Header />

				<Main>
					<Switch>
        
						<Route path="/" exact={true} component={Inicio} />
						<Route path="/blog" component={Blog} />
						<Route path="/post/:id" component={Post} />
						<Route path="/acerca-de" component={AcercaDe} />


						<Route path="/editar_perfil" component={PerfilEditar} />
						<Route path="/agregar_perfil" component={PerfilAgregar} />
						<Route path="/elimnar_perfil" component={PerfilEliminar} />

						<Route path="/citasprogramadas" component={ConsultaAgendaCitasProgramadas}/>
						<Route path="/reprogramarhorarios" component={ConsultaAgendaReprogramarHorarios}/>						
						<Route path="/triaje" component={ConsultaAgendaTriaje}/>
						<Route path="/gestionarhistoria" component={ConsultaAgendaGestionarHistoria}/>
						<Route path="/facturacion" component={ConsultaAgendaFacturacion}/>
						



						<Route component={Error404} />
					</Switch>
				</Main>
			</ContenedorPrincipal>
		</BrowserRouter>
	);
}

const ContenedorPrincipal = styled.div`
	padding: 40px;
	width: 90%;
	max-width: 700px;
	flex-flow: column wrap
`;

const Main = styled.main`
	background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
export default Dashboard;