const Star = require("../src/models/starsModel")

describe("Teste da model Stars", () => {
    const stars = new Star({
        _id: 1,
        nome: "Simara Conceição",
        nomeUsuario: "quero ser dev",
        instagram: "https://www.instagram.com/simara_conceicao",
        youtube: "https://www.youtube.com/queroserdev",
        linkedin: "https://www.linkedin.com/in/simaraconceicao/",
        github: "https://github.com/simaraconceicao",
        email: "contato@simaraconceicao.com"
    })

    it("Deve chamar o Schema e retornar um novo nome", () => {
        expect(stars.nome).toBe("Simara Conceição")
    })
    it("Deve salvar no banco de dados o novo nome", () => {
        stars.save().then((dados) => {
            expect(dados.nome).toBe("Simara Conceição")
        })
    })
})
