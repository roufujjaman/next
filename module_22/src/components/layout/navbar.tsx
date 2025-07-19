import Logo from "@/assets/logo";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
	return (
		<>
			<div className="flex gap-3 items-center">
				<Logo />
				<Link to={"tasks"}>Tasks</Link>
				<Link to={"users"}>Users</Link>
			</div>
			<ModeToggle />
		</>
	);
}
