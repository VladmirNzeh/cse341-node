module.exports = mongoose => {
  const Product = mongoose.model(
    "products",
    new mongoose.Schema(
      {
        name: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: false
        },
        price: {
          type: Number,
          required: true
        },
        category: {
          type: String,
          required: true
        },
        inStock: {
          type: Boolean,
          default: true
        },
        quantity: {
          type: Number,
          default: 0
        },
        sku: {
          type: String,
          required: true,
          unique: true
        }
      },
      { timestamps: true }
    )
  );

  return Product;
};
