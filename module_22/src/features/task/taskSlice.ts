import type { RootState } from "@/app/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
	tasks: ITask[];
}

const initialState: InitialState = {
	tasks: [
		{
			id: "12312ASF",
			title: "Initializing tast",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "High",
		},
		{
			id: "12312ASF",
			title: "Initializing tast",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "High",
		},
		{
			id: "12312ASF",
			title: "Initializing tast",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "High",
		},
		{
			id: "12312ASF",
			title: "Initializing tast",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "High",
		},
		{
			id: "12312ASF",
			title: "Initializing tast",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "High",
		},
	],
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {},
});

export function selectTask(state: RootState) {
	return state.todo.tasks;
}

export default taskSlice.reducer;
