const db = require('../db').db
const seq = require('sequelize')

module.exports.create = async function(req, res) {
    await db.tests.create({
        id: seq.UUID.
    })
}