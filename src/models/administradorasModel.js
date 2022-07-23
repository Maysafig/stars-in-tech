const moongoose = require("mongoose")

const administradorasSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    senha: { type: String }
}, {
    versionKey: false
})

const administradoras = mongoose.model('administradoras', administradorasSchema)

module.exports = administradoras

