const express = require('express');
const router = express.Router();
const users = require('./users');
const foods = require('./foods');

router.use('/', require('./swagger'));
router.use('/users', users);
router.use('/foods', foods);

// Optional: Add a welcome route
// router.get('/', (req, res) => {
//     res.send('Welcome to the API!');
// });

module.exports = router;
