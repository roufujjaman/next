import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

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
		copies: {
			type: Number,
			required: true,
			validate: {
				validator: function (values) {
					return values >= 0;
				},
				message: "INVALID COPIES NUMBER",
			},
		},
		available: {
			type: Boolean,
			default: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

export const Book = model<IBook>("Book", BookSchema);
