const mongoose = require("mongoose")

const starsSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    nome: {
        type: String,
        required: true,
        unique: true,
    },

    userName: {
        type: String,
        required: true,
        unique: true
    },

    instagram: { 
        type: String,
        unique: true
    },

    youtube: {
        type: String,
        unique: true
    },

    linkedin: {
        type: String,
        unique: true
    },

    github: {
        type: String,
        unique: true
    },

    email: {
        type: String,
        unique: true,
        lowercase: true
    }

}, { timestamps: true })

const Star = mongoose.model("stars", starsSchema)

module.exports = Star

