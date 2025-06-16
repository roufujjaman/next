import express, { NextFunction, Request, Response } from "express";
import { Notes } from "../models/notes.model";

const router = express.Router();

// testing middleware
const timeLog = (req: Request, res: Response, next: NextFunction) => {
    console.log("Request Time: ", Date.now());
    next();
}

router.use(timeLog);


router.post("/", async (req: Request, res: Response) => {
    const data = req.body;
    console.log(typeof data);

    const note = await Notes.create(data);

    await note.save();

    res.status(201).json({
        message: "✅ Note Created",
        note
    })
})

router.get("/", async (req: Request, res: Response) => {
    const notes = await Notes.find();

    res.status(201).json({
        message: "📝 All Notes",
        notes
    })
})

router.get("/:id", async (req: Request, res: Response) => {
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

router.get("/title/:title", async (req: Request, res: Response) => {
    const noteTitle = req.params.title;

    const note = await Notes.findOne({ title: noteTitle });
    res.status(201).json({
        message: "📝 Single Note",
        note
    })

})

router.patch("/:id", async (req: Request, res: Response) => {
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

router.delete("/:id", async (req: Request, res: Response) => {
    const noteID = req.params.id;


    const note = await Notes.findByIdAndDelete(noteID);
    res.status(201).json({
        message: "✅ DELETED",
        note
    })

})

export default router;