const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger/swagger_output.json'
const endpointsFiles = ['./src/app.js']

const doc = {
    info: {
        title: "Stars In Tech"
    },
    tags : [{
        name: 'default'
    },
    {
        name: 'users' 
    },
    {
        name: 'stars'
    }]

}



swaggerAutogen(outputFile, endpointsFiles, doc)