const app = require("./src/app")

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Olá, estou na porta ${PORT}`)
})