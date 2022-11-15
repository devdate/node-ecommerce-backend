import express from "express";
import { config } from "dotenv";
// import getProducts from "./src/handlers/getProducts.js";
config();
const app = express();
const port = process.env.PORT;
// const port = 4000;

// Routers
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/about", getProducts);

// Server init
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
