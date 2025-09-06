const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db('mongodbVSCodePlaygro')
      .collection('contacts')
      .find()
      .toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const result = await mongodb
      .getDb()
      .db('mongodbVSCodePlaygro')
      .collection('contacts')
      .findOne({ _id: new ObjectId(contactId) });

    if (!result) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
};
