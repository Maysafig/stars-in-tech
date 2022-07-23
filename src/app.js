require("dotenv-safe").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const userRoutes = require("./routes/userRoutes")
const starsRoutes = require("./routes/starsRoutes")
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')

const app = express()

app.use(express.json())
app.use(cors())
app.use("/minha-rota-de-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile))

mongoose.connect()

app.use(userRoutes)
app.use(starsRoutes)

module.exports = app 