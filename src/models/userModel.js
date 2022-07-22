const moongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    nome: { type: String},
    email: { type: String},
    senha: { type: String}
}, {
    versionKey: false
})

const Model = mongoose.model("user", userSchema)

module.exports = Model