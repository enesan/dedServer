const {UserDto} = require("../dtos/user.dto");
const db = require('../db').db


module.exports.login = async function(req, res) {
    try{
        let user  = await db.users.findOne({
                where: {login: req.body.login},
                rejectOnEmpty: true
            });


    } catch (e){
        if (e.name === "SequelizeEmptyResultError") {
            console.log("User doesn't exist: " + e.message)
            res.send("User doesn't exist: " + e.message).sendStatus(304)
        }
        else {
            console.log("Server error: " + e.message)
            res.send("Server error: " + e.message).sendStatus(500)
        }

    }
}

module.exports.register = async function (req, res) {
    try{
        let user  = await db.users.findOne({where: {login: req.body.login}});

        if (user ===  null){
            user = (new UserDto().setUser(req.body.login, req.body.password,
                req.body.name, req.body.group));

            await db.users.create(user)
            res.send("User created successfully").sendStatus(200);
        }
        else
            res.send("User found").sendStatus(304);

    } catch (e){
        console.log("Server error: " + e.message)
        res.send("Server error: " + e.message).sendStatus(500)
    }
}

