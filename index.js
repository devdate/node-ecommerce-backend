import express from "express";
import { config } from "dotenv";
import router from "./routes.js";

import dbConnect from "./src/db/connection.js";
// const port = 4000;
if (process.env.NODE_ENV !== "production") {
  config();
}

const port = process.env.PORT;

dbConnect().then(() => {
  const app = express();
  app.use(express.json());
  // Routers
  app.get("/", (req, res) => {
    res.send("Backend Server for Gamerscart https://gamercart.netlify.app");
  });
  app.use("/api", router);

  // Server init
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
});
