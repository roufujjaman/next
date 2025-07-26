import { useAppDispatch } from "@/app/hook";
import { Button } from "@/components/ui/button";
import { deleteUser } from "@/features/user/userSlice";
import type { IUser } from "@/types";
import { Trash } from "lucide-react";

type IProps = {
	user: IUser;
};

export function UserCard({ user }: IProps) {
	const dispatch = useAppDispatch();
	return (
		<>
			<div className="min-w-1/4 p-5 border rounded-md">
				<h1>{user.name}</h1>
				<div className="flex items-center justify-between">
					<Button
						variant={"link"}
						onClick={() => dispatch(deleteUser(user.id))}
					>
						<Trash />
					</Button>
				</div>
			</div>
		</>
	);
}
