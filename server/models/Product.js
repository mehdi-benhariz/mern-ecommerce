const {Schema,model} = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
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
  }, img:
  {
      data: Buffer,
      contentType: String
  },
  tags: [
    {
      type: String,
    },
  ],
});

module.exports = Product = model("products", ProductSchema);
