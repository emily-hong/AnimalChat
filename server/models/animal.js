'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 관계
      models.animal.belongsTo(models.user, {
        foreignkey: 'userId',
        targetKey: 'id'
      })
    }
  };
  animal.init({
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'animal',
  });
  return animal;
};