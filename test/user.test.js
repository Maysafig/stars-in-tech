const usersModel = require("../src/models/userModel")

describe("Model Users", () => {
    const user = new usersModel({
        _id: "62e1e10c06650f354bcd7dd4",
        name: "Maysa Figueiredo",
        github: "https://github.com/Maysafig",
        email: "maysa@gmail.com",
        password: "$2b$10$85SN8E9dLbvihqm41Ze4memXnNvWwWjCyVPqhPcWQnfvVNsvujNY2",
        isAdm: true,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heXNhQGdtYWlsLmNvbSIsImlhdCI6MTY1ODk3MDU0Nn0.rJqWNN0W4VQRhXzDpZPX9vo_JJnsAFy6zfvjvnqnZ8I"
    })

    it("Must call the schema and return the id", () => {
        expect(user.id).toBe("62e1e10c06650f354bcd7dd4")
    })

    it("Must call the schema and return the name", () => {
        expect(user.name).toBe("Maysa Figueiredo")
    })

    it("Must call the schema and return the user's github", () => {
        expect(user.github).toBe("https://github.com/Maysafig")
    })

    it("Must call the schema and return the user's email", () => {
        expect(user.email).toBe("maysa@gmail.com")
    })

    it("Must call schema and return the user's hashed password", () => {
        expect(user.password).toBe("$2b$10$85SN8E9dLbvihqm41Ze4memXnNvWwWjCyVPqhPcWQnfvVNsvujNY2")
    })

    it("Must call the schema and return if the user is adm", () => {
        expect(user.isAdm).toBe(true)
    })
  
    it("Must call schema and return user token", () => {
        expect(user.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heXNhQGdtYWlsLmNvbSIsImlhdCI6MTY1ODk3MDU0Nn0.rJqWNN0W4VQRhXzDpZPX9vo_JJnsAFy6zfvjvnqnZ8I")
    })
})

