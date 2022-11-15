import express from "express";
import Product from "./src/models/ProductModel.js";
const router = express.Router();

// Get all posts
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.get("/products/:id", async (req, res) => {
  const products = await Product.findById(req.params.id);
  res.send(products);
});

export default router;
