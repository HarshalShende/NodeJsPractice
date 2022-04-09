const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hello From Server");
    } else if (req.url == "/about") {
        res.end("Hello Form ELse Side")
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end(" <h1>404 Error</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
})