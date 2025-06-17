"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
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
exports.Notes = (0, mongoose_1.model)('Note', noteSchema);
