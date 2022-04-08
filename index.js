const fs = require("fs");
fs.writeFileSync("read.txt", "welcome Bro");

fs.appendFileSync("read.txt", " Hari Bol");

const buff_data = fs.readFileSync("read.txt");
console.log(buff_data);
const org_data = buff_data.toString();
console.log(org_data);

fs.renameSync("read.txt", "hello.txt");