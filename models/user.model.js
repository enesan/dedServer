const Sequelize = require('sequelize')


module.exports = function (sequelize) {
    return sequelize.define("user", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING
            },
            group: {
                type: Sequelize.INTEGER
            }
        }
    )
}
