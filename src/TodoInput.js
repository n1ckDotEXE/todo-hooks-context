import React, { useState, useContext } from "react";

const TodoInput = () => {
	const [todo, setTodo] = useState("");

	function handleTodoSubmit(event) {
		event.preventDefault();
	}
	return (
		<form onSubmit={handleTodoSubmit}>
			<input
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button type="submit">Submit Todo</button>
		</form>
	);
};

export default TodoInput;
