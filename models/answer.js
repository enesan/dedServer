const {Sequelize, Model} = require ('sequelize')
import {sequelize} from "../app";


export class Answer extends Model {}
Answer.init( {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
    },
    text: {
        type: Sequelize.STRING
    },
    is_right: {
        type: Sequelize.BOOLEAN
    }
},
    {
        sequelize,
        modelName: "answer"
    })
sequelize.sync().then(result=>console.log(result))
    .catch(err=> console.log(err));