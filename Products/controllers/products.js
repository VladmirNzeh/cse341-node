const db = require('../models');
const Product = db.products; // assumes products.model.js is loaded in models/index.js

// Create and save a new product
const createProduct = async (req, res) => {
  //#swagger.tags=['Products']
  if (!req.body.name || !req.body.price || !req.body.category || !req.body.sku) {
    return res.status(400).send({ message: "Required fields are missing!" });
  }

  const { name, description, price, category, inStock, quantity, sku } = req.body;

  const product = new Product({
    name,
    description,
    price,
    category,
    inStock: inStock !== undefined ? inStock : true,
    quantity: quantity || 0,
    sku
  });

  await product
    .save()
    .then(data => {
      res.send({ message: "Product created successfully.", product: data });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while creating the product."
      });
    });
};

// Retrieve all products
const getAll = async (req, res) => {
  //#swagger.tags=['Products']
  await Product.find({}, {
    name: 1,
    description: 1,
    price: 1,
    category: 1,
    inStock: 1,
    quantity: 1,
    sku: 1
  })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error retrieving products."
      });
    });
};

// Retrieve a single product by ID
const getSingle = async (req, res) => {
  //#swagger.tags=['Products']
  const id = req.params.id;

  await Product.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Product not found with id ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving product with id ${id}`
      });
    });
};

// Update a product by ID
const updateProduct = async (req, res) => {
  //#swagger.tags=['Products']
  if (!req.body) {
    return res.status(400).send({ message: "Update data cannot be empty!" });
  }

  const id = req.params.id;

  await Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot update product with id=${id}. Product not found.` });
      } else {
        res.send({ message: "Product updated successfully." });
      }
    })
    .catch(err => {
      res.status(500).send({ message: `Error updating product with id=${id}` });
    });
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  //#swagger.tags=['Products']
  const id = req.params.id;

  await Product.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot delete product with id=${id}. Product not found.` });
      } else {
        res.send({ message: "Product deleted successfully!" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: `Error deleting product with id=${id}` });
    });
};

module.exports = { createProduct, getAll, getSingle, updateProduct, deleteProduct };
