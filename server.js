const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({path:"./.env"});

const app = express();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err
      ? console.log("Database connection Faild err: ", err)
      : console.log("Database connected")
);

app.use("/app", require("./routes/userRoutes.js"));

const PORT = 5000;

app.listen(PORT, (err) =>
  err
    ? console.log("Server Faild err: ", err)
    : console.log(`Server running on port ${PORT}`)
);
