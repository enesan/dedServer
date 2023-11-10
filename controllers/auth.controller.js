const {UserDto} = require("../dtos/user.dto");
const db = require('../db').db
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.login = async function (req, res) {
    try {
        let user = await db.users.findOne({
            where: {login: req.body.login},
            rejectOnEmpty: true
        });

        const isPasswordRight = bcrypt.compare(req.body.password, user.password);

        if (isPasswordRight) {
            const token = generateToken({
                login: user.login,
                id: user.id
            })

            res.status(200).json({
                token: `Bearer ${token}`
            })


        } else {
            res.sendStatus(401).json({
                message: "Password isn't right"
            })
        }

    } catch (e) {
        if (e.name === "SequelizeEmptyResultError") {
            console.log("User doesn't exist: " + e.message)
            res.send("User doesn't exist: " + e.message)
        } else {
            console.log("Server error: " + e.message)
            res.send("Server error: " + e.message)
        }

    }
}

module.exports.register = async function (req, res) {
    try {
        let user = await db.users.findOne({where: {login: req.body.login}});

        const hashedPassword = genPasswordHash(req.body.password)

        if (user === null) {
            user = (new UserDto().setUser(req.body.login, await hashedPassword,
                req.body.name, req.body.group));

            await db.users.create(user)
            res.sendStatus(201);
        } else
            res.sendStatus(200);

    } catch (e) {
        console.log("Server error: " + e.message)
        res.send("Server error: " + e.message)
    }
}

async function genPasswordHash(password) {
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, await salt)
}

function generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
        });
}