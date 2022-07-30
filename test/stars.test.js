const starsModel = require("../src/models/starsModel")

describe("Model Stars", () => {
    const stars = new starsModel({
        _id: "62e1e938a39b2bd580a3be22",
        name: "Laiza Benevides",
        userName: "conecta_elas",
        instagram: "https://www.instagram.com/conecta_elas",
        youtube: "https://www.youtube.com/c/conectaelas",
        linkedin: "https://www.linkedin.com/in/laizabenevides",
        portfolio: "https://github.com/laizabsobral"
    })

    it("Must call the schema and return the id", () => {
        expect(stars.id).toBe("62e1e938a39b2bd580a3be22")
    })
   
    it("Must call the schema and return the name", () => {
        expect(stars.name).toBe("Laiza Benevides")
    })

    it("Must call the schema and return the username", () => {
        expect(stars.userName).toBe("conecta_elas")
    })

    it("Must call the schema and return the instagram's link", () => {
        expect(stars.instagram).toBe("https://www.instagram.com/conecta_elas")
    })

    it("Must call the schema and return the youtube's link", () => {
        expect(stars.youtube).toBe("https://www.youtube.com/c/conectaelas")
    })

    it("Must call the schema and return the linkedin's link", () => {
        expect(stars.linkedin).toBe("https://www.linkedin.com/in/laizabenevides")
    })

    it("Must call the schema and return the portfolio's link", () => {
        expect(stars.portfolio).toBe("https://github.com/laizabsobral")
    })
})
