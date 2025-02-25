import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

mongoose.connect("12").then(() => {
  console.log("connected to MONGO");
});

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("succes");
});

app.listen(3000, () => {
  console.log("listening");
});
