const swaggerAutogen = require('swagger-autogen')();
const doc= {
    info: {
        title: 'Contacts API',
        description: 'API to manage a list of contacts'
    },
    host: 'localhost:8080',
    schemes: ['http', 'https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);