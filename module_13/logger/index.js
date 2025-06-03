const path = require("node:path");
const fs = require("node:fs");

const inputArguments = process.argv.slice(2);

if (inputArguments.length < 1) {
    console.log("No Argument Found");
    process.exit(1);
}

const text = inputArguments.join(" ").concat("\n");
const timeStamp = new Date().toISOString();

const message = `${text}-${timeStamp}\n`

const filePath = path.join(__dirname, "log.txt");


fs.appendFile(filePath, message, {encoding: "utf-8"}, () => 
    console.log("Your log added successfully")
);