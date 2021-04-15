import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodoInputContext, TodoContext } from "./context/context";

import TodoInput from "./TodoInput";
import Todo from "./Todo";

import "./App.css";

let todoObj = [
	{
		id: uuidv4(),
		todo: "number 1",
		isCompleted: false,
	},
	{
		id: uuidv4(),
		todo: "number 2",
		isCompleted: false,
	},
];

function App() {
	const initialTodos = window.localStorage.getItem("todos")
		? JSON.parse(window.localStorage.getItem("todos"))
		: [];

	const [todoArray, setTodoArray] = useState(initialTodos);

	function addTodo(todo) {
		console.log(todo);
		let newAddedTodoArray = [
			...todoArray,
			{ id: uuidv4(), todo, isCompleted: false },
		];
		setTodoArray(newAddedTodoArray);
	}

	function showTodoInput() {
		return (
			<TodoInputContext.Provider value={{ addTodo }}>
				<TodoInput />
			</TodoInputContext.Provider>
		);
	}

	function handleDeleteTodoById(id) {
		let newFilteredTodoArray = todoArray.filter((item) => item.id !== id);

		setTodoArray(newFilteredTodoArray);
	}

	function handleDoneTodoById(id) {
		let newTodoArray = todoArray.map((item) => {
			if (item.id === id) {
				item.isCompleted = !item.isCompleted;
			}
			return item;
		});
		setTodoArray(newTodoArray);
	}

	function showTodo() {
		return todoArray.map((item) => {
			return (
				<TodoContext.Provider
					key={item.id}
					value={{
						todoItem: item,
						handleDeleteTodoById,
						handleDoneTodoById,
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
