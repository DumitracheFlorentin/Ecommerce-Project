const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Middleware function
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.json({ msg: "You need a token!" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.json({ auth: false, message: "U failed to auth!" });
    } else {
      req.userData = decoded;
      next();
    }
  });
};

router.get("/", verifyJWT, (req, res) => {
  const userInfo = req.userData;
  res.json(userInfo);
});

router.get("/products", verifyJWT, (req, res) => {
  const userInfo = req.userData;
  res.json(userInfo);
});

router.get("/users", verifyJWT, (req, res) => {
  const userInfo = req.userData;
  res.json(userInfo);
});

module.exports = router;
