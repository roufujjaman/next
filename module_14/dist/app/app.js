"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_router_1 = require("./toos/todo_router");
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
// routes
app.use("/", todo_router_1.todoRouter);
exports.default = app;
