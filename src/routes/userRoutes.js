const controller = require("../controller/userController")
const express = require("express")

const router = express.Router()

router.post("/users", controller.createUser)
router.get("/users", controller.findAllUsers)

module.exports = router