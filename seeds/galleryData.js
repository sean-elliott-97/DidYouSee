const { Gallery }= require("../models");

const gallerydata=[
    {
        title: 'Dirty Dancing',
        run_time: '1h 40m',
        genre:'Dance/Romance',
        release_year:1987,
    },
    {
        title: 'Silence of the Lambs',
        run_time:'1h 58m',
        genre:'Thriller/Horror',
        release_year:1991,
    },
    {
        title:'Monty Python and the Holy Grail',
        run_time:'1h 29m',
        genre:'Comedy/Fantasy',
        release_year:1975,
    },
];

const seedGallery=()=>Gallery.bulkCreate(gallerydata);

module.exports=seedGallery;