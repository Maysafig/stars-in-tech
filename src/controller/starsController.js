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

module.exports = {
    createStar,
    findAllStars
}