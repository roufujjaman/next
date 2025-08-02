import mongoose from "mongoose";
import { app } from "./app";

const PORT = 3000;

async function main() {
	try {
		await mongoose.connect("mongodb://localhost:27017/lbms");
	} catch (err) {
		console.log(err);
	}

	app.listen(PORT, () => {
		console.log(`The server is listening at PORT: ${PORT}`);
	});
}

main();
