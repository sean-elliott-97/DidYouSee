const User=require('./User');
const Gallery=require('./Gallery');
const Movie=require('./Movie');

Gallery.hasMany(Movie, {
    foreignKey: 'gallery_id'
});

Movie.belongsTo(Gallery, {
    foreignKey: 'gallery_id'
});

module.exports={User, Gallery, Movie};

