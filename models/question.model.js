const Sequelize = require('sequelize')


module.exports = function (sequelize) {
   return sequelize.define("question", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false
            },
            text: {
                type: Sequelize.STRING
            },
            paragraph: {
                type: Sequelize.INTEGER
            }
        },
        {
            tableName: "questions"
        }
    );
}

// export class Question extends Model {
// }
//
// Question.init({
//         id: {
//             type: Sequelize.UUID,
//             primaryKey: true,
//             allowNull: false
//         },
//         text: {
//             type: Sequelize.STRING
//         },
//         paragraph: {
//             type: Sequelize.INTEGER
//         }
//     },
//     {
//         sequelize,
//         modelName: "question"
//     });



