const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb(async (err) => {
  if (err) {
    console.log(err);
  } else {
    const db = mongodb.getDb().db(); // get active DB
    const contactsCollection = db.collection('contacts');
    const count = await contactsCollection.countDocuments();

    if (count === 0) {
      try {
        const contacts = JSON.parse(fs.readFileSync('./contacts.json', 'utf8'));
        const result = await contactsCollection.insertMany(contacts);
        console.log(`${result.insertedCount} contacts seeded into MongoDB.`);
      } catch (seedErr) {
        console.error('Seeding failed:', seedErr);
      }
    } else {
      console.log(`Contacts collection already has ${count} documents.`);
    }

    app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });
  }
});
