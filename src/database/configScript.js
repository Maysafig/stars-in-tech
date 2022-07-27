const ADMEMAIL = process.env.ADMEMAIL
const ADMPASSWORD = process.env.ADMPASSWORD
const bcrypt = require("bcrypt")

const administradora = require("../models/userModel")

const defaultConfig = async () => { 
    let adm = await administradora.find()
    let password = bcrypt.hashSync(ADMPASSWORD, 10)

    if (adm.length < 1) {
        let user = new administradora({ 
            nome: "Maysa Figueiredo",
            github:"https://github.com/Maysafig",
            email: ADMEMAIL,
            senha: password,
            administradora: true,
        })

        await user.save()
    }
}

defaultConfig()
