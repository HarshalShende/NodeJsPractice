const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello From Other Side");
});

app.get("/about", (req, res) => {
    res.write("Hello From About Page");
    res.write("Hello From About Page");
    res.send();
});

app.get("/contact", (req, res) => {
    res.send({
        id: 1,
        name: "harshal",
    });
});

app.get("/services", (req, res) => {
    res.json([{
            id: 1,
            name: "harshal",
        },
        {
            id: 2,
            name: "sha",
        },
    ]);
});

app.listen(8000, () => {
    console.log("listening");
})