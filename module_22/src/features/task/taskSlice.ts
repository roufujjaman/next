import type { RootState } from "@/app/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
	tasks: ITask[];
}

const initialState: IInitialState = {
	tasks: [
		{
			id: "123123",
			title: "Sample Title",
			description: "This is a description",
			dueDate: "2025-10-25",
			isCompleted: false,
			priority: "High",
		},
		{
			id: "123123",
			title: "Second Task",
			description: "This is another task to do earliest",
			dueDate: "2025-10-15",
			isCompleted: false,
			priority: "Low",
		},
	],
};

export const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {},
});

export const selectTasks = (state: RootState) => {
	return state.todo.tasks;
};

export default taskSlice.reducer;
