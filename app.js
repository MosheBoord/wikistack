const express = require("express");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const { db } = require("./models");
const users = require('./models/user');
const app = express();
app.use(morgan('dev'));

const User = db.define("User", users);

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
