const router=require('express').Router();
const { Gallery, Movie }=require('../models');
const withAuth=require('../utils/auth');

router.get('/', async(req,res)=> {
    try {
        const dbGalleryData=await Gallery.findAll({
            include: [
                {
                    model: Movie,
                    attributes: ['title', 'plot'],
                },
            ],
        });

        const galleries=dbGalleryData.map((gallery)=>
        gallery.get({plain: true})
        );

        res.render('homepage', {
            galleries,
            loggedIn:req.session.loggedIn,
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET a movie
router.get('/movie/:id',withAuth,async(req,res)=>{
    try{
        const dbMovieData=await Movie.findByPk(req.params.id);

        const movies=dbMovieData.get({plain:true});

        res.render('movie',{movies, loggedIn:req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login',(req,res)=>{
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports=router;