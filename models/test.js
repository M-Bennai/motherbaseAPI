"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test.init(
    {
      testTitle: DataTypes.STRING,
      sndTitle: DataTypes.STRING,
      gameImg: DataTypes.STRING,
      platform: DataTypes.STRING,
      date: DataTypes.STRING,
      title1: DataTypes.STRING,
      block1: DataTypes.STRING(2000),
      title2: DataTypes.STRING,
      block2: DataTypes.STRING(2000),
      title3: DataTypes.STRING,
      block3: DataTypes.STRING(2000),
      image1: DataTypes.STRING,
      image2: DataTypes.STRING,
      image3: DataTypes.STRING,
      video: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      strongPoints: DataTypes.STRING,
      weakPoints: DataTypes.STRING,
      conclusion: DataTypes.STRING(2000),
    },
    {
      sequelize,
      modelName: "Test",
    }
  );
  return Test;
};
