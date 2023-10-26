import {sequelize} from "../app";
import {cast, Model} from "sequelize";
import {Result} from "./result";
const Sequelize = require('sequelize')


export class User extends Model {}
User.init( {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING
        },
        group: {
            type: Sequelize.INTEGER
        }
    },
    {
        sequelize,
        modelName: "question"
    });
User.hasMany(Result, {onDelete:"cascade"});