import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Button } from "./components/ui/button";

export default function App() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}
