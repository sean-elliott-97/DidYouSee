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
    res.redirect("/movie");
   
    return;
  }

  res.render("login");
});

//getting all movies
router.get("/movie",withAuth,async(req,res)=>{
  
  try {
    const allMovies = await Movie.findAll();
    //console.log(allMovies);
    for(let i =0;i<allMovies.length;i++){
      console.log(allMovies[i].dataValues.title);
    }
    
    //const movies = dbMovieData.get({ plain: true });
    //results = results.map( (r) => ( r.toJSON() ) )
    res.render("allMovies", { allMovies, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  });


//getting movie by id  
router.get("/movie/:id", withAuth, async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.id,);
    console.log(dbMovieData);
    const movies = dbMovieData.get({ plain: true });

    res.render("movie", { movies, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
