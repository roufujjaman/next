import express from "express";
import { bookRouter } from "./app/controllers/books.controllers";
import { borrowRouter } from "./app/controllers/borrow.controllers";

export const app = express();
app.use(express.json());

app.use("/api/books", bookRouter);
app.use("/api/borrow", borrowRouter)