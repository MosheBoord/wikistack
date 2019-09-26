const express = require("express");
const morgan = require("morgan");
const { db } = require("./models");

const app = express();

db.authenticate().
    then(() => {
        console.log("connected to the database");
    });


app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send(require("./views/main.js")());
});

const port = 1300;
app.listen(port);
