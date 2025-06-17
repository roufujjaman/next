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
const express_1 = __importDefault(require("express"));
const notes_model_1 = require("../models/notes.model");
const router = express_1.default.Router();
// testing middleware
const timeLog = (req, res, next) => {
    console.log("Request Time: ", Date.now());
    next();
};
router.use(timeLog);
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(typeof data);
    const note = yield notes_model_1.Notes.create(data);
    yield note.save();
    res.status(201).json({
        message: "✅ Note Created",
        note
    });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield notes_model_1.Notes.find();
    res.status(201).json({
        message: "📝 All Notes",
        notes
    });
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteID = req.params.id;
    try {
        const note = yield notes_model_1.Notes.findById(noteID);
        res.status(201).json({
            message: "📝 Single Note",
            note
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "❌ Invalid ID",
        });
    }
}));
router.get("/title/:title", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteTitle = req.params.title;
    const note = yield notes_model_1.Notes.findOne({ title: noteTitle });
    res.status(201).json({
        message: "📝 Single Note",
        note
    });
}));
router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteID = req.params.id;
    const data = req.body;
    try {
        const note = yield notes_model_1.Notes.findByIdAndUpdate(noteID, data, { new: true });
        res.status(201).json({
            message: "✅ UPDATED",
            note
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "❌ ID NOT FOUND"
        });
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteID = req.params.id;
    const note = yield notes_model_1.Notes.findByIdAndDelete(noteID);
    res.status(201).json({
        message: "✅ DELETED",
        note
    });
}));
exports.default = router;
