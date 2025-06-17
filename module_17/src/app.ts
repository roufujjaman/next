import express, { Request, Response } from "express";
import { notesRouter } from "./controllers/notes";
import { userRouter } from "./controllers/users";

const app = express();
app.use(express.json());


app.use("/notes", notesRouter);
app.use("/users", userRouter);

app.get("/", async (req: Request, res: Response) => {
    res.send("<h1>Welcome to TODO</h1>");
})

export default app;