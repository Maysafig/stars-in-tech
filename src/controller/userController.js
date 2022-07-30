const UserModel = require("../models/userModel")
const {validateToken, admAccess} = require("../controller/authController")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const findUserByToken = async (token)  => {
       const user = await UserModel.findOne({token: token})
       return user
}

const createUser = async (req, res) => {
    try {
        const { name, github, email, password } = req.body
        const passwordHash = bcrypt.hashSync(password, 10)
        const newUser = new UserModel({ name, github, email, password: passwordHash })

        await newUser.save()

        const savedUser = await UserModel.findOne({ email: email }).select(["-token", "-password", "-isAdm"])

        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const findAllUsers = async (req, res) => {
    try {
        await validateToken(req.get("authorization"))
        
        const allUsers = await UserModel.find().select(["-token", "-password", "-isAdm"])
        res.status(200).json(allUsers)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findUserById = async (req, res) => {
    try {
        await validateToken(req.get("authorization"))

        const findUser = await UserModel.findById(req.params.id).select(["-token", "-password", "-isAdm"])
        res.status(200).json(findUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateUserById = async (req, res) => {
    try {
        const { name, github, password } = req.body
        const passwordHash = bcrypt.hashSync(password, 10)
        const token = await validateToken(req.get("authorization"))
 
        let userToken = await findUserByToken(token)
        let userAdm = await admAccess(token)
        if ( userAdm == true || userToken.id == req.params.id) {
            await UserModel.findByIdAndUpdate(req.params.id, { name, github, password: passwordHash })
        }

        else {
            return res.status(401).send("You don't have authorization")
        }

        const updatedUser = await UserModel.findById(req.params.id).select(["-token", "-password", "-isAdm"])
        res.status(200).json(updatedUser)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const githubUserById = async (req, res) => {
    try {
        const { github } = req.body
        const token = await validateToken(req.get("authorization"))

        let userToken = await findUserByToken(token)
        let userAdm = await admAccess(token)

        if ( userAdm == true || userToken.id == req.params.id) {
            await UserModel.findByIdAndUpdate(req.params.id, { github })
        }

        else {
            return res.status(400).send("You don't have authorization")
        }

    } catch (error){
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteUserById = async (req, res) => {
    try {
        const token = await validateToken(req.get("authorization"))

        let userToken = await UserModel.findOne({ token: token })

        if (userToken.isAdm == true || userToken.id == req.params.id) {
            await UserModel.findByIdAndDelete(req.params.id)
        }

        else {
            return res.status(400).send("You don't have authorization")
        }

        const { id } = req.params
        const findUser = await UserModel.findById(id)

        if (findUser == null)
            return res.status(404).json({ message: `User with ID: ${id} not found.` })

        await findUser.remove()

        res.status(200).json({ message: `User with ID: ${id} was sucessfully deleted.` })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const login = (req, res) => {
    UserModel.findOne({ email: req.body.email }, function (error, newUser) {
        if (error) {
            return res.status(500).send({ message: "Header not found" })
        }

        if (!newUser) {
            return res.status(404).send(`There is no user registered with this email: ${req.body.email}`)
        }

        const validPassword = bcrypt.compareSync(req.body.password, newUser.password)

        if (!validPassword) {
            return res.status(403).send("Incorrect password")
        }

        const token = jwt.sign({ email: req.body.email }, SECRET)
        newUser.token = token
        newUser.save()
        return res.status(200).send(token)
    })
}

module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    updateUserById,
    githubUserById,
    deleteUserById,
    login
}