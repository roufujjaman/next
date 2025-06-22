import { Request, Response, Router } from "express";
import { Borrow } from "../models/borrow.models";
import { Book } from "../models/book.models";

export const borrowRouter = Router();

borrowRouter.post("/", async (req: Request, res: Response) => {

    try {
        const data = req.body;


        const borrw = await Borrow.create(req.body);

        res.status(200).json(
            {
                "success": true,
                "message": "Book borrowed successfully",
                "data": borrw
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                "message": "Faile to borrow book",
                "success": false,
                error
            }
        )
    }
})