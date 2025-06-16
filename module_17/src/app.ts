import express, { Request, Response } from "express";
import note from "./controllers/note";

const app = express();
app.use(express.json());


app.use("/note", note);

app.get("/", async (req: Request, res: Response) => {
    res.send("<h1>Welcome to TODO</h1>");
})

export default app;