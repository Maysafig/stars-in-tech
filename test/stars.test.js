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
    
    it("Deve chamar o Schema e retornar um novo nomeUsuario", () => {
        expect(stars.nomeUsuario).toBe("quero ser dev")
    })
    it("Deve salvar no banco de dados o novo nomeUsuario", () => {
        stars.save().then((dados) => {
            expect(dados.nomeUsuario).toBe("quero ser dev")
        })
    })

    it("Deve chamar o Schema e retornar um novo link do instagram", () => {
        expect(stars.instagram).toBe("https://www.instagram.com/simara_conceicao")
    })
    it("Deve salvar no banco de dados o novo link do instagram", () => {
        stars.save().then((dados) => {
            expect(dados.instagram).toBe("https://www.instagram.com/simara_conceicao")
        })
    })

    it("Deve chamar o Schema e retornar um novo link do youtube", () => {
        expect(stars.youtube).toBe("https://www.youtube.com/queroserdev")
    })
    it("Deve salvar no banco de dados o novo link do youtube", () => {
        stars.save().then((dados) => {
            expect(dados.youtube).toBe("https://www.youtube.com/queroserdev")
        })
    })

    it("Deve chamar o Schema e retornar um novo link do linkedin", () => {
        expect(stars.linkedin).toBe("https://www.linkedin.com/in/simaraconceicao/")
    })
    it("Deve salvar no banco de dados o novo link do linkedin", () => {
        stars.save().then((dados) => {
            expect(dados.linkedin).toBe("https://www.linkedin.com/in/simaraconceicao/")
        })
    })

    it("Deve chamar o Schema e retornar um novo link do github", () => {
        expect(stars.github).toBe("https://github.com/simaraconceicao")
    })
    it("Deve salvar no banco de dados o novo link do github", () => {
        stars.save().then((dados) => {
            expect(dados.github).toBe("https://github.com/simaraconceicao")
        })
    })

    it("Deve chamar o Schema e retornar um novo email", () => {
        expect(stars.email).toBe("contato@simaraconceicao.com")
    })
    it("Deve salvar no banco de dados o novo email", () => {
        stars.save().then((dados) => {
            expect(dados.email).toBe("contato@simaraconceicao.com")
        })
    })
})
