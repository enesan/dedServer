const {Answer} = require("../models/answer.model");
const {answers} = require("../db");


module.exports.getAll = async function(req,res) {
        await answers.findAll().then(result => {
            console.log(result)
        })
}

module.exports.create = function(req, res) {

}