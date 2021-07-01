const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
    required: true,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
      quantity: {
        type: Number,
        required: true,
      },
      unitPrice: {
        type: Number,
        required: true,
      },
    },
  ],
});
module.exports = Receipt = mongoose.model("receipts", UserSchema);
