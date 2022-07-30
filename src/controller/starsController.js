const StarModel = require("../models/starsModel")
const {validateToken, admAccess} = require("../controller/authController")

const createStar = async (req, res) => {
    try {
        const token = await validateToken(req.get("authorization"))
        const userAdm = await admAccess(token)
        const { name, userName, instagram, youtube, linkedin, portfolio } = req.body

        if (userAdm == false) {
            return res.status(401).json({ message: "Your user don't have administrator privileges" })
        }

        const newStar = new StarModel({
            name, userName, instagram, youtube, linkedin, portfolio
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
        await validateToken(req.get("authorization"))
        const allStars = await StarModel.find()

        res.status(200).json(allStars)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findStarById = async (req, res) => {
    try {
        await validateToken(req.get("authorization"))
        const findStar = await StarModel.findById(req.params.id)

        res.status(200).json(findStar)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateStarById = async (req, res) => {
    try {
        const { name, userName, instagram, youtube, linkedin, portfolio } = req.body
        const token = await validateToken(req.get("authorization"))
        const administrator = await admAccess(token)

        if (administrator == false) {
            return res.status(401).json({ message: "Your user don't have administrator privileges" })
        }

        await StarModel.findByIdAndUpdate(req.params.id, { name, userName, instagram, youtube, linkedin, portfolio })

        const updatedStar = await StarModel.findById(req.params.id)
        res.status(200).json(updatedStar)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const usernameModifyById = async (req, res) => {
    try {
        const { userName } = req.body
        const token = await validateToken(req.get("authorization"))
        const administrator = await admAccess(token)

        if (administrator == false) {
            return res.status(401).json({ message: "Your user don't have administrator privileges" })
        }

        await StarModel.findByIdAndUpdate(req.params.id, { userName })

        const updatedStar = await StarModel.findById(req.params.id)
        res.status(200).json(updatedStar)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteStarById = async (req, res) => {
    try {
        const { id } = req.params
        const token = await validateToken(req.get("authorization"))
        const administrator = await admAccess(token)

        if (administrator == false) {
            return res.status(401).json({ message: "Your user don't have administrator privileges" })
        }

        const findStar = await StarModel.findById(id)

        if (findStar == null) {
            return res.status(404).json({ message: `Star with ID: ${id} not found.` })
        }

        await findStar.remove()

        res.status(200).json({ message: `Star with ID: ${id} was sucessfully deleted.` })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createStar,
    findAllStars,
    findStarById,
    updateStarById,
    usernameModifyById,
    deleteStarById
}