const User = require('./User');

const Movie=require('./Movie');



//doesn't work yet
User.hasMany(Movie,{
    foreignKey:'user_id',
    onDelete:'cascade'
});
Movie.belongsTo(User,{
    foreignKey:'user_id',
});

module.exports = { User, Movie };
