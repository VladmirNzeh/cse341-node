const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = async (callback) => {
    if (_db) {
        console.log('Database is already initialized!')
        return callback(null, _db);
    }
    try {
        const client = await MongoClient.connect(process.env.MONGO_URI)
        _db = client;
        console.log('Database connected');
        callback(null, _db);
      } catch (err) {
        callback(err);
      }
};

const getDb = () => {
    if (!_db) {
        throw Error('Database not initialized')
    }
    return _db;
};

module.exports = {
    initDb,
    getDb,
};
