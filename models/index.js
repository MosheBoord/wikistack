const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
    logging: false
});

const Page = db.define("Page", require("./page.js"));
const User = db.define("User", require("./user.js"));

module.exports = {
    db, Page, User
};
