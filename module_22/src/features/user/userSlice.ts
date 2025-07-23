import type { RootState } from "@/app/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
	users: IUser[];
}

const initialState: InitialState = {
	users: [
		{
			id: "asfasfasfasfsa",
			name: "Rahat",
		},
		{
			id: "asfasfasfaf",
			name: "Lhohi",
		},
	],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser) => {
	return {
		id: nanoid(),
		...userData,
	};
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<IUser>) => {
			const userData = createUser(action.payload);
			state.users.push(userData);
		},
		deleteUser: (state, action: PayloadAction<string>) => {
			console.log("cale");
			state.users = state.users.filter((user) => user.id !== action.payload);
		},
	},
});

export const selectUsers = (state: RootState) => {
	return state.user.users;
};

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
