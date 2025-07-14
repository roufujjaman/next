import { useAppSelector } from "@/app/hooks";
import UserCard from "@/components/module/user/UserCard";
import { getUsers } from "@/features/user/userSlice";

export default function User() {
	const users = useAppSelector(getUsers);
	console.log(users);
	return (
		<>
			<div className="flex justify-between mx-auto max-w-3xl items-center my-5">
				<h1>Users</h1>
			</div>
			<div className="space-y-5">
				{users.map((user) => (
					<UserCard user={user}></UserCard>
				))}
			</div>
		</>
	);
}
