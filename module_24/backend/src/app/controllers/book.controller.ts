import { Request, Response, Router } from "express";
import { Book } from "../models/book.model";

export const bookRoute = Router();

bookRoute.post("/", async (req: Request, res: Response) => {
	try {
		const book = await Book.create(req.body);
		res.status(200).json({
			success: true,
			message: "Book Created Successfully",
			data: book,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Book Isn't Created",
			error: err,
		});
	}
});

type query = {
	filter: string | null;
	sortBy: string;
	sort: "ASC" | "DESC";
	limit: number;
};

bookRoute.get("/", async (req: Request<query>, res: Response) => {
	try {
		const query = req.query;

		const filters: query = {
			filter: req.query.filter | null,
		};

		if (query.filter) {
		}

		console.log(typeof query);

		console.log(query);
		const books = await Book.find({});
		res.status(200).json(books);
	} catch (err) {}
});

bookRoute.get("/:bookId", async (req: Request, res: Response) => {
	try {
		const bookId = req.params.bookId;

		const book = await Book.findOne({ _id: bookId });

		if (!book) {
		}

		res.status(200).json({
			success: true,
			message: "Book Retrieved Successfully",
			data: book,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Book isn't found",
			error: err,
		});
	}
});
