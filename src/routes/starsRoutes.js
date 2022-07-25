const controller = require("../controller/starsController") 
const express = require("express")

const router = express.Router()

router.post("/stars/create", controller.createStar)
router.get("/stars", controller.findAllStars)
router.get("/star/:id", controller.findStarById)
router.put("/star/update/:id", controller.updateStar)
router.delete("/star/delete/:id", controller.deleteStar)

module.exports = router 