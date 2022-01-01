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





module.exports = router;
