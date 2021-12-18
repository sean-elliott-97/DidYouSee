const { Model, Datatypes }=require('sequelize');
const sequelize=require('../config/connection');

class Gallery extends Model {}

Gallery.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    }
)