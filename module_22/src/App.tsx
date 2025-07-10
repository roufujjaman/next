import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/layout/Navbar";

export default function App() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}
