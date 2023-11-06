const Sequelize = require('sequelize')

let result = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    questionId: {
        type: Sequelize.INTEGER
    },
    answerId: {
        type: Sequelize.INTEGER
    },
    question_text: {
        type: Sequelize.STRING
    },
    answer_text: {
        type: Sequelize.STRING
    }
}

module.exports = function(sequelize){
    return sequelize.define("results",
        result
    );
}

module.exports.result = result
