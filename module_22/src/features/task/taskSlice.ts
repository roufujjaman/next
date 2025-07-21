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
			title: "Initializing tast",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "high",
		},
		{
			id: "16612ASF",
			title: "Initializing tast",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "high",
		},
		{
			id: "12912ASF",
			title: "Initializing tast",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "high",
		},
		{
			id: "12310ASF",
			title: "Initializing tast",
			description: "Create Home page",
			dueDate: "2025-07-01",
			isCompleted: false,
			priority: "high",
		},
		{
			id: "10312ASF",
			title: "Initializing tast",
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
		addTask: (state, action: PayloadAction<ITask>) => {
			const taskData = createTask(action.payload);
			state.tasks.push(taskData);
		},
	},
});

export const selectTask = (state: RootState) => {
	return state.todo.tasks;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
