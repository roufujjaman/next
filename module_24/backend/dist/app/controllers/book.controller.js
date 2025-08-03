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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoute = void 0;
const express_1 = require("express");
const book_model_1 = require("../models/book.model");
const parseSortVal_1 = require("../utils/parseSortVal");
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
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Book Isn't Created",
            error,
        });
    }
}));
exports.bookRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqQuery = req.query;
        const filter = typeof reqQuery.filter === "string"
            ? { ["genre"]: reqQuery.filter.toUpperCase() }
            : {};
        const sort = typeof reqQuery.sortBy === "string"
            ? { [reqQuery.sortBy]: (0, parseSortVal_1.parseSortVal)(reqQuery.sort) }
            : {};
        console.log(sort);
        const limit = typeof reqQuery.limit === "string" && !isNaN(reqQuery.limit)
            ? parseInt(reqQuery.limit)
            : 10;
        const books = yield book_model_1.Book.find(filter).sort(sort).limit(limit);
        res.status(200).json({
            success: true,
            message: "Books Retieved Successfully",
            data: books,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could Not Retrieve Any Books",
            error,
        });
    }
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
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could Not Retrieve The Books",
            error,
        });
    }
}));
exports.bookRoute.put("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const _a = req.body, { copies } = _a, otherData = __rest(_a, ["copies"]);
        const book = yield book_model_1.Book.findById(bookId);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book Not Found",
            });
        }
        if (copies !== undefined) {
            const parsedCopies = parseInt(copies);
            if (isNaN(parsedCopies)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid 'copies' Value",
                });
            }
            book.copies += parsedCopies;
        }
        book.set(otherData);
        yield book.save();
        return res.status(200).json({
            success: true,
            message: "Book Updated Successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could Not Update The Book",
            error,
        });
    }
}));
exports.bookRoute.delete("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const book = yield book_model_1.Book.findByIdAndDelete(bookId);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book Not Found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Book Deleted Successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could Not Delete The Book",
            error,
        });
    }
}));
