const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    name: {
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
        unique: true,
        lowercase: true
    },

    password: { 
        type: String,
        required: true
    },

    isAdm: {
        type: Boolean,
        default: false
    },

    token: { 
        type: String,
        required: false
    }

}, { timestamps: true }, { versionKey: false })

const User = mongoose.model("user", userSchema)

module.exports = User