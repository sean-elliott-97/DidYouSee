const { Movie } = require("../models");

const movieData = [
  { title: "The Departed", plot: "test",user_id:1 },
  { title: "Pulp Fiction", plot: "test",user_id:2 },
  { title: "Goodfellas", plot: "test",user_id:3 },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;