const EventEmitter = require("node:events");


class MyAlarm extends EventEmitter {};

const myAlarm = new MyAlarm();

myAlarm.on("morning", () => {
    console.log("wake up wakeup, go to work");
})

myAlarm.on("noon", () => {
    console.log("focus on your work");
})

myAlarm.on("evening", () => {
    console.log("wrap up your work, time to go home");
})

myAlarm.emit("morning");
myAlarm.emit("evening");