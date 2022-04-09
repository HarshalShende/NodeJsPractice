const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayHello", () => {
    console.log("Hello Brother");
});

event.on("sayHello", () => {
    console.log("How Are You Brother");
});

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and page is ${msg}`);
});

event.emit("sayHello");
event.emit("checkPage", 200, "ok");