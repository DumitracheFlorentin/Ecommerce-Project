const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "accounts",
  },
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    require: true,
    default: 0,
  },
  price: {
    type: Number,
    require: true,
    default: 0,
  },
  stock: {
    type: Number,
    require: true,
    default: 0,
  },
});

module.exports = mongoose.model("products", productSchema);
