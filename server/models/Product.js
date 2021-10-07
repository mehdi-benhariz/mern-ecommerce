const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    text: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    minimum: 0,
    required: true,
  },
  quantityStock: {
    type: Number,
    minimum: 0,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  tags: [
    {
      type: String,
    },
  ],
});

module.exports = Product = model("products", ProductSchema);
