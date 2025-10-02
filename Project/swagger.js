const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'API Documentation'
  },
  host: 'localhost:3000',
  schemes: ['http'],   
};

const outputFiles = './swagger-output.json';
const endpointsFiles =['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFiles, endpointsFiles, doc);