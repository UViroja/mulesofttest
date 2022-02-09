const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./route/route");
const bodyParser = require("body-parser");
require("./model/movie");

mongoose.connect("mongodb://localhost:27017/movies")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

///Here we are creating a server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
