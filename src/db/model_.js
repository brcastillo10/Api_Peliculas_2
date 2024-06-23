//import { DataTypes } from 'sequelize';
const { Sequelize, DataTypes } = require('sequelize');

//ORM Modelo relacionar objeto (Objetc Relationship Model)

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'castlesoft',
    username: 'postgres',
    password: 'root'
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

 