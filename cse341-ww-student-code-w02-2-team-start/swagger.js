const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Temples API',
        description: 'API to manage a list of temples'
    },
    host: 'nathanbirch-temples-api.onrender.com',
    schemes: ['http', 'https'],
};

const OUTPUT_FILE = './swagger-output.json';
const ENDPOINTS_FILES = ['./routes/index.js'];
swaggerAutogen(OUTPUT_FILE, ENDPOINTS_FILES, doc);
