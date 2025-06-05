'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here if needed in the future
      // e.g., User.hasMany(models.Post);
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // Timestamps (createdAt, updatedAt) are added by default
  }, {
    sequelize,
    modelName: 'User',
    // tableName: 'users' // Sequelize will pluralize 'User' to 'users' by default
  });
  return User;
};
