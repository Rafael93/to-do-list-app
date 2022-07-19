import React from 'react';
import "../stylesheets/task.css"
import { AiFillCloseSquare } from "react-icons/ai";

function Task({id, text, finished, finishTask, deleteTask }){
	return(
		<div className={finished ? "tasks-container-finished" : "tasks-container"}>
			<div 
				className='tasks-text'
				onClick={() => finishTask(id)}>
				{text}
			</div>
			<div 
				className='tasks-icon-container'
				onClick={() => deleteTask(id)}>
				<AiFillCloseSquare className='tasks-icon'/>
			</div>
		</div>
	)
}

export default Task;
