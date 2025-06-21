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
exports.bookRouter = void 0;
const express_1 = require("express");
const book_models_1 = require("../models/book.models");
exports.bookRouter = (0, express_1.Router)();
exports.bookRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const book = yield book_models_1.Book.create(data);
        res.status(200).json({
            "success": true,
            "message": "Book created successfully",
            "data": book
        });
    }
    catch (error) {
        res.status(500).json({
            "success": true,
            "message": "Book created successfully",
            error
        });
    }
}));
exports.bookRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quries = req.query;
    console.log(quries);
    const books = yield book_models_1.Book.find();
    res.status(200).json({
        "success": true,
        "message": "Books retrieved successfully",
        "data": books
    });
}));
exports.bookRouter.get("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        console.log(bookId);
        const book = yield book_models_1.Book.findById(bookId);
        res.status(200).json({
            "success": true,
            "message": "Book retrieved unsuccessfull",
            "data": book
        });
    }
    catch (err) {
        res.status(404).json({
            "success": false,
            "message": "Book retrieved unsuccessfull",
            "error": err
        });
    }
}));
exports.bookRouter.patch("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = req.body;
        const book = yield book_models_1.Book.findByIdAndUpdate(bookId, data, { new: true });
        res.status(200).json({
            "success": true,
            "message": "Books retrieved successfully",
            "data": book
        });
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            "message": "Book retrieved unsuccessfull",
            "error": error
        });
    }
}));
