const router = require("express").Router();
const { Movie } = require("../../models");

const withAuth = require("../../utils/auth");
//const API_KEY = process.env.MOVIE_DB_KEY;
router.get("/:id/", withAuth, async (req, res) => {
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
router.delete("/:id/", withAuth, async (req, res) => {
  Movie.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function () {
    res.redirect("/api/list/");
  });
});

module.exports = router;
