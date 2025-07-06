import App from "@/App";
import Task from "@/pages/task";
import User from "@/pages/user";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				Component: Task,
			},
			{
				index: true,
				path: "/task",
				Component: Task,
			},
			{
				path: "/user",
				Component: User,
			},
		],
	},
]);

export default router;
