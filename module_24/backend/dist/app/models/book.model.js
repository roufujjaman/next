"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const borrow_model_1 = require("./borrow.model");
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
}, {
    versionKey: false,
    timestamps: true,
});
BookSchema.pre("save", function () {
    this.available = this.copies > 0;
});
BookSchema.post("findOneAndUpdate", function (doc) {
    if (doc) {
        doc.available = doc.copies > 0;
    }
    console.log(this);
});
BookSchema.post("findOneAndDelete", function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(data);
        if (data) {
            console.log(data._id);
            yield borrow_model_1.Borrow.deleteMany({ book: data._id });
        }
    });
});
exports.Book = (0, mongoose_1.model)("Book", BookSchema);
