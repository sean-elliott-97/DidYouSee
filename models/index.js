const User = require("./User");
const Movie = require("./Movie");
const List = require("./List");

User.hasMany(List, {
  foreignKey: "user_id",
});
List.belongsTo(User, {
  foreignKey: "user_id",
});
Movie.belongsTo(User, {
  foreignKey: "user_id",
});
Movie.belongsTo(List, {
  foreignKey: "list_id",
});


module.exports = { User, Movie, List };
