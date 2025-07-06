import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
	task: ITask;
}

export default function TaskCard({ task }: IProps) {
	return (
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
					<h1>{task.title}</h1>
				</div>
				<div className="flex gap-3 items-center">
					<Button variant="link">
						<Trash2 />
					</Button>
					<Checkbox />
				</div>
			</div>
			<p className="mt-5">{task.description}</p>
		</div>
	);
}
