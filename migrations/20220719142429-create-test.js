"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tests", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      testTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sndTitle: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gameImg: {
        type: Sequelize.STRING,
      },
      platform: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      title1: {
        type: Sequelize.STRING,
      },
      block1: {
        type: Sequelize.STRING(2000),
      },
      title2: {
        type: Sequelize.STRING,
      },
      block2: {
        type: Sequelize.STRING(2000),
      },
      title3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      block3: {
        type: Sequelize.STRING(2000),
        allowNull: true,
      },
      image1: {
        type: Sequelize.STRING,
      },
      image2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      image3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      video: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      strongPoints: {
        type: Sequelize.STRING,
      },
      weakPoints: {
        type: Sequelize.STRING,
      },
      conclusion: {
        type: Sequelize.STRING(2000),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tests");
  },
};
