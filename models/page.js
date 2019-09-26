const Sequelize = require("sequelize");
module.exports = {
                  title: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                slug: Sequelize.STRING,

                content: Sequelize.STRING,
                status: Sequelize.BOOLEAN
                
            }
