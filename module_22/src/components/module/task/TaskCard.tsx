import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Trash } from "lucide-react";

interface IProps {
	task: ITask;
}

export function TaskCard({ task }: IProps) {
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
					<h1>{task.title}</h1>
				</div>
				<div>
					<Button>
						<Trash />
					</Button>
				</div>
			</div>
			<div>
				<p>{task.description}</p>
			</div>
		</div>
	);
}
