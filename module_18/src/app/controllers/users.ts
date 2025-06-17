import express, { Request, Response } from "express";
import { User } from "../models/users.model";
import { Notes } from "../models/notes.model";

const userRouter = express.Router();

userRouter.post("/", async (req: Request, res: Response) => {
    const data = req.body;
    const user = await User.create(data);
    await user.save();

    res.status(201).json(
        {
            "message": "✅ USER CREATED",
            user
        }
    );
});

userRouter.get("/", async (req: Request, res: Response) => {
    const users = await User.find();

    res.status(201).json(
        {
            "message": "✅ ALL USERS",
            users
        }
    );
});

userRouter.get("/:id", async (req: Request, res: Response) => {
    const userId = req.params.id;
    console.log(userId);
    const user = await User.findById(userId);

    res.status(201).json(
        {
            "message": "✅ SINGLE USER DATA",
            user
        }
    );
});

userRouter.patch("/:id", async (req: Request, res: Response) => {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });

    res.status(201).json({
        "message": "✅ USER DATA UPDATED",
        updatedUser
    });
});

userRouter.delete("/:id", async (req: Request, res: Response) => {
    const userID = req.params.id;
    await Notes.findByIdAndDelete(userID);

    res.status(201).json({
        "message": "❌ USER DELTED"
    });
});

export { userRouter };