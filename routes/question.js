const express = require('express')
const controller = require("../controllers/question")
const router = express.Router()

router.post("/overview", controller.create)
router.get("/", controller.getAll)



module.exports = router