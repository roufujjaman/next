import { useAppSelector } from "@/app/hook";
import { TaskCard } from "@/components/module/task/TaskCard";
import { selectTask } from "@/features/task/taskSlice";

export default function Task() {
	const tasks = useAppSelector(selectTask);
	console.log(tasks);
	return (
		<>
			<div>
				<div>
					<h1>Tasks</h1>
				</div>
				<div>
					<TaskCard />
				</div>
			</div>
		</>
	);
}
