const controller = require("../controller/userController")
const express = require("express")

const router = express.Router()

//READ
router.get("/users", controller.findAllUsers)
router.get("/users/:id", controller.findUserById)

//CREATE
router.post("/users", controller.createUser)
router.post("/users/login", controller.login)

//UPDATE 
router.put("/users/update/:id", controller.updateUserById)
router.patch("/users/modify/:id", controller.githubUserById)

//DELETE
router.delete("/users/delete/:id", controller.deleteUserById)

module.exports = router