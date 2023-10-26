const db = require("../db").db

module.exports.getAll = async function(req,res) {
        await db.tests.findAll().then(result => {
            console.log(result[0])
        })
}

module.exports.create = function(req, res) {

}