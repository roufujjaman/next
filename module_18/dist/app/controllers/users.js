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
const zod_1 = require("zod");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const UserZod = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    age: zod_1.z.number(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    role: zod_1.z.string().optional()
});
userRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = req.body;
    // const user = await User.create(data);
    // await user.save();
    // res.status(201).json(
    //     {
    //         "message": "✅ USER CREATED",
    //         user
    //     }
    // );
    try {
        // const data = await UserZod.parseAsync(req.body);
        const data = req.body;
        const user = yield users_model_1.User.create(data);
        res.status(201).json({
            "success": true,
            "message": "✅ USER CREATED",
            user
        });
    }
    catch (error) {
        res.status(400).json({
            "success": false,
            "message": "❌ CAN'T CREATE  A USER",
            error
        });
    }
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
    console.log(userId);
    const user = yield users_model_1.User.findById(userId);
    res.status(201).json({
        "message": "✅ SINGLE USER DATA",
        user
    });
}));
userRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = yield users_model_1.User.findByIdAndUpdate(userId, userData, { new: true });
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
