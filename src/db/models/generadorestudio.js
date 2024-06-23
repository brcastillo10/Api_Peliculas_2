'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class generadorestudio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  generadorestudio.init({
    nombre: DataTypes.STRING,
    añofundacion: DataTypes.INTEGER,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'generadorestudio',
  });
  return generadorestudio;
};