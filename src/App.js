import React, { useEffect, useState } from "react";
import { TodoInputContext, TodoContext } from "./context/context";

import TodoInput from "./TodoInput";
import Todo from "./Todo";

import "./App.css";

let todoObj = [
	{
		id: 1,
		todo: "number 1",
		isCompleted: false,
	},
	{
		id: 2,
		todo: "number 2",
		isCompleted: false,
	},
];

function App() {
	const [todoArray, setTodoArray] = useState(todoObj);

	function addTodo(todo) {
		console.log(todo);
	}

	function showTodoInput() {
		return (
			<TodoInputContext.Provider value={{ addTodo }}>
				<TodoInput />
			</TodoInputContext.Provider>
		);
	}

	function showTodo() {
		return todoArray.map((item) => {
			return (
				<TodoContext.Provider
					key={item.id}
					value={{
						todoItem: item,
					}}
				>
					<Todo />
				</TodoContext.Provider>
			);
		});
	}

	return (
		<div className="App">
			{showTodoInput()}
			{showTodo()}
		</div>
	);
}

export default App;
