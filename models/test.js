import {sequelize} from "../app";
const Sequelize = require('sequelize')
import {Question} from './question'

const Test = sequelize.define("test", {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
    }
});
Test.hasMany(Question, {onDelete:"cascade"});