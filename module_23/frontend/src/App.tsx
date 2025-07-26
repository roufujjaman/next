import { Outlet } from "react-router";
import Navbar from "./components/layout/navbar";

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;
