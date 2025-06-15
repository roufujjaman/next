import app from "./app";
import mongoose from "mongoose";

const PORT = 3000;

main();

async function main() {

    try {
        await mongoose.connect(`mongodb+srv://roufujjaman:${process.env.USER_PASS}@cluster0.ajfqpxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("mongoose connected");
    } catch (error) {
        console.log(error);
    }

    await app.listen(PORT, () => {
        console.log(`✅ Server Listening At Port: ${PORT}`);
    })
}