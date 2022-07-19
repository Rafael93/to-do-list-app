import React, { useState } from 'react';
import "../stylesheets/task-form.css"
import { v4 as uuidv4 } from 'uuid';
import TaskList from './task-list.js';

function TaskForm(props) {

  const [input, setInput] = useState("");
  
  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      text: input,
      finished: false 
    }

    props.onSubmit(tareaNueva);
  }
    return(
        <form 
          className='task-form'
          onSubmit={manejarEnvio}>
          <input
            className='task-input'
            type="text"
            placeholder='Escriba una tarea'
            name="text"
            onChange={manejarCambio}
        	/>
					<button className='task-button'>
						Agregar tarea
					</button>
        </form>
  	)
}

export default TaskForm;