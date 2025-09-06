const mongodb = require('../db/connect');

const getAllContacts = async (req, res) => {
    try {
        const result = await mongodb.getDb().db('mongodbVSCodePlaygro').collection('contacts').find();
        result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts);
        });
    } catch (err) {
      res.status(500).json({message: err.message});
    }
};

const getSingleContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const result = await mongodb.getDb().db('mongodbVSCodePlaygro').collection('contacts').findOne({_id:
            new require('mongodb').objectId(contactId)});

            if (!result) {
                return res.status(404).json({message: 'Contact not found'});
            }

            res.setHeader('content-Type', 'application/json');
            res.status(200).json(result);
          } catch (err) {
            res.status(500).json({message: err.message});
          }
        };
    
module.exports = {
    getAllContacts,
    getSingleContact
}