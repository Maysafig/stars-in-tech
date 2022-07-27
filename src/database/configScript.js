const ADMEMAIL = process.env.ADMEMAIL
const ADMPASSWORD = process.env.ADMPASSWORD

const administradora = require("../models/userModel")

const defaultConfig = async () => { 
    let adm = await administradora.find()

    if (adm.length < 1) {
        let user = new administradora({ 
            nome: "Maysa Figueiredo",
            github:"https://github.com/Maysafig",
            email: ADMEMAIL,
            senha: ADMPASSWORD,
            administradoraAPI: true,
        })

        await user.save()
    }
}

defaultConfig()
