
const Sequelize = require('sequelize')

let test = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    owner: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}

module.exports = function(sequelize) {
    return sequelize.define("tests", test);
}

module.exports.test = test;