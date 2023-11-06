const {createConnection} = require("mysql2");
const {response} = require("express");
const db = require("../db").db
module.exports.login = function(req, res) {

}

module.exports.register = async function (req, res) {
        await db.users.create({
           name: "John",
           group: 6017
       }).then(()=>console.log("i've done"))
    res.send("boba")

}

