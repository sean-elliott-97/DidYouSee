const { Movie } = require("../models");

const movieData = [
  {
    id:1,
    title: "The Departed",
    plot: "Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
  },
  {
    id:2,
    title: "Pulp Fiction",
    plot: "Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id:3,
    title: "Goodfellas",
    plot: "Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id:4,
    title: "Dirty Dancing",
    plot: "Comedy",
    poster:
    "https://m.media-amazon.com/images/M/MV5BMTc3MDY3ODQ2OV5BMl5BanBnXkFtZTgwOTQ2NTYxMTE@._V1_SX300.jpg",
  },
  {
    id:5,
    title: "Dawn of the Dead",
    plot: "Horror",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2M2ZmU2OGQtNmU5Yi00MTIyLTgwNWMtYjljMzZlYTdiNjBhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    id:6,
    title: "Monty Python and the Holy Grail",
    plot: "Comedy",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    id:7,
    title: "Nightmare on Elm Street",
    plot: "Horror",
    poster:
    "https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    id:8,
    title: "Leaving Las Vegas",
    plot: "Drama",
    poster:
    "https://m.media-amazon.com/images/M/MV5BNDg3MDM5NTI0MF5BMl5BanBnXkFtZTcwNDY0NDk0NA@@._V1_SX300.jpg",
  },
  {
    id:9,
    title: "The Terminator",
    plot: "Drama",
    poster:
    "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id:10,
    title: "Fight Club",
    plot: "Drama",
    poster:
    "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id:11,
    title: "Back to the Future",
    plot: "Comedy",
    poster:
    "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    id:12,
    title: "Robocop",
    plot: "Action",
    poster:
    "https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;
