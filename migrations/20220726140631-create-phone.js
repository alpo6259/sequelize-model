'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brand: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      manufactureDate: {
        type: Sequelize.DATEONLY,
      },
      ram: {
        type: Sequelize.INTEGER,
      },
      cpu: {
        type: Sequelize.STRING,
      },
      screen: {
        type: Sequelize.FLOAT,
      },
      nfc: {
        type: Sequelize.BOOLEAN,
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
