import App from "@/App";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
	{ path: "/", element: <div>Hello World</div> },
	{ path: "/todo", Component: App },
]);

export default router;
