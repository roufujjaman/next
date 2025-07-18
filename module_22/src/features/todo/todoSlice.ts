import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface TodoState {
	todos: string[];
}

const initialState: TodoState = {
	todos: ["First", "Second"],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		test: (state, action: PayloadAction<string>) => {
			console.log(action);
			state.todos.push(action.payload);
		},
	},
});

export const { test } = todoSlice.actions;
export const selectTodo = (state: RootState) => {
	return "nothing from here";
};

export default todoSlice.reducer;
