const StarModel = require("../models/starsModel")

const createStar = async (req, res) => {
    try {
        const { name, userName, instagram, youtube, linkedin, github, email } = req.body

        const newStar = new StarModel({
            name, userName, instagram, youtube, linkedin, github, email
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
        const { name, userName, instagram, youtube, linkedin, github, email } = req.body
        await StarModel.findByIdAndUpdate(req.params.id, { name, userName, instagram, youtube, linkedin, github, email })

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
            return res.status(404).json({ message: `Star with id ${id} not found.` })
        }

        await findStar.remove()

        res.status(200).json({ message: `Star with id ${id} was sucessfully deleted.` })
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