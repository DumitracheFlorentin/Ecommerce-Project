const mongoose = require("mongoose");

const DBconnection = () => {
  mongoose
    .connect(process.env.MONG_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = DBconnection;
