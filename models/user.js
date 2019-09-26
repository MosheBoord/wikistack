const Sequelize = require("sequelize");
module.exports = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
            type: Sequelize.STRING,
            primaryKey: true

        }
}
