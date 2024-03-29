const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require("mongoose")

const connect = async() => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connect !")
        require("./configDBScript")
    }catch(error){
        console.error(error)
    }
}

module.exports = {
    connect 
}