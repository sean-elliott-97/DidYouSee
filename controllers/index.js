const router = require("express").Router();

//routes
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

//using above routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
