import express, { Request, Response } from "express";
import { bookRouter } from "./app/controllers/books.controllers";

export const app = express();
app.use(express.json());

app.use("/api/books", bookRouter);