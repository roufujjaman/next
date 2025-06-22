import { Request, Response, Router } from "express";
import { Book } from "../models/book.models";

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
        res.status(404).json(
            {
                "message": "Book creation failed",
                "success": false,
                error
            }
        )
    }
})

bookRouter.get("/", async (req: Request, res: Response) => {
    try {
        const query = req.query;

        const filter: Record<string, any> = {};
        const sort: Record<string, any> = {};

        if (query.filter && typeof query.filter === "string") {
            filter["genre"] = query.filter.toUpperCase();
        }

        const sortBy = query.sortBy;

        if (query.sortBy && query.sort && typeof sortBy == "string" && typeof query.sort == "string") {
            sort[sortBy] = query.sort.toLowerCase();
        }

        let limit = 10;
        if (typeof query.limit == "string") {
            limit = parseInt(query.limit);
        }

        const books = await Book.find(filter).sort(sort).limit(limit);
        res.status(200).json({
            "success": true,
            "message": "Books retrieved successfully",
            "data": books
        })
    } catch (error) {
        res.status(404).json({
            "success": false,
            "message": "Books retrieved successfully",
            error
        })
    }
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

bookRouter.put("/:bookId", async (req: Request, res: Response) => {
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