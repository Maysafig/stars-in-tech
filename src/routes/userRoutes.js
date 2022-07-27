const controller = require("../controller/userController")
const express = require("express")

const router = express.Router()

router.get("/users", controller.findAllUsers)
router.get("/user/:id", controller.findUserById)
router.post("/user", controller.createUser)
router.post("/user/login", controller.login)
router.put("/user/update/:id", controller.UpdateUser)
router.delete("/user/delete/:id", controller.deleteUser)



module.exports = router