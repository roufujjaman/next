import express, { Request, Response } from "express";
import { bookRoute } from "./app/controllers/book.controller";

export const app = express();

app.use(express.json());

app.use("/api/books", bookRoute);

app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		message: "working",
	});
});
