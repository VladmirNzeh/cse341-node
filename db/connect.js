// db/mongo.js
const { MongoClient } = require('mongodb');
require('dotenv').config(); // to use variables from .env

const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connect() {
  try {
    await client.connect();
    db = client.db(); // default db from URI
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

function getdb() {
  if (!db) {
    throw new Error('❌ Database not connected yet!');
  }
  return db;
}

module.exports = {
  connect,
  getdb,
};
