//library for mongodb database
const mongoose = require("mongoose");

//model for the database
const MovieSchema = mongoose.Schema({
  movie: String,
  actor: String,
  actress: String,
  director: String,
  releaseyear: Number,
});

//Here we are created a tabel for the database
const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;
