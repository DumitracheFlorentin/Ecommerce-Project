const express = require("express");
require("dotenv").config();

const DBconnection = require("./config/DBconnection");

// Init server
const app = express();

// DB Connection
DBconnection();

// Listen the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
