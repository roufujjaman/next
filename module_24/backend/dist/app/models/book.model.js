"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
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
}, {
    versionKey: false,
    timestamps: true,
});
exports.Book = (0, mongoose_1.model)("Book", BookSchema);
