import React, { useState } from "react";
import TaskForm from "../componentes/task-form.js"
import "../stylesheets/task-list.css"
import Task from "./task.js";

function TaskList (){

	const [tareas, setTareas] = useState([]);

	const addTask = tarea => {
		if(tarea.text.trim()){
			tarea.text = tarea.text.trim();
			const updateTasks = [tarea, ...tareas];
			setTareas(updateTasks);
		}
	};

	const deleteTask = id => {
		const updateTasks = tareas.filter(tarea => tarea.id !== id);
		setTareas(updateTasks);
	};

	const finishTask = id => {
		const updateTasks = tareas.map(tarea => {
			if (tarea.id === id){
				tarea.finished = !tarea.finished;
			}
			return tarea;
		})
		setTareas(updateTasks); 
	};

  return(
		<>
			<TaskForm onSubmit={addTask}/>
			<div className="task-list-container">
				{
					tareas.map((tarea) =>
						<Task
							key={tarea.id}
							id={tarea.id}
							text= {tarea.text}
							finished= {tarea.finished}
							finishTask= {finishTask}
							deleteTask={deleteTask}/>
					)
				}
			</div>
		</>
  );
}

export default TaskList;