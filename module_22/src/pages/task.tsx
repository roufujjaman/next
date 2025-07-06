import { useAppSelector } from "@/app/hooks";
import TaskCard from "@/components/module/task/taskCard";
import { selectTasks } from "@/features/task/taskSlice";

export default function Task() {
	const tasks = useAppSelector(selectTasks);

	console.log("tasks", tasks);
	return (
		<>
			<div className="space-y-5">
				{tasks.map((task) => (
					<TaskCard task={task} />
				))}
			</div>
		</>
	);
}
