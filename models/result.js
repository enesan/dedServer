import {sequelize} from "../app";
import {cast, Model, UUID} from "sequelize";
import {Test} from "./test";

const Sequelize = require('sequelize')


export class Result extends Model {
}

Result.init({
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
        },
        question_id: {
            type: Sequelize.UUID
        },
        answer_id: {
            type: Sequelize.UUID
        },
        question_text: {
            type: Sequelize.STRING
        },
        answer_text: {
            type: Sequelize.STRING
        }
    },
    {
        sequelize,
        modelName: "question"
    });
Result.hasOne(Test);