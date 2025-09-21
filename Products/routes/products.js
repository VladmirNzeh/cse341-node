const router = require('express').Router();
const products = require("../controllers/products");
const validateProduct = require("../middleware/validateProduct"); 

// Create a new Product with validation
router.post("/", validateProduct, products.createProduct);

// Retrieve all Products
router.get("/", products.getAll);

// Retrieve a single Product by ID
router.get("/:id", products.getSingle);

// Update a Product by ID with validation
router.put("/:id", validateProduct, products.updateProduct);

// Delete a Product by ID
router.delete("/:id", products.deleteProduct);

module.exports = router;
