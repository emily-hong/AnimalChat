"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class like extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.like.belongsTo(models.user, {
                foreignKey: "user_id",
                targetKey: "id",
            })
            models.like.belongsTo(models.comment, {
                foreignKey: "comment_id",
                targetKey: "id",
            })
        }
    }
    like.init(
        {
            user_id: DataTypes.STRING,
            comment_id: DataTypes.STRING,
            post_id: DataTypes.STRING,
            postId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "like",
        }
    )
    return like
}
