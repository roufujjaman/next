import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";
import { Borrow } from "./borrow.model";

const BookSchema = new Schema<IBook>(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
			trim: true,
		},
		genre: {
			type: String,
			required: true,
			trim: true,
			uppercase: true,
		},
		isbn: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		description: {
			type: String,
			default: "",
		},
		copies: {
			type: Number,
			required: true,
			validate: {
				validator: function (value) {
					return value >= 0;
				},
				message: "Invalid copies number",
			},
			min: [0, "Invlaid copies number"],
		},
		available: {
			type: Boolean,
			required: true,
			default: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

BookSchema.pre<IBook>("save", function () {
	this.available = this.copies > 0;
});

BookSchema.post("findOneAndUpdate", function (doc: IBook) {
	if (doc) {
		doc.available = doc.copies > 0;
	}
	console.log(this);
});

BookSchema.post("findOneAndDelete", async function (data) {
	console.log(data);

	if (data) {
		console.log(data._id);
		await Borrow.deleteMany({ book: data._id });
	}
});

export const Book = model<IBook>("Book", BookSchema);
