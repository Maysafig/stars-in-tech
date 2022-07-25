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

    nomeUsuario: {
        type: String,
        required: true
    },

    instagram: { 
        type: String,
        default: "Não Informado."
    },

    youtube: {
        type: String,
        default: "Não Informado."
    },

    linkedin: {
        type: String,
        default: "Não Informado."
    },

    github: {
        type: String,
        default: "Não Informado."
    },

    email: {
        type: String,
        default: "Não Informado."
    }

}, { timestamps: true })

const Star = mongoose.model("stars", starsSchema)

module.exports = Star

