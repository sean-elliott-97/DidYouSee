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

//get movie
// router.get("/movie", async (req, res) => {
//   // console.log(req.session.user_id);

//   res.render("movieSearch", { loggedIn: req.session.loggedIn });
// });

//add movie to list
router.post("/list", async (req, res) => {
  let movieTitle = req.body[0];

  axios
    .get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieTitle}`)
    .then((response) => {
      let movieData = response.data;
       console.log(movieData.Response);
       if(movieData.Response=="False"){
         res.redirect('/list');
         return;
       }
       if(movieData.Response=="True"){
        Movie.create({
          title: movieData.Title,
          plot: movieData.Plot,
          poster: movieData.Poster,
          list_id: req.session.user_id,
        }).catch((err) => {
          console.log(err);
        });
        res.redirect('/list');
        return;
       }
    
    })
    .catch((err) => console.log(err));
  
});

router.get("/list", async (req, res) => {
  const loggedUserData = await Movie.findAll({
    where: {
      list_id: req.session.user_id,
    },
  });
 // console.log(loggedUserData);
  res.render("list", { loggedUserData, loggedIn: req.session.loggedIn });
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
