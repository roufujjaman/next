import { Db, MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import { client } from "../config/mongo";

const port = 5000;


async function bootsrap() {
    await client.connect();
    app.listen(port, () => {
        console.log(`✅ Listening At Port:${port}`);
    })
}

bootsrap();
