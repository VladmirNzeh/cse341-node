const express = require('express');
const router = express.Router();
const lesson1Controller = require('../controllers/lesson1');

// Route handlers using controller functions
router.get('/', lesson1Controller.emilyRoute);

module.exports = router;
