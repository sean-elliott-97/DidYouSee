const router = require("express").Router();
const { Movie, List, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");
const bodyParser = require("body-parser");
const axios = require("axios");
const env = require("dotenv").config();
router.use(bodyParser.urlencoded());
const API_KEY = process.env.MOVIE_DB_KEY;
//get route for homepage
router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

//get route for login page
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/list");

    return;
  }

  res.render("login");
});




//get route for movie item by id
router.get("/movie/:id", withAuth, async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.id);
    console.log(dbMovieData);

    const movie = dbMovieData.get({ plain: true });

    res.render("movie", { movie, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//delete route for movie item by id
router.delete("/movie/:id", withAuth, async (req, res) => {
  Movie.destroy({
    where: {
      id: req.params.id,
    },
    //might delete
  }).then(function () {
    res.redirect("/movie");
  });
});

module.exports = router;
