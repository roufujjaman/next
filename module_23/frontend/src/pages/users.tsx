import { useAppSelector } from "@/app/hook";
import { AddUserModal } from "@/components/module/user/AddUserModal";
import { UserCard } from "@/components/module/user/UserCard";
import { selectUsers } from "@/features/user/userSlice";

export default function User() {
	const users = useAppSelector(selectUsers);
	return (
		<>
			<div className="mx-auto max-w-7xl px-5">
				<div className="flex justify-between items-center">
					<h1>Users</h1>
					{/* <Tabs defaultValue="high">
						<TabsList>
							<TabsTrigger value="all">All</TabsTrigger>
							<TabsTrigger value="low">Low</TabsTrigger>
							<TabsTrigger value="medium">Midum</TabsTrigger>
							<TabsTrigger value="high">High</TabsTrigger>
						</TabsList>
					</Tabs> */}
					<AddUserModal />
				</div>
				<div className="flex flex-wrap justify-center gap-4">
					{users.map((user) => (
						<UserCard user={user} key={user.id} />
					))}
				</div>
			</div>
		</>
	);
}
