import type { RootState } from "@/app/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
	tasks: ITask[];
	filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
	tasks: [
		{
			id: nanoid(),
			title: "Test title",
			description: "",
			dueDate: "2025-10-10",
			isCompleted: true,
			priority: "Medium",
		},
	],
	filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
	return {
		...taskData,
		id: nanoid(),
		isCompleted: false,
	};
};

export const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addData: (state, action: PayloadAction<ITask>) => {
			const taskData = createTask(action.payload);
			state.tasks.push(taskData);
		},
		toggleCompleteTask: (state, action: PayloadAction<string>) => {
			state.tasks.forEach((task) =>
				task.id === action.payload
					? (task.isCompleted = !task.isCompleted)
					: task
			);
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter((task) => task.id != action.payload);
		},
		updateFilter: (
			state,
			action: PayloadAction<"all" | "high" | "medium" | "low">
		) => {
			state.filter = action.payload;
		},
	},
});

export const selectTasks = (state: RootState) => {
	const filter = state.todo.filter;

	if (filter === "low") {
		return state.todo.tasks.filter((task) => task.priority === "Low");
	} else if (filter === "medium") {
		return state.todo.tasks.filter((task) => task.priority === "Medium");
	} else if (filter === "high") {
		return state.todo.tasks.filter((task) => task.priority === "High");
	}

	return state.todo.tasks;
};

export const { addData, toggleCompleteTask, deleteTask, updateFilter } =
	taskSlice.actions;

export default taskSlice.reducer;
