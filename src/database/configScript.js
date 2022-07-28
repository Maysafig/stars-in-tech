const ADMEMAIL = process.env.ADMEMAIL
const ADMPASSWORD = process.env.ADMPASSWORD
const bcrypt = require("bcrypt")

const adm = require("../models/userModel")

const defaultConfig = async () => { 
    let admFind = await adm.find()
    let passwordHash = bcrypt.hashSync(ADMPASSWORD, 10)

    if (admFind.length < 1) {
        let user = new adm({ 
            name: "Maysa Figueiredo",
            github:"https://github.com/Maysafig",
            email: ADMEMAIL,
            password: passwordHash,
            isAdm: true,
        })

        await user.save()
    }
}

defaultConfig()
