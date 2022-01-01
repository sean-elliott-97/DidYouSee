const router = require('express').Router();

const userRoutes = require('./user-routes');
const listRoutes = require('./list-routes');
const movieRoutes=require('./movie-routes');

router.use('/users', userRoutes);
router.use('/list',listRoutes);
router.use('/movie',movieRoutes);
module.exports = router;
