const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
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
    plot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actors:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    runtime:{
      type:DataTypes.STRING,
      allowNull:false,
    },

    
    // user_id:{
    //   type:DataTypes.INTEGER,
    //   references:{
    //       model:'user',
    //       key:'id'
    //   },
    // },
  list_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'list',
      key:'id'
    }
  }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  }
);

module.exports = Movie;