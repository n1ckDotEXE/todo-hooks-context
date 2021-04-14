import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [number, setNumber] = useState(0);
	const [movieInput, setMovieInput] = useState("spiderman");

	function handleMinusClick() {
		//setNumber(number - 1);
		setNumber((prevValue) => prevValue - 1);
	}

	function handlePlusClick() {
		//setNumber(number + 1);
		setNumber((prevValue) => prevValue + 1);
	}

	async function fetchMovie() {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=6332b1e1&s=${movieInput}`
		);
		const data = await response.json();

		console.log(data);

		try {
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		console.log("useEffect ran");

		movieInput && fetchMovie();
	}, [movieInput]);

	function handleMovieOnChange(event) {
		setMovieInput(event.target.value);
	}

	return (
		<div className="App">
			<div>{number}</div>
			<div>
				<button onClick={handleMinusClick}>-</button>
				<button onClick={handlePlusClick}>+</button>
			</div>
			<div>
				<input
					type="text"
					name="movieInput"
					value={movieInput}
					onChange={handleMovieOnChange}
				/>
			</div>
		</div>
	);
}

export default App;
