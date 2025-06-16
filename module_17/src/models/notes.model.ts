import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
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
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export const Notes = mongoose.model('Note', noteSchema);