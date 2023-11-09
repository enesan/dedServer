const db = require('../db').db
const seq = require('sequelize')

module.exports.create = async function(req, res) {
    await db.tests.create({})
}

module.exports.getAll = async function(req,res) {
    await db.tests.get()
}