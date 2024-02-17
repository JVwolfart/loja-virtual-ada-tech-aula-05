'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("images", {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      path: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("images");
  }
};
