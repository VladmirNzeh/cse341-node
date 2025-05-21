// controllers/lesson1.js
const { getdb } = require('../db/connect');

const emilyRoute = (req, res) => {
  const db = getdb();
  // db.collection('yourCollection').find()...
  res.send('Hello, Emmanuel!');
};

module.exports = { emilyRoute };
