//must fix
// var userId = require("./api/user-routes").currentUserId;
// var currentUserId=userId;
var currentId;
const router = require("express").Router();
const { Movie, List, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");
const bodyParser = require("body-parser");


router.use(bodyParser.urlencoded());

//get route for homepage
router.get("/", async (req, res) => {
  const userData = (await User.findAll());
  const users =  (await User.findAll({})).map(el=>el.get({plain:true}));
  // console.log(users[users.length-1]);
 
  console.log(userData);
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

//get route for getting all list items
router.get("/list", withAuth, async (req, res) => {
  try {
    const allLists = await List.findAll();

    res.render("list", { allLists, loggedIn: req.session.loggedIn });
    //  console.log(User.dataValues.id);
    //console.log(currentUserId);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.post("/list", withAuth, async (req, res) => {
  try {
    const dbListData = await List.create({
      id: req.body[0].id,
      title: req.body[0].title,
      // user_id:currentId

    }
    );
    console.log(dbListData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  currentId+=1;
});

//get route for list item by id
router.get("/list/:id", withAuth, async (req, res) => {
  try {
    const dbListData = await List.findByPk(req.params.id);
    console.log(dbListData);
    const list = dbListData.get({ plain: true });

    res.render("listItem", { list, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//delete route for list item by id
router.delete("/list/:id", withAuth, async (req, res) => {
  List.destroy({
    where: {
      id: req.params.id,
    },
    //might delete
  }).then(function () {
    res.redirect("/list");
  });
});
//getting all movies
router.get("/movie", withAuth, async (req, res) => {
  console.log(req.body);
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
//exports.currentUserId;
