const { ObjectId } = require('mongodb');

exports.findAll = async (req, res) => {
  try {
    const db = req.app.locals.db;
    const contacts = await db.collection('contacts').find().toArray();
    res.send(contacts);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const db = req.app.locals.db;
    const contact = await db.collection('contacts').findOne({ email: req.params.email });
    contact ? res.send(contact) : res.status(404).send({ message: 'Not found' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await db.collection('contacts').insertOne(req.body);
    const newContact = await db.collection('contacts').findOne({ _id: result.insertedId });
    res.status(201).send(newContact);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await db.collection('contacts').findOneAndUpdate(
      { email: req.params.email },
      { $set: req.body },
      { returnDocument: 'after' }
    );
    result.value ? res.send(result.value) : res.status(404).send({ message: 'Not found' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await db.collection('contacts').deleteOne({ email: req.params.email });
    result.deletedCount ? res.status(204).send() : res.status(404).send({ message: 'Not found' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
