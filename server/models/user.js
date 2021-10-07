'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.comment, {
        foreignKey: 'id', 
        sourceKey: 'id'
      })
      models.user.hasMany(models.animal, {
        foreignKey: 'id', 
        sourceKey: 'userId'
      })
      models.user.hasMany(models.post_user, {
        foreignKey: 'id',
        sourceKey: 'post_id'
      })
    }
  };
  user.init({
    user_id: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
    animaltype: DataTypes.STRING,
    animalname: DataTypes.STRING,
    animalyob: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};