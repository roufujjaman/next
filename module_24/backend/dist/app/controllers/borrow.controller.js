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
exports.borrowRouter = void 0;
const express_1 = require("express");
const borrow_model_1 = require("../models/borrow.model");
exports.borrowRouter = (0, express_1.Router)();
exports.borrowRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const borrow = yield borrow_model_1.Borrow.create(data);
        res.status(200).json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    }
    catch (err) {
        if (err.name === "Error") {
            res.status(400).json({
                success: false,
                message: err.message,
                error: err,
            });
        }
        res.status(400).json({
            success: false,
            message: "Book borrow unsuccessfull",
            error: err,
        });
    }
}));
// Columns: Book Title, ISBN, Total Quantity Borrowed
exports.borrowRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrowSummary = yield borrow_model_1.Borrow.find({});
        res.status(200).json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data: borrowSummary,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "Borrowed books summary can't be retrieved",
            error: err,
        });
    }
}));
