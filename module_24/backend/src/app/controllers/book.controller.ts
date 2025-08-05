import { Request, Response, Router } from "express";
import { Book } from "../models/book.model";
import { BookFilterQuery } from "../types/queryParams";
import { parseSortVal } from "../utils/parseSortVal";

export const bookRoute = Router();

bookRoute.post("/", async (req: Request, res: Response) => {
	try {
		const book = await Book.create(req.body);
		res.status(200).json({
			success: true,
			message: "Book Created Successfully",
			data: book,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Book Isn't Created",
			error,
		});
	}
});

bookRoute.get(
	"/",
	async (req: Request<{}, {}, {}, BookFilterQuery>, res: Response) => {
		try {
			const reqQuery = req.query;

			const filter =
				typeof reqQuery.filter === "string"
					? { ["genre"]: reqQuery.filter.toUpperCase() }
					: {};

			const sort =
				typeof reqQuery.sortBy === "string"
					? { [reqQuery.sortBy]: parseSortVal(reqQuery.sort) }
					: {};

			console.log(sort);
			const limit =
				typeof reqQuery.limit === "string" && !isNaN(reqQuery.limit)
					? parseInt(reqQuery.limit)
					: 10;

			const books = await Book.find(filter).sort(sort).limit(limit);

			res.status(200).json({
				success: true,
				message: "Books Retieved Successfully",
				data: books,
			});
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Could Not Retrieve Any Books",
				error,
			});
		}
	}
);

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
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Could Not Retrieve The Books",
			error,
		});
	}
});

bookRoute.put("/:bookId", async (req: Request, res: Response) => {
	try {
		const { bookId } = req.params;
		const { copies, ...otherData } = req.body;

		const book = await Book.findById(bookId);

		if (!book) {
			return res.status(404).json({
				success: false,
				message: "Book Not Found",
			});
		}

		if (copies !== undefined) {
			const parsedCopies = parseInt(copies);

			if (isNaN(parsedCopies)) {
				return res.status(400).json({
					success: false,
					message: "Invalid 'copies' Value",
				});
			}

			book.copies += parsedCopies;
		}

		book.set(otherData);
		await book.save();

		return res.status(200).json({
			success: true,
			message: "Book Updated Successfully",
			data: book,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Could Not Update The Book",
			error,
		});
	}
});

bookRoute.delete("/:bookId", async (req: Request, res: Response) => {
	try {
		const bookId = req.params.bookId;
		const book = await Book.findByIdAndDelete(bookId);

		if (!book) {
			return res.status(404).json({
				success: false,
				message: "Book Not Found",
			});
		}

		return res.status(200).json({
			success: true,
			message: "Book Deleted Successfully",
			data: book,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Could Not Delete The Book",
			error,
		});
	}
});
