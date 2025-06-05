"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
exports.todoRouter = express_1.default.Router();
const dbFile = node_path_1.default.join(__dirname, "../../../src/db/db.json");
exports.todoRouter.get("/todo", (req, res) => {
    const data = node_fs_1.default.readFileSync(dbFile, { encoding: "utf-8" });
    res.json(data);
});
