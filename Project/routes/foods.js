const express = require('express');
const router = express.Router();
const validate = require('../utilities/food-validation');
const foods = require('../controllers/foods');

// Removed isAuthenticated for testing

// Create food
router.post('/',
    validate.addFoodRules(),
    validate.addFoodvalidation, 
    foods.createFood
);

// Get all foods
router.get('/', foods.getAll);

// Get food by ID
router.get('/:id', foods.getById);

// Update food
router.put('/:id',
    validate.addFoodRules(),
    validate.addFoodvalidation,
    foods.updateFood
);

// Delete food
router.delete('/:id', foods.deleteFood);

module.exports = router;
