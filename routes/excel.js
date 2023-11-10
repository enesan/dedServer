const express = require("express")
const controller = require('../controllers/excel.controller')
const router = express.Router()
const passport = require('passport')


router.get('/', passport.authenticate('jwt', {session: false}), controller.makeTest)


module.exports = router