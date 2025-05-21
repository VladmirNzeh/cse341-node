// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const { connect } = require('./db/connect'); // 👈 just connect once

const port = process.env.PORT || 3000;

connect(); // connect to MongoDB on startup

app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
