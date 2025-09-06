const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contact');

// Get all contacts
router.get('/', contactsController.getAllContacts);

// GET single contact by ID
router.get('/:id', contactsController.getSingleContact);

module.exports = router;