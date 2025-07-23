import App from "@/App";
import Task from "@/pages/tasks";
import User from "@/pages/users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
	{
		path: "",
		Component: App,
		children: [
			{ index: true, Component: Task },
			{ path: "tasks", Component: Task },
			{ path: "users", Component: User },
		],
	},
]);

export default router;
