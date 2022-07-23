const UserModel = require("../models/userModel")

const createUser = async (req, res) => {
    try {
        const { nome, areaInteresse, github, email } = req.body

        const newUser = new UserModel({
            nome, areaInteresse, github, email
        })

        const savedUser = await newUser.save()

        res.status(201).json(savedUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find()
        res.status(200).json(allUsers)
    } catch(error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createUser,
    findAllUsers
}