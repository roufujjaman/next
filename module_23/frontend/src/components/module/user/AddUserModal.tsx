import { useAppDispatch } from "@/app/hook";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/features/user/userSlice";
import type { IUser } from "@/types";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

export function AddUserModal() {
	const [open, setOpen] = useState(false);
	const form = useForm();

	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		dispatch(addUser(data as IUser));
		setOpen(false);
		form.reset();
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>Add User</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add User</DialogTitle>
					<DialogDescription>Add a user</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											{...field}
											value={field.value || ""}
											placeholder="Insert your name"
										></Input>
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="mt-3">
							<Button type="submit">Submit</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
