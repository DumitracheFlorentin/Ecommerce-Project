const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 3,
  },
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
  Address: {
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
    type: boolean,
    require: true,
    default: false,
  },
});

module.exports = mongoose.model("accounts", AccountSchema);
