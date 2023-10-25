const express = require('express')
const controller = require("../controllers/analytics")
const router = express.Router()

router.get("/overview", controller.overview)
router.get("/", controller.analytics)



module.exports = router