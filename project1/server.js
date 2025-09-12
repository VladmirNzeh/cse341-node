require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

//  Mount all routes
app.use('/', routes);

//  Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//  Connect to MongoDB and start server
MongoClient.connect(process.env.MONGO_URI)
  .then(client => {
    const db = client.db('project1'); // Make sure 'test' matches your actual database name
    app.locals.db = db;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection failed:', err));
