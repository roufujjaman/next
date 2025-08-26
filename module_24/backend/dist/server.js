"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
function main() {
    return __awaiter(this, arguments, void 0, function* (local = true) {
        try {
            if (local) {
                yield mongoose_1.default.connect(`mongodb://localhost:27017/lbms`);
                console.log("✅ Connected to MongoDB (local server)");
            }
            else {
                yield mongoose_1.default.connect(`mongodb+srv://${process.env.MONGO_USER_ID}:${process.env.MONGO_USER_PASS}@cluster0.ajfqpxx.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0`);
                console.log("✅ Connected to MongoDB (server)");
            }
        }
        catch (err) {
            console.log("❌Could not connect to MongoDB");
            console.log(err);
        }
        app_1.app.listen(process.env.PORT, (err) => {
            console.log(`✅ APP IS LISTENING AT PORT: ${process.env.PORT}`);
        });
    });
}
main(true);
