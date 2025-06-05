import express, { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";

export const todoRouter = express.Router();



const dbFile = path.join(__dirname, "../../../src/db/db.json");

todoRouter.get("/todo", (req: Request, res: Response) => {
    const data = fs.readFileSync(dbFile, { encoding: "utf-8" });
    res.json(data);
});

