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
	],
};

export const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {},
});

export default taskSlice.reducer;
