const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema({
  password: {
    type: String,
    require: true,
    min: 3,
  },
  email: {
    type: String,
    require: true,
    min: 3,
  },
  firstName: {
    type: String,
    require: true,
    min: 3,
  },
  lastName: {
    type: String,
    require: true,
    min: 3,
  },
  address: {
    type: String,
    require: true,
    min: 3,
  },
  phone: {
    type: String,
    require: true,
    min: 8,
  },
  isAdmin: {
    type: Boolean,
    require: true,
    default: false,
  },
});

module.exports = mongoose.model("accounts", AccountSchema);
