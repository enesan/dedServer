const Sequelize = require('sequelize')

let question = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    text: {
        type: Sequelize.STRING
    },
    paragraph: {
        type: Sequelize.INTEGER
    }
};

module.exports = function (sequelize) {
   return sequelize.define("questions", question,
        {
            tableName: "questions"
        }
    );
}

module.exports.question = question



