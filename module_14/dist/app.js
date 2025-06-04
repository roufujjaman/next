"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const dbFile = node_path_1.default.join(__dirname, "../src/db/db.json");
console.log(dbFile);
app.get("/", (req, res) => {
    console.log(req);
    res.send("Welcome, TODOS");
});
app.get("/todos", (req, res) => {
    const data = node_fs_1.default.readFileSync(dbFile, { encoding: "utf-8" });
    console.log(data);
    res.json(data);
});
app.post("/todo/create", (req, res) => {
    const data = req.body;
    console.log(typeof data);
    res.send("data created");
});
exports.default = app;
