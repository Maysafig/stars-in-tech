const starsModel = require("../src/models/starsModel")

describe("Testes da model Stars", () => {
    const stars = new starsModel({
        nome: "nome",
        userName: "userName",
        instagram: "link do instagram",
        youtube: "link do youtube",
        linkedin: "link do linkedin",
        github: "link do github",
        email: "email"
    })
   
    it("Deve chamar o Schema e retornar o nome", () => {
        expect(stars.nome).toBe("nome")
    })

    it("Deve chamar o Schema e retornar o nome de usuário", () => {
        expect(stars.userName).toBe("userName")
    })

    it("Deve chamar o Schema e retornar o link do instagram", () => {
        expect(stars.instagram).toBe("link do instagram")
    })

    it("Deve chamar o Schema e retornar o link do youtube", () => {
        expect(stars.youtube).toBe("link do youtube")
    })

    it("Deve chamar o Schema e retornar o link do linkedin", () => {
        expect(stars.linkedin).toBe("link do linkedin")
    })

    it("Deve chamar o Schema e retornar o link do github", () => {
        expect(stars.github).toBe("link do github")
    })

    it("Deve chamar o Schema e retornar o email", () => {
        expect(stars.email).toBe("email")
    })
})
