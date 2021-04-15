import React, { useContext } from "react";
import { TodoContext } from "./context/context";

function Todo() {
	const {
		todoItem: { id, todo, isCompleted },
		handleDeleteTodoById,
		handleDoneTodoById,
	} = useContext(TodoContext);

	return (
		<div>
			<span
				style={{
					textDecoration: isCompleted ? "line-through" : "",
				}}
			>
				{todo}
			</span>
			<button onClick={() => handleDoneTodoById(id)}>Done</button>
			<button onClick={() => handleDeleteTodoById(id)}>Delete</button>
		</div>
	);
}

export default Todo;
