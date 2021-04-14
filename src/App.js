import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
	const [number, setNumber] = useState(0);

	function handleMinusClick() {
		console.log("Minus");
	}

	function handlePlusClick() {
		console.log("Plus");
	}

	return (
		<div className="App">
			<div>{number}</div>
			<div>
				<button onClick={handleMinusClick}>-</button>
				<button onClick={handlePlusClick}>+</button>
			</div>
		</div>
	);
}
export default App;
