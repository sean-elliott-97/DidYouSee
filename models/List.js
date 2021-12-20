const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class List extends Model {}

List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    listMovies:{
        type:DataTypes.STRING,
        allowNull:true,
    },
   
     user_id:{
       type:DataTypes.INTEGER,
       references:{
           model:'user',
           key:'id'
       },
     },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'list',
  }
);

module.exports = List;