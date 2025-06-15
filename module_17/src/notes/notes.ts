import express, { json, NextFunction, Request, Response } from "express";
import mongoose, { mongo } from "mongoose";

const router = express.Router();

// testing middleware
const timeLog = (req: Request, res: Response, next: NextFunction) => {
    console.log("Request Time: ", Date.now());
    next();
}

router.use(timeLog);

const noteSchema = new mongoose.Schema(
    {
        title: String,
        content: String
    }
)
const Note = mongoose.model('Note', noteSchema);

router.post("/create", async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const note = new Note({
        title: title,
        content: content
    });
    await note.save();
    console.log(note);
    res.send("all todos");
})

export default router;