'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class thetodo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  thetodo.init({
    taskname: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
    priority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'thetodo',
  });
  return thetodo;
};