const router = require("express").Router();
const {Movie}=require("../../models");
const axios = require("axios");
const env = require("dotenv").config();
const API_KEY = process.env.MOVIE_DB_KEY;
// const withAuth = require("../utils/auth");
//add movie to list
router.get("/", async (req, res) => {
    const loggedUserData = await Movie.findAll({
      where: {
        list_id: req.session.user_id,
      },
    });
   // console.log(loggedUserData);
    res.render("list", { loggedUserData, loggedIn: req.session.loggedIn });
  });
router.post("/", async (req, res) => {
    let movieTitle = req.body[0];
  
    axios
      .get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieTitle}`)
      .then((response) => {
        let movieData = response.data;
        console.log(movieData);
         console.log(movieData.Response);
         if(movieData.Response=="False"){
           res.redirect('/');
           return;
         }
         if(movieData.Response=="True"){
          Movie.create({
            title: movieData.Title,
            plot: movieData.Plot,
            poster: movieData.Poster,
            rating:movieData.Rated,
            director:movieData.Director,
            actors:movieData.Actors,
            runtime:movieData.Runtime,
            list_id: req.session.user_id,
          }).catch((err) => {
            console.log(err);
          });
          res.redirect('/');
          return;
         }
      
      })
      .catch((err) => console.log(err));
    
  });
  


  module.exports=router;