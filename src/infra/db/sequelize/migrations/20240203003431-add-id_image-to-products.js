'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn("products", "id_image", {
      type: Sequelize.STRING(36),
      allowNull: true,
      references: {
        model: "images",
        key: "id"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("images", "id_image");
  }
};
