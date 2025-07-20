import { Outlet } from "react-router";
import Navbar from "./components/layout/navbar";

function App() {
	return (
		<>
			<div className="max-w-7xl flex p-5 m-auto gap-10 items-center justify-between">
				<Navbar />
			</div>
			<Outlet />
		</>
	);
}

export default App;
