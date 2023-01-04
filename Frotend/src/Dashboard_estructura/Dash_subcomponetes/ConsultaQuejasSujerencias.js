import React from 'react'
import styled from 'styled-components';
import Sujerencias from './../../images/Sugerencia.png'

class ConsultaQuejasSujerencias extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
      items: [
        { id: 1, text: 'Arreglar el horario con Gastroenterologo deberia de ser mas rapido', done: false },
        { id: 2, text: 'No se me dio cita,pese a horario de espera', done: true }
      ],
        text: '' 
    };
	}
	
	pendingTasks = () => {
		const pendingTasks = this.state.items.filter(item => {
			return item.done === false
		})
		if ( pendingTasks.length === 0 ) {
			return 'Ninguna Queja o Sugerencia'
		} 
		else {
			return pendingTasks.length + ' Reclamos y Sugerencias Pendientes'
		}
	}

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      done: false
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
  
  checkBox = (e) => {
    const itemId = e.target.parentElement.id
    const checkedItems = this.state.items.map((item, index) => {
      if (item.id.toString() === itemId) {
        item.done = !item.done
      }
    })
    console.log(checkedItems)
    this.setState({ imtems: checkedItems })
  }
	
	render() {
    return (
      <Contenedor className="todo-list">
        <Div>
        <h2 className='text-center text-success'>Deje una queja o una sugerencia en nuestra plataforma</h2>
        <Image className="mx-auto d-block" src={Sujerencias} alt="" />
        
        <hr/>
				<h3 className="text-danger">{this.pendingTasks()}</h3>
        <TodoList items={this.state.items} checkBox={this.checkBox} />
        <form onSubmit={this.handleSubmit}>
        <br/>
        <hr/>
          <label className="text-primary" htmlFor="new-todo">
            ¿Qué necesitas hacer hoy?
          </label>
			 <div className="todo-input">
				 <input
					id="new-todo"
					onChange={this.handleChange}
					value={this.state.text}
					placeholder="Escriba en esta area"
				 />
				 <button className="btn btn-primary">
					Añadir Comentario
				 </button>
			  </div>
        </form>
        </Div>
      </Contenedor>
    );
  }
}

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
	 return (
		<ul onChange={this.props.checkBox}>
		  {this.props.items.map(item => (
			 <li key={item.id} id={item.id} class={item.done ? 'done' : 'undone'}>
				<input
					type="checkbox"
					checked={item.done}
				/>{' '}
				{item.text}
			 </li>
		  ))}
		</ul>
	 );
  }
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

const Div = styled.div`
    padding: 8px    
`;

const Image = styled.img`
width: 200px;
heihgt: 200px;
padding:2px;
border: 1px solid #2b18d4;
border-radius:30px;
`;

export default ConsultaQuejasSujerencias;
