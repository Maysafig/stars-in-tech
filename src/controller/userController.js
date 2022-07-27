const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const createUser = async (req, res) => {
    try {
        const { nome, github, email, senha } = req.body

        const senhaComHash = bcrypt.hashSync(senha, 10)
        
        const newUser = new UserModel({ nome, github, email, senha: senhaComHash })
                
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
        const authHeader = req.get('authorization')
        if (!authHeader) {
            return res.status(401).send('Onde está o authorization?')
        }

        const { nome, github, senha } = req.body
        const senhaComHash = bcrypt.hashSync(senha, 10)

        let token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
              return res.status(403).send("Não foi possível exibir as informações")
            }
          })

          let userToken = await UserModel.findOne({ token : token })

          if(userToken.administradoraAPI == true || userToken.id == req.params.id) {
            await UserModel.findByIdAndUpdate(req.params.id, { nome, github, senha: senhaComHash })
          }

          else{
            return res.status(400).send("Você não pode alterar outro usuário")
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
    return res.status(404).json({ message: `A User com o id ${id} não foi deletada`})

    await findUser.remove()

    res.status(200).json({ message: `A User ${findUser.nome} foi deletada com sucesso.`}) 
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const login = (req, res) => {
    UserModel.findOne({ email: req.body.email }, function (error, newUser) {
        if (error) {
            return res.status(500).send({ message: error})
        }

        if (!newUser) {
            return res.status(404).send(`Não existe usuária com este email ${req.body.email}`)
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, newUser.senha)

        if(!senhaValida) {
            return res.status(403).send("Senha incorreta")
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