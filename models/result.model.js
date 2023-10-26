const Sequelize = require('sequelize')




module.exports = function(sequelize){
    return sequelize.define("result",{
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false
            },
            questionId: {
                type: Sequelize.UUID
            },
            answerId: {
                type: Sequelize.UUID
            },
            question_text: {
                type: Sequelize.STRING
            },
            answer_text: {
                type: Sequelize.STRING
            }
        }
    );
}