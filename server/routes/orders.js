import express from "express";
import mongoose from "mongoose";

import { OrdersModel } from "../models/Orders.js";

const router = express.Router();

router.post("/api/create-order", async (req, res) => {
  const order = new OrdersModel({
    _id: new mongoose.Types.ObjectId(),
    name: req?.body?.name,
    email: req?.body?.email,
    phone: req?.body?.phone,
    address: req?.body?.address,
    medicines: req?.body?.medicines,
  })

  try {
    const result = await order.save();
    res.status(201).json({
      createdOrder: {
        name: result.name,
        email: result.email,
        phone: result.phone,
        address: result.address,
        medicines: result.medicines,
        _id: result._id,
      }
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

export { router as ordersRouter };
