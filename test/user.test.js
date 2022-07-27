const usersModel = require("../src/models/userModel")

describe("Teste da Model User", () => {
    const user = new usersModel({
        nome: "nome da usuária",
        github: "link do github da usuária",
        email: "email da usuária",
        senha: "senha da usuária",
        administradoraAPI: false
    })

    it("Deve chamar o Schema e retornar o nome", () => {
        expect(user.nome).toBe("nome da usuária")
    })

    it("Deve chamar o Schema e retornar o link do github", () => {
        expect(user.github).toBe("link do github da usuária")
    })

    it("Deve chamar o Schema e retornar o email", () => {
        expect(user.email).toBe("email da usuária")
    })

    it("Deve chamar o Schema e retornar a senha", () => {
        expect(user.senha).toBe("senha da usuária")
    })

    it("Deve chamar o Schema e retornar se a usuária é administradora da API", () => {
        expect(user.administradoraAPI).toBe(false)
    })
})

