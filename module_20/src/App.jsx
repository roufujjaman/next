import { useReducer, useState } from "react";
import "./App.css";

function App() {
	const initialState = {
		name: "",
		email: "",
		number: "",
	};

	const [userInfo, dispatch] = useReducer((state, action) => {
		if (action.type === "FEILD_UPDATE") {
			// do followings on "UPDATE"
			return {
				...state,
				[action.payload.feild]: action.payload.value,
			};
		} else if (action.type === "RESET") {
			return initialState;
		} else if (action.type === "CLEAR") {
			return {
				...state,
				[action.payload.feild]: "",
			};
		}
	}, initialState);

	const handleOnChange = (e) => {
		dispatch({
			type: "FEILD_UPDATE",
			payload: {
				feild: e.target.name,
				value: e.target.value,
			},
		});
	};

	const handelOnChangeReset = (feild) => {
		dispatch({
			type: "CLEAR",
			payload: {
				feild: feild,
			},
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(userInfo);
	};
	return (
		<div>
			<h1>This is a form</h1>
			<form onSubmit={handleOnSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						value={userInfo.name}
						onChange={handleOnChange}
					/>
					<button onClick={() => handelOnChangeReset("name")}>CLEAR</button>
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						value={userInfo.email}
						onChange={handleOnChange}
					/>
					<button onClick={() => handelOnChangeReset("email")}>CLEAR</button>
				</div>

				<div>
					<label htmlFor="number">Number</label>

					<input
						type="text"
						name="number"
						id="number"
						value={userInfo.number}
						onChange={handleOnChange}
					/>
					<button onClick={() => handelOnChangeReset("number")}>CLEAR</button>
				</div>

				<button onClick={() => dispatch({ type: "RESET" })}>Rest</button>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
