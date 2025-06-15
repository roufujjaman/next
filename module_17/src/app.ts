import express, { json, NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import notes from "./notes/notes";

const app = express();
app.use(express.json());


app.use("/notes", notes);

app.get("/", async (req: Request, res: Response) => {
    res.send("<h1>Welcome to TODO</h1>");
})




export default app;