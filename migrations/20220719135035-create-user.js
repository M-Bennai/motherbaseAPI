"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      nickname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      favoriteGame: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
      },
      discord: {
        type: Sequelize.STRING,
      },
      psnId: {
        type: Sequelize.STRING,
      },
      xboxId: {
        type: Sequelize.STRING,
      },
      nintendoId: {
        type: Sequelize.STRING,
      },
      steamId: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      comments: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Users");
  },
};
