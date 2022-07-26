const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    nome: {
        type: String,
        required: true,
        unique: true,
    },

    github: {
        type: String,
        unique: true,
        default: "Não informado"
    },

    email: {
        type: String,
        required: true,
        unique: true

    }
}, { timestamps: true })

const User = mongoose.model("user", userSchema)

module.exports = User