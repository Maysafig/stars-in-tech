require("dotenv-safe").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const index = require("./routes/index")
const userRoutes = require("./routes/userRoutes")
const starsRoutes = require("./routes/starsRoutes")

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use("/minha-rota-de-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use("/", index)
app.use("/", userRoutes)
app.use("/",starsRoutes)

module.exports = app 