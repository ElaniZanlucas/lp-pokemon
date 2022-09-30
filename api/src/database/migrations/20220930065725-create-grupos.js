'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Grupos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameA: {
        type: Sequelize.STRING
      },
      emailA: {
        type: Sequelize.STRING
      },
      pokemon1A: {
        type: Sequelize.STRING
      },
      pokemon2A: {
        type: Sequelize.STRING
      },
      pokemon3A: {
        type: Sequelize.STRING
      },

      nameB: {
        type: Sequelize.STRING
      },
      emailB: {
        type: Sequelize.STRING
      },
      pokemon1B: {
        type: Sequelize.STRING
      },
      pokemon2B: {
        type: Sequelize.STRING
      },
      pokemon3B: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Grupos')
  }
}
