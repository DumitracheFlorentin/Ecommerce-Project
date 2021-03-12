const express = require("express");
const Account = require("../models/accountModel");

const router = express.Router();

// GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const allUSers = await Account.find();
    res.status(200).json(allUSers);
  } catch (error) {
    res.json(error.message);
  }
});

// GET A SPECIFIC USER
router.get("/:id", async (req, res) => {
  try {
    const specUser = await Account.findById(req.params.id);
    res.status(200).json(specUser);
  } catch (error) {
    res.json(error.message);
  }
});

// REGISTER AN ACCOUNT
router.post("/register", async (req, res) => {
  try {
    const info = req.body;
    const newAccount = new Account({
      username: info.username,
      password: info.password,
      email: info.email,
      firstName: info.firstName,
      lastName: info.lastName,
      address: info.address,
      phone: info.phone,
      isAdmin: info.isAdmin,
    });

    newAccount
      .save()
      .then((newAccount) => {
        res.status(200).json({ msg: "The account was created!" });
      })
      .catch((err) => {
        res.json(err.message);
      });
  } catch (error) {
    res.json(error.message);
  }
});

// DELETE A SPECIFIC ACCOUNT
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedAccount = await Account.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "The account was deleted!" });
  } catch (error) {
    res.json(error.message);
  }
});

// UPDATE A SPECIFIC ACCOUNT
router.patch("/update/:id", async (req, res) => {
  try {
    const info = await req.body;
    const user = await Account.findById(req.params.id);

    Account.updateOne(
      { _id: req.params.id },
      {
        $set: {
          username: info.username ? info.username : user.username,
          password: info.password ? info.password : user.password,
          email: info.email ? info.email : user.email,
          firstName: info.firstName ? info.firstName : user.firstName,
          lastName: info.lastName ? info.lastName : user.lastName,
          address: info.address ? info.address : user.address,
          phone: info.phone ? info.phone : user.phone,
          isAdmin: info.isAdmin ? info.isAdmin : user.isAdmin,
        },
      }
    )
      .then(() => {
        res.status(200).json({ msg: "The account was updated!" });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
