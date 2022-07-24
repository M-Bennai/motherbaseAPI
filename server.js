require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 1000;
const logger = require("morgan");
const cors = require("cors");

const allowedOrigins = ["http://localhost:7000"];

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cors(allowedOrigins));
app.use(logger("dev"));
app.get("/", (req, res) => {
  res.send("working");
});
app.use("/api", require("./routes/index"));

app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});

module.exports = app;
