const fs = require("fs");

const objData = {
    name: "harshal",
    age: 24,
    salary: 5000
};

// const jsonData = JSON.stringify(objData);
// console.log(jsonData);

// fs.writeFile("jsonData.json", jsonData, (err) => {
//     console.log("file created");
//     console.log(err);
// });

fs.readFile("jsonData.json", "utf8", (err, data) => {
    console.log(JSON.parse(data));
    console.log(err);
})