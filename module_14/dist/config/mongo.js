"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const mongodb_1 = require("mongodb");
const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@cluster0.ajfqpxx.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0`;
exports.client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
