import type { RootState } from "@/app/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
	tasks: ITask[];
}

const initialState: IInitialState = {
	tasks: [],
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
	},
});

export const selectTasks = (state: RootState) => {
	return state.todo.tasks;
};

export const { addData, toggleCompleteTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
