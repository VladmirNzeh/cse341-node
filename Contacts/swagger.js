const swaggerAutogen = require('swagger-autogen')();
const doc= {
    info: {
        title: 'Contacts API',
        description: 'API to manage a list of contacts'
    },
    host: 'test-db-kdao.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];
// Generate swagger.json
swaggerAutogen(outputFile, routes, doc);