const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Movie = require("../model/movie");
const router = new express.Router();

router.get("/", (req, res) => {
  res.redirect("/movies");
});

//fetching data
router.get("/movies", async (req, res) => {
  const mydata = await Movie.find();
  res.send(mydata);
});

//fetching data for perticular user using id
router.get("/movies/:id", async (req, res) => {
  const mydata = await Movie.findById(req.params.id);
  res.send(mydata);
});

//adding data
router.post("/movies", async (req, res) => {
  const mydata = new Movie({
    movie: req.body.movie,
    actor: req.body.actor,
    actress: req.body.actress,
    director: req.body.director,
    releaseyear: req.body.releaseyear,
  });
  await mydata.save((err, msg) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        message: msg,
        msg: "Data added successfully",
      });
    }
  });
});

//updating data
router.patch("/movies/:id", async (req, res) => {
  const _id = req.params.id;
  const mydata = await Movie.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  await mydata.save((err, msg) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        value: msg,
        message: "Updated Successfully",
      });
    }
  });
});

//deleting data
router.delete("/movies", async (req, res) => {
    const mydata = await Movie.deleteMany();
    res.send(mydata);
  });

//deleting data of perticular user using id
router.delete("/movies/:id", async (req, res) => {
  const _id = req.params.id;
  const mydata = await Movie.findByIdAndDelete(_id);
  // res.send(mydata);
  if (mydata) {
    res.status(200).json({
      msg: mydata,
      message: "Deleted Successfully",
    });
  }
});



module.exports = router;
