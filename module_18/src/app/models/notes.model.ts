import { model, Schema, Types } from "mongoose";
import { INote } from "../interfaces/note.interfaces";

const noteSchema = new Schema<INote>(
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
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export const Notes = model('Note', noteSchema);