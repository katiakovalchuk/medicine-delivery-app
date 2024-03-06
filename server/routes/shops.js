import express from "express";
import mongoose from "mongoose";

import { ShopsModel } from "../models/Shops.js";

const router = express.Router();

router.get("/api", async (req, res) => {
  try {
    const result = await ShopsModel.find({});
    // await ShopsModel.create({ name: 'user-name' });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
})

export { router as shopsRouter };
