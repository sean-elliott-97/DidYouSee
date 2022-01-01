const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class List extends Model {}

//list model
List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,

      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "list",
  }
);

module.exports = List;
