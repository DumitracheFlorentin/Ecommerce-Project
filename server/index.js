const express = require("express");
const cors = require("cors");
require("dotenv").config();

const DBconnection = require("./config/DBconnection");

// Init server
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", require("./routes/accountRoute"));
app.use("/api/products", require("./routes/productRoute"));

// DB Connection
DBconnection();

// Listen the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
