'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Generadopeliculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Generadopeliculas.init({
    titulo: DataTypes.STRING,
    Año_publicacion: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    categoria: DataTypes.STRING,
    calificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Generadopeliculas',
  });
  return Generadopeliculas;
};