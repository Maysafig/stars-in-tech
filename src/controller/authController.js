const UserModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const validateToken = async (token)  => {
    if (!token) {
        throw { message: "You need an authorization"}
    }

    const tokenSplit = token.split(" ")[1]

    await jwt.verify(tokenSplit, SECRET, async function (erro) {
        if (erro) {
            throw { message: "Incorrect password" }
        }
    })
    return tokenSplit
}

const isAdm = async (token) => {
    if (!token) {
        throw { message: "You need an authorization"}
    }

    const user = await UserModel.findOne({ token: token })

    let ret = user.isAdm == true ? true : false
    return ret
}

module.exports = {
    validateToken,
    isAdm
}



