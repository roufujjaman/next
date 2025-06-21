import mongoose from "mongoose";
import { app } from "./app";

const port = 3000;

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@cluster0.ajfqpxx.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("mongoose connected");
    } catch (error) {
        console.log(error);
    }

    app.listen(port, () => {
        console.log(`✅ APP LISTENING AT PORT ${port}`);
    })
}


main();