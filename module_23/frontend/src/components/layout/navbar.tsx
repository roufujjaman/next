import Logo from "@/assets/logo";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
	return (
		<>
			<div className="max-w-7xl flex p-5 m-auto gap-10 items-center justify-between">
				<div className="flex gap-3 items-center">
					<Logo />
					<Link to={"tasks"}>Tasks</Link>
					<Link to={"users"}>Users</Link>
				</div>
				<ModeToggle />
			</div>
		</>
	);
}
