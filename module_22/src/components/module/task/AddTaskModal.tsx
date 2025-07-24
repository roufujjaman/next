import { useAppDispatch, useAppSelector } from "@/app/hook";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addTask } from "@/features/task/taskSlice";
import { selectUsers } from "@/features/user/userSlice";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { format } from "date-fns/format";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

export function AddTaskModal() {
	const [open, setOpen] = useState(false);
	const form = useForm();

	const dispatch = useAppDispatch();

	const users = useAppSelector(selectUsers);

	console.log(users);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		dispatch(addTask(data as ITask));
		setOpen(false);
		form.reset();
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				{/* <Button variant="outline">Add Task</Button> */}
				<Button>Add Task</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Task</DialogTitle>
					<DialogDescription>Add task to your todo list</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											{...field}
											value={field.value || ""}
											placeholder="Write your title here"
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											value={field.value || ""}
											placeholder="Write your description here"
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="priority"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Priority</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl className="w-full">
											<SelectTrigger>
												<SelectValue placeholder="Select priority" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="high">High</SelectItem>
											<SelectItem value="medium">Medium</SelectItem>
											<SelectItem value="low">Low</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="dueDate"
							render={({ field }) => (
								<FormItem className="my-2">
									<FormLabel>Due Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-[240px] pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												// disabled={(date) =>
												// 	date > new Date() || date < new Date("1900-01-01")
												// }
												captionLayout="dropdown"
											/>
										</PopoverContent>
									</Popover>
									<FormDescription>
										Your date of birth is used to calculate your age.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="assignedTo"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Assigned To</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl className="w-full">
											<SelectTrigger>
												<SelectValue placeholder="Select User" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{users.map((user) => (
												<SelectItem value={user.id}>{user.name}</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="mt-3">
							<Button type="submit">Submit</Button>
						</div>
					</form>
				</Form>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
