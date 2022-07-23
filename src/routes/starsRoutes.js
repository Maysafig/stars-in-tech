const controller = require("../controller/starsController") 
const express = require("express")

const router = express.Router()

router.post("/stars", controller.createStar)
router.get("/stars", controller.findAllStars)

module.exports = router 