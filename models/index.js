const User = require("./User");
const Movie = require("./Movie");
const List = require("./List");

//model relations
User.hasOne(List, {
  foreignKey: "user_id",
});
List.belongsTo(User, {
  foreignKey: "user_id",
});

List.hasMany(Movie, {
  foreignKey: "list_id",
});
Movie.belongsTo(List, {
  foreignKey: "list_id",
});

module.exports = { User, Movie, List };
