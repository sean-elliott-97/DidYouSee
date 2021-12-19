const router = require("express").Router();
const { Movie, Gallery } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/movieData");
    return;
  }

  res.render("login");
});

// router.get('/movieData',(req,res)=>{
// const movies =  Movie.findAll();
// res.render('movie',{movies});
// })
router.get("/movie/:id", withAuth, async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.id, 
     
    );
    console.log(dbMovieData);
    const movies = dbMovieData.get({ plain: true });

    res.render("movie", { movies, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
