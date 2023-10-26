import {sequelize} from "../app";
import {cast, Model} from "sequelize";
import {Answer} from "./answer";
const Sequelize = require('sequelize')


export class Question extends Model {}
Question.init( {
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
        sequelize,
        modelName: "question"
    });
Question.hasMany(Answer, {onDelete:"cascade"});