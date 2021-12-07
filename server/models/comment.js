"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comment.belongsTo(models.user, {foreignKey: "comment_user_id", targetKey: "user_id"})
      models.comment.belongsTo(models.post, {foreignKey: "post_id", targetKey: "id"})
      models.comment.hasMany(models.like, {foreignKey: "comment_id", sourceKey: "id"})
    }
  }
  comment.init(
    {
      comment_user_id: DataTypes.STRING,
      comment_content: DataTypes.STRING,
      post_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  )
  return comment
}
