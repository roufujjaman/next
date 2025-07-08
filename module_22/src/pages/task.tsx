import { useAppSelector } from "@/app/hooks";
import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { selectTasks } from "@/features/task/taskSlice";

export default function Task() {
	const tasks = useAppSelector(selectTasks);

	console.log("tasks", tasks);
	return (
		<>
			<div className="flex justify-between mx-auto max-w-3xl items-center my-5">
				<h1>Tasks</h1>
				<AddTaskModal />
			</div>
			<div className="space-y-5">
				{tasks.map((task) => (
					<TaskCard task={task} key={task.id} />
				))}
			</div>
		</>
	);
}
