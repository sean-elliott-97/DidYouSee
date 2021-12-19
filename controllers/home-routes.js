const router = require('express').Router();
const { Movie } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res)=>{
  res.render('homepage',{
    loggedIn:req.session.loggedIn,
  });
});
module.exports = router;