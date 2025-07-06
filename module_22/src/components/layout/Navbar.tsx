import { Link } from "react-router";
import Logo from "../../assets/Logo";
import { ModeToggle } from "../mode-toggler";

export default function Navbar() {
	return (
		<nav className="max-w-7xl mx-auto h-16 flex items-center justify-between">
			<div className="flex gap-3">
				<div className="flex gap-1">
					<Logo />
					<div>
						<strong>Task</strong>Master
					</div>
				</div>
				<Link to={"/task"}>Task</Link>
				<Link to={"/user"}>User</Link>
			</div>
			<div>
				<ModeToggle />
			</div>
		</nav>
	);
}
