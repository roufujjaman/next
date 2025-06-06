import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@cluster0.ajfqpxx.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0`;
export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});