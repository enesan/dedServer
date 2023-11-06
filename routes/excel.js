const express = require("express")
const controller = require('../controllers/excel.controller')
const router = express.Router()


router.get('/', controller.makeTest)

module.exports = router