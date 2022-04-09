const fs = require("fs");
const http = require("http");

const server = http.createServer();


//  old approach
// server.on("request", (req, res) => {
//     fs.readFile("hello.txt", (err, data) => {
//         if (err) return console.error(err);
//         res.end(data.toString());
//     });
// });

// 2nd way

// server.on("request", (req, res) => {

//     const rstream = fs.createReadStream("hello.txt");

//     rstream.on("data", (chunkdata) => {
//         res.write(chunkdata);
//     });
//     rstream.on("end", () => {
//         res.end();
//     });
//     rstream.on("error", (err) => {
//         console.log(err);
//         res.end("file Not Found");
//     });
// });


// 3rd way
server.on("request", (req, res) => {

    const rstream = fs.createReadStream("hello.txt");
    rstream.pipe(res);
});



server.listen(8000, "127.0.0.1");