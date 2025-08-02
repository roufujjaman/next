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
exports.bookRoute = void 0;
const express_1 = require("express");
const book_model_1 = require("../models/book.model");
exports.bookRoute = (0, express_1.Router)();
exports.bookRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.Book.create(req.body);
        res.status(200).json({
            success: true,
            message: "Book Created Successfully",
            data: book,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Book Isn't Created",
            error: err,
        });
    }
}));
exports.bookRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const filters = {
            filter: req.query.filter | null,
        };
        if (query.filter) {
        }
        console.log(typeof query);
        console.log(query);
        const books = yield book_model_1.Book.find({});
        res.status(200).json(books);
    }
    catch (err) { }
}));
exports.bookRoute.get("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const book = yield book_model_1.Book.findOne({ _id: bookId });
        if (!book) {
        }
        res.status(200).json({
            success: true,
            message: "Book Retrieved Successfully",
            data: book,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Book isn't found",
            error: err,
        });
    }
}));
