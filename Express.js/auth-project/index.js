const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const authRouter = require("./routers/authRouter");

const app = express();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Middleware to parse JSON bodies

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
  res.json({ message: "Hello from Server" });
});

app.listen(process.env.PORT, () => {
  console.log("Listening...");
});
