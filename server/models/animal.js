"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     models.animal.belongsTo(models.user, {
      foreignKey: 'userId', 
      targetKey: 'id',
      onDelete: 'cascade'
      })
    }
  }
  animal.init(
    {
      userId: DataTypes.STRING,
      animaltype: DataTypes.STRING,
      animalname: DataTypes.STRING,
      animalyob: DataTypes.STRING,
      animal_photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "animal",
      paranoid: false
    }
  )
  return animal
}
