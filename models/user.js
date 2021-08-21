'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    clave: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};