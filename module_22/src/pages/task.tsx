import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/features/task/taskSlice";

export default function Task() {
	const tasks = useAppSelector(selectTasks);

	const dispatch = useAppDispatch();

	console.log("tasks", tasks);
	return (
		<>
			<div className="flex justify-between mx-auto max-w-3xl items-center my-5">
				<h1>Tasks</h1>
				<Tabs defaultValue="all">
					<TabsList>
						<TabsTrigger
							onClick={() => dispatch(updateFilter("all"))}
							value="all"
						>
							All
						</TabsTrigger>
						<TabsTrigger
							onClick={() => dispatch(updateFilter("high"))}
							value="high"
						>
							High
						</TabsTrigger>
						<TabsTrigger
							onClick={() => dispatch(updateFilter("medium"))}
							value="medium"
						>
							Medium
						</TabsTrigger>
						<TabsTrigger
							onClick={() => dispatch(updateFilter("low"))}
							value="low"
						>
							Low
						</TabsTrigger>
					</TabsList>
				</Tabs>
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
