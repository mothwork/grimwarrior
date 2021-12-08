'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Grimoires', [
      {
        userId:1,
        name: "Spell Workbook",
        isDefault: true,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:1,
        name: "The Sapphire Pages of Golmûr",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:1,
        name: "Brenna's Illustrious Manuscript",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Grimoires', null, {});
  }
};
