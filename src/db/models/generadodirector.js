'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class generadodirector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  generadodirector.init({
    nombre: DataTypes.STRING,
    fechanacimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'generadodirector',
  });
  return generadodirector;
};