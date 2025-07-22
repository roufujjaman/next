import type { RootState } from "@/app/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
	tasks: ITask[];
	filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
	tasks: [
		{
			id: "12312ASF",
			title: "Initializing tast 1 ",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "high",
		},
		{
			id: "16612ASF",
			title: "Initializing tast 2",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "high",
		},
		{
			id: "12912ASF",
			title: "Initializing tast 3 ",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "high",
		},
		{
			id: "12310ASF",
			title: "Initializing tast 4",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "high",
		},
		{
			id: "10312ASF",
			title: "Initializing tast 5",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "high",
		},
	],
	filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
	return {
		id: nanoid(),
		isCompleted: false,
		...taskData,
	};
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<DraftTask>) => {
			const taskData = createTask(action.payload);
			state.tasks.push(taskData);
		},
		toggleComplete: (state, action: PayloadAction<string>) => {
			state.tasks.filter((task) =>
				task.id === action.payload
					? (task.isCompleted = !task.isCompleted)
					: task
			);
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		updateTask: (state, action: PayloadAction<ITask>) => {
			// state.tasks = state.tasks.map((task) => {
			// 	task.id === action.payload.id ? action.payload : task;
			// });
			state.tasks = state.tasks.map((task) =>
				task.id === action.payload.id ? action.payload : task
			);
		},
		updateFilter: (
			state,
			action: PayloadAction<"all" | "low" | "medium" | "high">
		) => {
			state.filter = action.payload;
		},
	},
});

export const selectTask = (state: RootState) => {
	const filter = state.todo.filter;

	if (filter === "low") {
		return state.todo.tasks.filter((task) => task.priority === "low");
	} else if (filter === "medium") {
		return state.todo.tasks.filter((task) => task.priority === "medium");
	} else if (filter === "high") {
		return state.todo.tasks.filter((task) => task.priority === "high");
	} else {
		return state.todo.tasks;
	}

	return state.todo.tasks;
};

export const { addTask, toggleComplete, deleteTask, updateTask, updateFilter } =
	taskSlice.actions;
export default taskSlice.reducer;
