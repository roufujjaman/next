import { Request, Response, Router } from "express";
import { Book, BookGenre } from "../models/book.models";
import { Query } from "mongoose";

export const bookRouter = Router();

bookRouter.post("/", async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const book = await Book.create(data);

        res.status(200).json(
            {
                "success": true,
                "message": "Book created successfully",
                "data": book
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                "success": true,
                "message": "Book created successfully",
                error
            }
        )
    }
})

bookRouter.get("/", async (req: Request, res: Response) => {
    const quries = req.query;
    console.log(quries);

    const books = await Book.find();
    res.status(200).json({
        "success": true,
        "message": "Books retrieved successfully",
        "data": books
    })

})

bookRouter.get("/:bookId", async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        console.log(bookId)
        const book = await Book.findById(bookId);

        res.status(200).json(
            {
                "success": true,
                "message": "Book retrieved unsuccessfull",
                "data": book
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                "success": false,
                "message": "Book retrieved unsuccessfull",
                "error": err
            }
        )
    }
});

bookRouter.patch("/:bookId", async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const data = req.body;

        const book = await Book.findByIdAndUpdate(bookId, data, { new: true });

        res.status(200).json({
            "success": true,
            "message": "Books retrieved successfully",
            "data": book
        })
    } catch (error) {
        res.status(500).json(
            {
                "success": false,
                "message": "Book retrieved unsuccessfull",
                "error": error
            }
        )
    }
})