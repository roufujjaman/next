import express, { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import { client } from "../../config/mongo";
import { todo } from "node:test";
import { ObjectId } from "mongodb";

export const todoRouter = express.Router();



const dbFile = path.join(__dirname, "../../../src/db/db.json");

todoRouter.get("/todo", async (req: Request, res: Response) => {
    const db = await client.db("todoDB");
    const collection = await db.collection("todo");

    const cursor = await collection.find({});
    const todos = await cursor.toArray();
    res.json(todos);
});

todoRouter.post("/todo", async (req: Request, res: Response) => {
    const { title, description, priority } = req.body;

    const db = await client.db("todoDB");
    const collection = await db.collection("todo");

    await collection.insertOne(
        {
            "title": title,
            "description": description,
            "priority": priority,
            "isCompleted": false,
            "createdAt": new Date().toISOString()
        }
    );

    res.json("inserted");
})

todoRouter.get("/todo/:id", async (req: Request, res: Response) => {
    const id = req.params.id;

    const db = await client.db("todoDB");
    const collection = await db.collection("todo");

    const todo = await collection.findOne({ _id: new ObjectId(id) });
    res.json(todo);
})

todoRouter.delete("/todo/:id", async (req: Request, res: Response) => {
    const id = req.params.id;

    const db = await client.db("todoDB");
    const collection = await db.collection("todo");

    await collection.deleteOne({ _id: new ObjectId(id) });
    res.json("deleted");
})

todoRouter.patch("/todo/:id", async (req: Request, res: Response) => {
    const id = req.params.id;

    const db = await client.db("todoDB");
    const collection = await db.collection("todo");

    const { title, description, priority, isCompleted } = req.body;

    const filter = { _id: new ObjectId(id) };
    const updatedTodo = await collection.updateOne(
        filter,
        { $set: { title, description, priority, isCompleted } },
        { upsert: true }
    )
    res.json("updated");
})