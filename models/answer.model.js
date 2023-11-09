
const Sequelize = require('sequelize')


let answer = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    text: {
        type: Sequelize.STRING(200)
    },
    is_right: {
        type: Sequelize.BOOLEAN
    }
}

module.exports = function (sequelize) {
    return sequelize.define("answers", 
            answer)
}

module.exports.answer = answer







