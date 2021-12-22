const { Movie } = require("../models");

const movieData = [
  {
    id:1,
    title: "The Departed",
    plot: "test",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
  },
  {
    id:2,
    title: "Pulp Fiction",
    plot: "test",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id:3,
    title: "Goodfellas",
    plot: "test",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id:4,
    title: "Dirty Dancing",
    plot: "test",
    poster:
    "https://m.media-amazon.com/images/M/MV5BMTc3MDY3ODQ2OV5BMl5BanBnXkFtZTgwOTQ2NTYxMTE@._V1_SX300.jpg",
  },
  {
    id:5,
    title: "Dawn of the Dead",
    plot: "test",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2M2ZmU2OGQtNmU5Yi00MTIyLTgwNWMtYjljMzZlYTdiNjBhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    id:6,
    title: "Monty Python and the Holy Grail",
    plot: "test",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;
