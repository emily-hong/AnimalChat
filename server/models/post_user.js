'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.post_user.belongsTo(models.user, {
      //   foreignkey: 'post_id',
      //   targetKey: 'id'
      // })
      // models.post_user.belongsTo(models.user, {
      //   foreignkey: 'userId',
      //   targetKey: 'id'
      // })
    }
  };
  post_user.init({
    post_id: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post_user',
  });
  return post_user;
};