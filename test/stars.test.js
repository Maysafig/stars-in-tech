const starsModel = require("../src/models/starsModel")

describe("Model Stars", () => {
    const stars = new starsModel({
        name: "star's name",
        userName: "userName",
        instagram: "instagram's link",
        youtube: "youtube's link",
        linkedin: "linkedin's link",
        github: "github's link",
        email: "email"
    })
   
    it("Must call the schema and return the name", () => {
        expect(stars.name).toBe("star's name")
    })

    it("Must call the schema and return the username", () => {
        expect(stars.userName).toBe("userName")
    })

    it("Must call the schema and return the instagram's link", () => {
        expect(stars.instagram).toBe("instagram's link")
    })

    it("Must call the schema and return the youtube's link", () => {
        expect(stars.youtube).toBe("youtube's link")
    })

    it("Must call the schema and return the linkedin's link", () => {
        expect(stars.linkedin).toBe("linkedin's link")
    })

    it("Must call the schema and return the github's link", () => {
        expect(stars.github).toBe("github's link")
    })

    it("Must call the schema and return the email", () => {
        expect(stars.email).toBe("email")
    })
})
