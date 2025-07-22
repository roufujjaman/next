import { useAppDispatch } from "@/app/hook";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { deleteTask, toggleComplete } from "@/features/task/taskSlice";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Trash } from "lucide-react";
import { EditTaskModal } from "./EditTaskModal";

interface IProps {
	task: ITask;
}

export function TaskCard({ task }: IProps) {
	const dispatch = useAppDispatch();
	return (
		<div className="w-full border px-5 py-3 rounded-md">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-3">
					<div
						className={cn("size-3 rounded-full", {
							"bg-red-500": task.priority === "high",
							"bg-yellow-500": task.priority === "medium",
							"bg-green-500": task.priority === "low",
						})}
					></div>
					<h1 className={cn({ "line-through": task.isCompleted })}>
						{task.title}
					</h1>
				</div>
				<div className="flex items-center justify-between">
					<Button
						variant={"link"}
						onClick={() => dispatch(deleteTask(task.id))}
					>
						<Trash />
					</Button>
					<EditTaskModal task={task} />
					<Checkbox
						className="m-3"
						checked={task.isCompleted}
						onClick={() => dispatch(toggleComplete(task.id))}
					/>
				</div>
			</div>
			<div>
				<p>{task.description}</p>
			</div>
		</div>
	);
}
