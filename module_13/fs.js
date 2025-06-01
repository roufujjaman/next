const fs = require("fs");


let text = "default";

fs.readFile("./hello.txt", {encoding: "utf-8"}, (err, data) => {
    if (err) {
        console.log("something went wrong", err.message);
        return;
    }

    text = data;
    console.log(data);
});

console.log("task 2");
console.log(text);

text = "writing file from node";

fs.writeFile("./hello.txt", text, {encoding: "utf-8"}, (err) => {
    console.log("came here");
    if (err) {
        console.log("could not write the file");
        return;
    }

    // console.log(text);
})

