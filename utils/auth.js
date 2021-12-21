const withAuth=(req,res,next)=> {
  //If user is not logged in redirect them to the login page
  if(!req.session.loggedIn) {
      res.redirect('/login');
  } else {
      //if the user is logged in, excute the route function that will allow them to view their movie list
      next();
  }
};

module.exports= withAuth;