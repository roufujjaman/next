import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</StrictMode>
);
