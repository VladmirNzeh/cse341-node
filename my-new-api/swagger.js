const swaggerAutogen = require('swagger-autogen')();
const doc= {
    info: {
        title: 'Products API',
        description: 'API to manage a list of products'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];
// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);