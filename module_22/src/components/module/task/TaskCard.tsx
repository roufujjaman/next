import { useAppDispatch } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { deleteTask, toggleCompleteTask } from "@/features/task/taskSlice";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
	task: ITask;
}

export default function TaskCard({ task }: IProps) {
	const dispatch = useAppDispatch();

	return (
		<>
			<div className="max-w-3xl mx-auto border px-5 py-3 rounded-md">
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center">
						<div
							className={cn("size-3 rounded-full", {
								"bg-green-500": task.priority == "Low",
								"bg-amber-500": task.priority == "Medium",
								"bg-red-500": task.priority == "High",
							})}
						></div>
						<h1 className={cn({ "line-through": task.isCompleted })}>
							{task.title}
						</h1>
					</div>

					<div className="flex gap-3 items-center">
						<Button
							variant="link"
							onClick={() => dispatch(deleteTask(task.id))}
						>
							<Trash2 />
						</Button>
						<Checkbox
							checked={task.isCompleted}
							onClick={() => dispatch(toggleCompleteTask(task.id))}
						/>
					</div>
				</div>
				<p className="mt-5">{task.description}</p>
			</div>
		</>
	);
}
