import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@/features/task/taskSlice";
import userSlice from "@/features/user/userSlice";
import logger from "../middlewares/logger";

export const store = configureStore({
	reducer: {
		todo: taskReducer,
		user: userSlice,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
