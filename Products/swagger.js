const swaggerAutogen = require('swagger-autogen')();
const doc= {
    info: {
        title: 'Products API',
        description: 'API to manage a list of products'
    },
    host: 'test-db-kdao.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];
// Generate swagger.json
swaggerAutogen(outputFile, routes, doc);