const express = require('express')
const controller = require("../controllers/question")
const router = express.Router()

router.get("/overview", controller.overview)
router.get("/", controller.analytics)



module.exports = router