const fs = require("fs");

// fs.mkdir("index4", (err) => {
//     console.log("folder. created");
// });

// fs.writeFile("index4/index4.txt", "hello", (err) => {
//     console.log("Files Created");
//     console.log(err);
// });


fs.readFile("index4/index4.txt", "utf8", (err, data) => {
    console.log("Files read");
    console.log(data);
});