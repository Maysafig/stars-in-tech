const usersModel = require("../src/models/userModel")

describe("Model Users", () => {
    const user = new usersModel({
        name: "name",
        github: "github's link",
        email: "email",
        password: "password's user",
        isAdm: false,
        token: "token's user"
    })

    it("Must call the schema and return the name", () => {
        expect(user.name).toBe("name")
    })

    it("Must call the schema and return the user's github", () => {
        expect(user.github).toBe("github's link")
    })

    it("Must call the schema and return the user's email", () => {
        expect(user.email).toBe("email")
    })

    it("Must call schema and return the user's hashed password", () => {
        expect(user.password).toBe("password's user")
    })

    it("Must call the schema and return if the user is adm", () => {
        expect(user.isAdm).toBe(false)
    })
  
    it("Must call schema and return user token", () => {
        expect(user.token).toBe("token's user")
    })
})

