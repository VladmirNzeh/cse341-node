const express = require('express');
const router = express.Router();
const validate = require('../utilities/user-validation');
const users = require('../controllers/users');

// Removed isAuthenticated for now (easier testing)

// Create a new user
router.post('/',
    validate.addUserRules(),
    validate.addUservalidation,
    users.createUser
);

// Get all users
router.get('/', users.getAll);

// Get user by ID
router.get('/:id', users.getById);

// Update user
router.put('/:id',
    validate.addUserRules(),
    validate.addUservalidation,
    users.updateUser
);

// Delete user
router.delete('/:id', users.deleteUser);

module.exports = router;
