const StarModel = require("../models/starsModel")

const createStar = async (req, res) => {
    try {
        const { nome, nomeUsuario, instagram, youtube, linkedin, github, email } = req.body

        const newStar = new StarModel({
            nome, nomeUsuario, instagram, youtube, linkedin, github, email
        })

        const savedStar = await newStar.save()
        res.status(201).json(savedStar)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findAllStars = async (req, res) => {
    try {
        const allStars = await StarModel.find()
        res.status(200).json(allStars)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findStarById = async (req, res) => {
    try {
        const findStar = await StarModel.findById(req.params.id)
        res.status(200).json(findStar)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateStar = async (req, res) => {
    try {
        const { nome, nomeUsuario, instagram, youtube, linkedin, github, email } = req.body
        await StarModel.findByIdAndUpdate(req.params.id, { nome, nomeUsuario, instagram, youtube, linkedin, github, email })

        const updatedStar = await StarModel.findById(req.params.id)
        res.status(200).json(updatedStar)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteStar = async (req, res) => {
    try {
        const { id } = req.params
        const findStar = await StarModel.findById(id)

        if (findStar == null) {
            return res.status(404).json({ message: `A star com o id ${id} não foi encontrada.`})
        }

        await findStar.remove()

        res.status(200).json({ message: `A star ${findStar.nome} foi deletada com sucesso.`})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createStar,
    findAllStars,
    findStarById,
    updateStar, 
    deleteStar
}