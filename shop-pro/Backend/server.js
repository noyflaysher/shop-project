const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user-route");
const shopRoute = require("./routes/shop-route");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json()); //tells the system that you want json to be used.

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //every port can send
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/user", userRoute);
app.use("/shop", shopRoute);

app.use((req, res, next) => {
  const error = new HttpError("Could  not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "mongodb+srv://mayakoma:mayakoma7@cluster0.uiefzuv.mongodb.net/shopping?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => console.log("listen to port 5000"));
  })
  .catch((err) => console.log(err));
