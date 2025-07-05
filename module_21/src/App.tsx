import { useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import type { RootState } from "./redux/store";
import { useAppSelector } from "./redux/hook";

function App() {
	const dispatch = useDispatch();
	const { count } = useAppSelector((state: RootState) => state.counter);

	console.log(count);

	const handleIncrement = (amount: number) => {
		dispatch(increment(amount));
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	return (
		<>
			<div>
				<h1>COUNTER</h1>
				<h1>{count}</h1>
				<button onClick={() => handleIncrement(5)}>Increment by 5</button>
				<button onClick={() => handleIncrement(1)}>Increment</button>
				<button onClick={handleDecrement}>Decrement</button>
			</div>
		</>
	);
}

export default App;
