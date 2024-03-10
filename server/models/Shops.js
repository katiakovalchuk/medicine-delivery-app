import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  medicines: {
    type: Array,
    required: true,
  }
});

export const ShopsModel = mongoose.model("Shops", shopSchema);
