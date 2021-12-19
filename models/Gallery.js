const { Model, Datatypes, DataTypes }=require('sequelize');
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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        run_time: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gallery_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'gallery',
                key:'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName:'gallery',
    }
);

module.exports=Gallery;