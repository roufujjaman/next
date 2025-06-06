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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const mongo_1 = require("../../config/mongo");
const mongodb_1 = require("mongodb");
exports.todoRouter = express_1.default.Router();
const dbFile = node_path_1.default.join(__dirname, "../../../src/db/db.json");
exports.todoRouter.get("/todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongo_1.client.db("todoDB");
    const collection = yield db.collection("todo");
    const cursor = yield collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todoRouter.post("/todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    const db = yield mongo_1.client.db("todoDB");
    const collection = yield db.collection("todo");
    yield collection.insertOne({
        "title": title,
        "description": description,
        "priority": priority,
        "isCompleted": false,
        "createdAt": new Date().toISOString()
    });
    res.json("inserted");
}));
exports.todoRouter.get("/todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongo_1.client.db("todoDB");
    const collection = yield db.collection("todo");
    const todo = yield collection.findOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(todo);
}));
exports.todoRouter.delete("/todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongo_1.client.db("todoDB");
    const collection = yield db.collection("todo");
    yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.json("deleted");
}));
exports.todoRouter.patch("/todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongo_1.client.db("todoDB");
    const collection = yield db.collection("todo");
    const { title, description, priority, isCompleted } = req.body;
    const filter = { _id: new mongodb_1.ObjectId(id) };
    const updatedTodo = yield collection.updateOne(filter, { $set: { title, description, priority, isCompleted } }, { upsert: true });
    res.json("updated");
}));
