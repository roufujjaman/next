import type { RootState } from "@/app/store";
import type { IUser } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
	users: IUser[];
}

const initialState: IInitialState = {
	users: [{ id: "safasfasfsaf", name: "roufujjaman" }],
};

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUser>) => {
			state.users.push(action.payload);
		},
	},
});

export const getUsers = (state: RootState) => {
	return state.user.users;
};

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
