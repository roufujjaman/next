// book (objectId) — Mandatory. References the borrowed book’s ID.
// quantity (number) — Mandatory. Positive integer representing the number of copies borrowed.
// dueDate (date) — Mandatory. The date by which the book must be returned.

import { model, MongooseError, Schema } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interfaces";
import { Book } from "./book.models";


const borrowSchema = new Schema<IBorrow>({
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, "Minimum quantity to borrow: 1"]
    },
    dueDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (borrowDate) {
                return borrowDate >= new Date();
            },
            message: "Invalid Borrow Date"
        }
    }
}, {
    timestamps: true,
    versionKey: false
})

borrowSchema.pre("save", async function (next) {
    try {
        const book = await Book.findById(this.book);

        if (book) {
            book.copies -= this.quantity;
            book.save();
        } else {
            next(new Error("Book Not Found"))
        }

        next();
    } catch (err) {

    }
});
export const Borrow = model<IBorrow>("Borrow", borrowSchema);