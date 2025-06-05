import express, { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import { todoRouter } from "./toos/todo_router";

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/", todoRouter);




export default app;