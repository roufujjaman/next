import mongoose from "mongoose";
import { app } from "./app";

async function main(local = true) {
	try {
		if (local) {
			await mongoose.connect(`mongodb://localhost:27017/lbms`);

			console.log("✅ Connected to MongoDB (local server)");
		} else {
			await mongoose.connect(
				`mongodb+srv://${process.env.MONGO_USER_ID}:${process.env.MONGO_USER_PASS}@cluster0.ajfqpxx.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0`
			);
			console.log("✅ Connected to MongoDB (server)");
		}
	} catch (err) {
		console.log("❌Could not connect to MongoDB");
		console.log(err);
	}
	app.listen(process.env.PORT, (err) => {
		console.log(`✅ APP IS LISTENING AT PORT: ${process.env.PORT}`);
	});
}

main(true);
