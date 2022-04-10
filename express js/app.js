const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello From Other Side");
});

app.get("/about", (req, res) => {
    res.send("Hello From About Page");
});

app.listen(8000, () => {
    console.log("listening");
})