import express, { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";

const app = express();

app.use(express.json());

const dbFile = path.join(__dirname, "../src/db/db.json");
console.log(dbFile);

app.get("/", (req: Request, res: Response) => {
    console.log(req);
    res.send("Welcome, TODOS");
});

app.get("/todos", (req: Request, res: Response) => {
    const data = fs.readFileSync(dbFile, { encoding: "utf-8" });

    console.log(data);
    res.json(data);
})

app.post("/todo/create", (req: Request, res: Response) => {
    const data: any = req.body;


    console.log(typeof data);

    res.send("data created");
})

export default app;