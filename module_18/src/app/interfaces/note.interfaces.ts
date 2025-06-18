import { Types } from "mongoose";

export interface INote {
    title: string,
    content: string,
    category: "personal" | "idea" | "study" | "other",
    pinned: boolean,
    tags: {
        label: string,
        color: string
    },
    user: Types.ObjectId;
};