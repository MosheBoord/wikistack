const express = require("express");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const { db } = require("./models/index.js");
const users = require("./models/user");
const pages = require("./models/page");

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const User = db.define("User", users);
const Page = db.define("Page", pages);

(async () => {
    await User.sync({ force: true });
    await Page.sync({ force: true });
    const port = 1300;
    app.listen(port);
})();


db.authenticate().
    then(() => {
        console.log("connected to the database");
    });


app.use(express.static(__dirname + "/public"));

app.use("/wiki", require("./routes/wiki.js"));

app.get("/", (req, res) => {
    res.send(require("./views/main.js")());
});

