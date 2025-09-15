const swaggerAutogen = require('swagger-autogen')();
const doc= {
    info: {
        title: 'Contacts API',
        description: 'API to manage a list of contacts'
    },
    host: 'localhost:8080',
    schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];
// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);