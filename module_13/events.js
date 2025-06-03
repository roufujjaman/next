const EventEmitter = require("node:events");

class Submission extends EventEmitter {};


const submission = new Submission();

submission.on("50", () =>
    console.log("it's half done")
);

submission.on("75", () =>
    console.log("it's almost done")
);

submission.on("100", () =>
    console.log("it's finally done")
);

submission.emit("50");
submission.emit("100");