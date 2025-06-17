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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_model_1 = require("../models/users.model");
const notes_model_1 = require("../models/notes.model");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const user = yield users_model_1.User.create(data);
    yield user.save();
    res.status(201).json({
        "message": "✅ USER CREATED",
        user
    });
}));
userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_model_1.User.find();
    res.status(201).json({
        "message": "✅ ALL USERS",
        users
    });
}));
userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const user = yield notes_model_1.Notes.findById(userId);
    res.status(201).json({
        "message": "✅ SINGLE USER DATA",
        user
    });
}));
userRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = yield notes_model_1.Notes.findByIdAndUpdate(userId, userData);
    res.status(201).json({
        "message": "✅ USER DATA UPDATED",
        updatedUser
    });
}));
userRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userID = req.params.id;
    yield notes_model_1.Notes.findByIdAndDelete(userID);
    res.status(201).json({
        "message": "❌ USER DELTED"
    });
}));
