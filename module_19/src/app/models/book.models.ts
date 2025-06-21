import { model, MongooseOptions, SaveOptions, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interfaces";

export const BookGenre = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY"
];

const BookSchema = new Schema<IBook>({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: {
        type: String,
        trim: true,
        required: true,
        enum: BookGenre
    },
    isbn: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: { type: String, trim: true },
    copies: { type: Number, required: true },
    available: { type: Boolean, required: true, default: true }
}, {
    timestamps: true,
    versionKey: false
});

export const Book = model<IBook>("Book", BookSchema);

