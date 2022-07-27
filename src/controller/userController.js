const UserModel = require("../models/userModel")

const createUser = async (req, res) => {
    try {
        const { nome, github, email, senha } = req.body

        const newUser = new UserModel({
            nome, github, email, senha
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

const findUserById = async (req, res) => {
    try {
        const findUser = await UserModel.findById(req.params.id)
        res.status(200).json(findUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const UpdateUser = async (req, res) => {
    try {
        const { nome, github, email, senha, administradoraApi } = req.body
        await UserModel.findByIdAndUpdate(req.params.id, { nome, github, email, senha, administradoraApi })

        const updatedUser = await UserModel.findById(req.params.id)
        res.status(200).json(updatedUser)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try { 
    const { id } = req.params
    const findUser = await UserModel.findById(id)

    if (findUser == null)
    return res.status(404).json({ message: `A User com o id ${id} não foi deletada`})

    await findUser.remove()

    res.status(200).json({ message: `A User ${findUser.nome} foi deletada com sucesso.`}) 
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    UpdateUser,
    deleteUser
}