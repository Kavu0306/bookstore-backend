const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

// Middlewares
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));

app.use((req, res) => {
  res.status(404).json({
    success: true,
    message: "am always present",
  });
});
