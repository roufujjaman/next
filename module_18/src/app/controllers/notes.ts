import express, { NextFunction, Request, Response } from "express";
import { Notes } from "../models/notes.model";

const notesRouter = express.Router();

// testing middleware
const timeLog = (req: Request, res: Response, next: NextFunction) => {
    console.log("Request Time: ", Date.now());
    next();
}

notesRouter.use(timeLog);


notesRouter.post("/", async (req: Request, res: Response) => {
    const data = req.body;

    const note = await Notes.create(data);

    await note.save();

    res.status(201).json({
        message: "✅ Note Created",
        note
    })
})

notesRouter.get("/", async (req: Request, res: Response) => {
    const notes = await Notes.find().populate("user");

    res.status(201).json({
        message: "📝 All Notes",
        notes
    })
})

notesRouter.get("/:id", async (req: Request, res: Response) => {
    const noteID = req.params.id;

    try {
        const note = await Notes.findById(noteID);

        res.status(201).json({
            message: "📝 Single Note",
            note
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "❌ Invalid ID",
        })
    }
})

notesRouter.get("/title/:title", async (req: Request, res: Response) => {
    const noteTitle = req.params.title;

    const note = await Notes.findOne({ title: noteTitle });
    res.status(201).json({
        message: "📝 Single Note",
        note
    })

})

notesRouter.patch("/:id", async (req: Request, res: Response) => {
    const noteID = req.params.id;
    const data = req.body;

    try {
        const note = await Notes.findByIdAndUpdate(noteID, data, { new: true });
        res.status(201).json({
            message: "✅ UPDATED",
            note
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "❌ ID NOT FOUND"
        })
    }
})

notesRouter.delete("/:id", async (req: Request, res: Response) => {
    const noteID = req.params.id;


    const note = await Notes.findByIdAndDelete(noteID);
    res.status(201).json({
        message: "✅ DELETED",
        note
    })

})

export { notesRouter };