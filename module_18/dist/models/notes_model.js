"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const noteSchema = new mongoose_1.default.Schema({
    title: { type: String, require: true, trim: true },
    content: { type: String, default: "" },
    category: {
        type: String,
        enum: ["personal", "idea", "study", "other"],
        default: "other"
    },
    pinned: { type: Boolean, default: false },
    tags: {
        label: { type: String, required: true },
        color: { type: String, default: "black" }
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.Notes = mongoose_1.default.model('Note', noteSchema);
