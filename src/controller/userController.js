const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const createUser = async (req, res) => {
    try {
        const { name, github, email, password } = req.body
        const passwordHash = bcrypt.hashSync(password, 10)
        const newUser = new UserModel({ name, github, email, password: passwordHash })

        await newUser.save()  
              
        const savedUser = await UserModel.findOne({ email: email}).select(["-token","-password", "-isAdm"])

        res.status(201).json(savedUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find().select(["-token","-password", "-isAdm"])
        res.status(200).json(allUsers)
    } catch(error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findUserById = async (req, res) => {
    try {
        const findUser = await UserModel.findById(req.params.id).select(["-token","-password", "-isAdm"])
        res.status(200).json(findUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const UpdateUser = async (req, res) => {
    try {
        const authHeader = req.get("authorization")
        if (!authHeader) {
            return res.status(401).send("You need an authorization")
        }

        const { name, github, password } = req.body
        const passwordHash = bcrypt.hashSync(password, 10)

        let token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
              return res.status(403).send("Access denied")
            }
          })

          let userToken = await UserModel.findOne({ token : token })

          if(userToken.isAdm == true || userToken.id == req.params.id) {
            await UserModel.findByIdAndUpdate(req.params.id, { name, github, password: passwordHash })
          }

          else{
            return res.status(400).send("You don't have authorization")
          }               

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
    return res.status(404).json({ message: `User with id ${id} not found.`})

    await findUser.remove()

    res.status(200).json({ message: `User with id ${id} was sucessfully deleted.`}) 
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

        if(!validPassword) {
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
    UpdateUser,
    deleteUser,
    login
}