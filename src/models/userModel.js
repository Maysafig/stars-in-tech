const moongoose = require("mongoose")

const userSchema = moongoose.Schema({
    _id: {
        type: moongoose.Schema.Types.ObjectId,
        default: moongoose.Types.ObjectId
    },

    nome: {
        type: String,
        required: true,
        unique: true,
    },

    areaInteresse: {
        type: String,
        required: true
    },

    github: {
        type: String,
        default: "Não informado"
    },

    email: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Model = mongoose.model("user", userSchema)

module.exports = Model