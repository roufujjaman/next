import { useAppDispatch } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Dialog,
	DialogClose,
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
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent } from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addData } from "@/features/task/taskSlice";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { SelectTrigger } from "@radix-ui/react-select";
import { format } from "date-fns/format";
import { CalendarIcon } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

export function AddTaskModal() {
	const form = useForm();

	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		dispatch(addData(data as ITask));
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Add Task</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogDescription className="sr-only">
					Fillup this form to add task
				</DialogDescription>
				<DialogHeader>
					<DialogTitle>Add Task</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input {...field} value={field.value || ""} />
									</FormControl>
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
										<Textarea {...field} value={field.value || ""} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="dueDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Due Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														" pl-3 text-left font-normal",
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
												disabled={(date) =>
													date < new Date() || date < new Date("1900-01-01")
												}
												captionLayout="dropdown"
											/>
										</PopoverContent>
									</Popover>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="priority"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Select Priority</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Priority" />
											</SelectTrigger>
										</FormControl>
										<SelectContent className="my-5">
											<SelectItem value="Low">Low</SelectItem>
											<SelectItem value="Medium">Medium</SelectItem>
											<SelectItem value="High">High</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter>
							<DialogClose asChild>
								<Button variant="outline">Cancel</Button>
							</DialogClose>
							<Button type="submit">Save changes</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
