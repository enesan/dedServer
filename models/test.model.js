
const Sequelize = require('sequelize')


module.exports = function(sequelize) {
    return sequelize.define("test", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
        }
    });
}
