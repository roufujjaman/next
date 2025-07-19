import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/index.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="vite-theme">
			<Provider store={store}>
				<RouterProvider router={router}></RouterProvider>
			</Provider>
		</ThemeProvider>
	</StrictMode>
);
