import { test } from "./features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { Button } from "./components/ui/button";

function App() {
	const { todos } = useAppSelector((state) => state.todo);
	const dispatch = useAppDispatch();

	const handleAddTodo = (formData: FormData) => {
		const todo = formData.get("todo");

		dispatch(test(todo));
	};

	return (
		<>
			<div className="flex min-h-svh flex-col items-center justify-center">
				{todos.map((item) => (
					<li>{item}</li>
				))}
				<form action={handleAddTodo}>
					<input className="border m-3" type="text" name="todo" />
					<Button>Click me</Button>
				</form>
			</div>
		</>
	);
}

export default App;
