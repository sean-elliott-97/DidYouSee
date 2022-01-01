const router = require("express").Router();

// Import the custom middleware

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
    res.redirect("/list");

    return;
  }

  res.render("login");
});

module.exports = router;
