const Sequelize=require('sequelize');
require('dotenv').config();
console.log(process.env);
const sequelize=new Sequelize(
    "movie_db",
    "root",
    "root",
    {
        host:'localhost',
        dialect:'mysql',
        port:3306,
    }
);

module.exports= sequelize;
