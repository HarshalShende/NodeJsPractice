const fs = require("fs");

// fs.writeFile("index3.txt", "hello", (err) => {
//     console.log("Files Created");
//     console.log(err);
// });

// fs.appendFile("index3.txt", "jai shri ram", (err) => {
//     console.log("text Appended");
//     console.log(err);
// });

fs.readFile('index3.txt', "utf8", (err, data) => {
    console.log(data);
})