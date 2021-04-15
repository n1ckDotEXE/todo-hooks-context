import React, { useContext } from "react";
import { TodoContext } from "./context/context";

function Todo() {
	const {
		todoItem: { id, todo },
		handleDeleteTodoById,
	} = useContext(TodoContext);

	return (
		<div>
			{todo}
			<button>Done</button>
			<button onClick={() => handleDeleteTodoById(id)}>Delete</button>
		</div>
	);
}

export default Todo;
