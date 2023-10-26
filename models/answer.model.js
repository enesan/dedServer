const Sequelize = require('sequelize')


module.exports = function (sequelize) {
    return sequelize.define("answer", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false
            },
            text: {
                type: Sequelize.STRING(200)
            },
            is_right: {
                type: Sequelize.BOOLEAN
            }
        },
        {
            tableName: "answers"
        })
}

// export class Answer extends Model {
// }
//
// Answer.init({
//         id: {
//             type: Sequelize.UUID,
//             primaryKey: true,
//             allowNull: false
//         },
//         text: {
//             type: Sequelize.STRING
//         },
//         is_right: {
//             type: Sequelize.BOOLEAN
//         }
//     },
//     {
//         sequelize,
//         modelName: "answer"
//     })


