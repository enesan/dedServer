const Sequelize = require('sequelize')

let user = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,

    },
    name: {
        type: Sequelize.STRING
    },
    group: {
        type: Sequelize.INTEGER
    },
    test: {
        type:Sequelize.INTEGER
    },
    result : {
        type:Sequelize.INTEGER
    }
}

module.exports = function (sequelize) {
    return sequelize.define("users", user
    );
}

module.exports.user = user
