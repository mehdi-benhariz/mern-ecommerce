const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  pannelProducts: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
      quantity: {
        type: Number,
      },
    },
  ],
  historic: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      total: {
        type: Number,
        required: true,
      },
      goods: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: "products",
          },
          quantity: {
            type: Number,
          },
        },
      ],
    },
  ],
});
module.exports = User = mongoose.model("users", UserSchema);
