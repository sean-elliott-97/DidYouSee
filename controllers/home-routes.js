const router = require("express").Router();
const { Movie, List } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

//get route for homepage
router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

//get route for login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/movie");

    return;
  }

  res.render("login");
});

//get route for getting all lists
router.get("/list", async (req, res) => {
  try {
    const allLists = await List.findAll();
    res.render("list", { allLists, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//getting all movies
router.get("/movie", withAuth, async (req, res) => {
  try {
    const allMovies = await Movie.findAll();
  
    res.render("allMovies", { allMovies, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//getting movie by id
router.get("/movie/:id", withAuth, async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.id);
    console.log(dbMovieData);
    const movies = dbMovieData.get({ plain: true });

    res.render("movie", { movies, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
