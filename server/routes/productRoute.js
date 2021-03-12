const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// GET A SPECIFIC PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const specProduct = await Product.findById(req.params.id);
    res.status(200).json(specProduct);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// CREATE A NEW PRODUCT
router.post("/register", async (req, res) => {
  try {
    const info = req.body;
    const newProduct = new Product({
      user: info.user,
      name: info.name,
      image: info.image,
      brand: info.brand,
      category: info.category,
      description: info.description,
      rating: info.rating,
      price: info.price,
      stock: info.stock,
    });

    newProduct
      .save()
      .then((newProduct) => {
        res.status(200).json({ msg: "The product was added to the list!" });
      })
      .catch((err) => {
        res.json({ msg: err.message });
      });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// DELETE A SPECIFIC PRODUCT
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "The product was deleted!" });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// UPDATE A SPECIFIC PRODUCT
router.patch("/update/:id", async (req, res) => {
  try {
    const info = await req.body;
    const product = await Product.findById(req.params.id);

    await Product.updateOne(
      { _id: req.params.id },
      {
        $set: {
          user: info.user ? info.user : product.user,
          name: info.name ? info.name : product.name,
          image: info.image ? info.image : product.image,
          brand: info.brand ? info.brand : product.brand,
          category: info.category ? info.category : product.category,
          description: info.description
            ? info.description
            : product.description,
          rating: info.rating ? info.rating : product.rating,
          price: info.price ? info.price : product.price,
          stock: info.stock ? info.stock : product.stock,
        },
      }
    );

    res.json({ msg: "The product was updated!" });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
