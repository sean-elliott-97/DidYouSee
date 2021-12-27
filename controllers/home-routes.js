const router = require("express").Router();
const { Movie, List, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded());

//get route for homepage
router.get("/", async (req, res) => {
  
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

//get route for login page
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    
    res.redirect("/movie");

    return;
  }

  res.render("login");
});

//get movie search
router.get("/movie", async (req, res) => {
  console.log(req.session.user_id);
  res.render("movieSearch", { loggedIn: req.session.loggedIn });
});

//post movie
router.post("/movie",async(req,res)=>{
  try {
    const dbMovieData = await Movie.create({
      title: req.body[0],
      plot: req.body[1],
      poster:req.body[2],
      list_id:req.session.user_id
      

    }
    );
  //  res.redirect('/movie'); 
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
})

router.get("/list",async(req,res)=>{
  const loggedUserData = await Movie.findAll({
    where:{
      list_id:req.session.user_id
    }
  })
  console.log(loggedUserData);
  res.render("list",{loggedUserData,loggedIn:req.session.loggedIn});
})
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


