const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    _id: {
        type: moongoose.Schema.Types.ObjectId,
        default: moongoose.Types.ObjectId
    },

    nome: {
        type: String,
        required: true,
        unique: true,
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

const Model = mongoose.model("stars", starsSchema)

module.exports = Model

