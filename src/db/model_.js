//import { DataTypes } from 'sequelize';
require("dotenv").config()

const { Sequelize, DataTypes } = require('sequelize');

//ORM Modelo relacionar objeto (Objetc Relationship Model)

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });


const pelicula = sequelize.define('pelicula',{
    titulo: DataTypes.STRING,
    Año_publicacion: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    categoria: DataTypes.STRING,
    calificaion: DataTypes.INTEGER
});

pelicula.sync();

module.exports.pelicula = pelicula;


  //Probar conexion


  //Definir los modelos 

 