const controller = require("../controller/starsController") 
const express = require("express")

const router = express.Router()

//READ
router.get("/stars", controller.findAllStars)
router.get("/stars/:id", controller.findStarById)

//CREATE
router.post("/stars/create", controller.createStar)

//UPDATE 
router.put("/stars/update/:id", controller.updateStarById)
router.patch("/stars/modify/:id", controller.usernameModifyById)

//DELETE
router.delete("/stars/delete/:id", controller.deleteStarById)

module.exports = router 