import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@/features/task/taskSlice";
import logger from "../middlewares/logger";

export const store = configureStore({
	reducer: {
		todo: taskReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
