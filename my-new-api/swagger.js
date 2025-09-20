const swaggerAutogen = require('swagger-autogen')();
const doc= {
    info: {
        title: 'Products API',
        description: 'API to manage a list of products'
    },
    host: process.env.SWAGGER_HOST || 'localhost:3000',
    basePath: process.env.SWAGGER_BASEPATH || '/api',
    schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];
// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);