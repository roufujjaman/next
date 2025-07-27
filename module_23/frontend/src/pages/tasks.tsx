import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import { TaskCard } from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/features/api/baseApi";

export default function Task() {
	const { data, isLoading, isError } = useGetTaskQuery(undefined, {
		pollingInterval: 30000,
		refetchOnFocus: true,
		refetchOnMountOrArgChange: true,
		refetchOnReconnect: true,
	});

	if (isLoading) {
		<p>Loading...</p>;
	}
	return (
		<>
			<div className="mx-auto max-w-7xl px-5">
				<div className="flex justify-between items-center">
					<h1>Tasks</h1>
					<Tabs defaultValue="high">
						<TabsList>
							<TabsTrigger value="all">All</TabsTrigger>
							<TabsTrigger value="low">Low</TabsTrigger>
							<TabsTrigger value="medium">Midum</TabsTrigger>
							<TabsTrigger value="high">High</TabsTrigger>
						</TabsList>
					</Tabs>
					<AddTaskModal />
				</div>
				<div className="space-y-5 mt-5">
					{!isLoading &&
						data.tasks.map((task) => <TaskCard task={task} key={task._id} />)}
				</div>
			</div>
		</>
	);
}
