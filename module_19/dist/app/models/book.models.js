"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.BookGenre = void 0;
const mongoose_1 = require("mongoose");
exports.BookGenre = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY"
];
const BookSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: {
        type: String,
        trim: true,
        required: true,
        enum: exports.BookGenre
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
exports.Book = (0, mongoose_1.model)("Book", BookSchema);
