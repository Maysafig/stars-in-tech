require("dotenv-safe").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const userRoutes = require("./routes/userRoutes")
const starsRoutes = require("./routes/starsRoutes")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(userRoutes)
app.use(starsRoutes)

module.exports = app 