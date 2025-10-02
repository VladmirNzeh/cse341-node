const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use(cors({ methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PATCH'] }))
  .use(cors({ origin: '*' }))
  .use('/', require('./routes/index'));

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

mongodb.initDb((err) => {
  if (err) {
    console.log(`There was a mongodb error: ${err}`);
  } else {
    app.listen(port, () => {
      console.log(`DB is listening and node running on port ${port}`);
    });
  }
});
