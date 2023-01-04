import ConsultaAgenda from "../Dash_subcomponetes/ConsultaAgenda";
import ConsultaAutoseguro from "../Dash_subcomponetes/ConsultaAutoseguro";
import ConsultaaProgramarCitas from "../Dash_subcomponetes/ConsultaProgramarCitas";
import ConsultaQuejasSujerencias from "../Dash_subcomponetes/ConsultaQuejasSujerencias";
import ConsultaRecetas from "../Dash_subcomponetes/ConsultaRecetas";

export default [
	{id: 1, titulo: 'Autoseguro', texto: 'Situación en la que una persona, física o jurídica, soporta con su patrimonio las consecuencias económicas derivadas de sus propios riesgos, sin intervención de ninguna entidad aseguradora. Ley No 26702' 
	, componente: <ConsultaAutoseguro/>},
	{id: 2, titulo: 'Programar Citas', texto: 'La programación médica implica la asignación de horas específicas para los exámenes y el manejo de consultas de servicio al cliente. Algunas de las tareas que completan los planificadores médicos incluyen la programación de oleadas, la programación de oleadas modificadas, la doble reserva, la reserva abierta, la agrupación o categorización, la autoprogramación y más. Los programadores médicos también realizarán estas tareas para varias oficinas en algunas situaciones.'
	, componente: <ConsultaaProgramarCitas/>},
	{id: 3, titulo: 'Agenda', texto: ' herramienta digital que permite a los centros de salud funcionar de manera organizada; automatizando acciones, brindando atención 24/7 al paciente y administrar eficientemente las citas médicas que se realizan todos los días.'
	, componente: <ConsultaAgenda/>},
	{id: 4, titulo: 'Recetas', texto: 'La receta médica es el documento legal por medio del cual los médicos legalmente capacitados prescriben la medicación al paciente para su dispensación por parte del farmacéutico.​ Dicha prescripción es un proceso clínico individualizado y dinámico.'
	, componente: <ConsultaRecetas/>},
	{id: 5, titulo: 'Quejas y Sugerencias', texto: 'Queja: Manifestación realizada, por parte del usuario a la empresa, por inconformidad en los servicios prestados en cuanto a atención, trato, organización, etc. Sugerencia: Propuesta de ideas presentadas por el usuario, cuya finalidad es ayudar a mejorar algún proceso'
	, componente: <ConsultaQuejasSujerencias/>}
];