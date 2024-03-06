import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { URL } from 'url';
import {shopsRouter} from "./routes/shops.js";
const __dirname = new URL('.', import.meta.url).pathname;

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use("/", shopsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

mongoose.connect(
  "mongodb+srv://katekovalchuk225:Kateryna1@cluster0.ljf7scz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
