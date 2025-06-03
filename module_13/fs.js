const fs = require("node:fs");

const data = fs.readFileSync("./hello.txt", {encoding: "utf-8"});


console.log(data);