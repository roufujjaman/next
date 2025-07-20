import { useAppSelector } from "@/app/hook";
import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import { TaskCard } from "@/components/module/task/TaskCard";
import { selectTask } from "@/features/task/taskSlice";

export default function Task() {
	const tasks = useAppSelector(selectTask);
	console.log(tasks);
	return (
		<>
			<div className="mx-auto max-w-7xl px-5">
				<div className="flex justify-between items-center">
					<h1>Tasks</h1>
					<AddTaskModal />
				</div>
				<div className="space-y-5 mt-5">
					{tasks.map((task) => (
						<TaskCard task={task} key={task.id} />
					))}
				</div>
			</div>
		</>
	);
}
