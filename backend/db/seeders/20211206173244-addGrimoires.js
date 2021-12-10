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
      },
      {
        userId:1,
        name: "Tome of Dusted Whisper",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:1,
        name: "Sorrowful Palimpsest of the Wilted Rose",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:1,
        name: "Poppidore's Garrulous Leaves",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:2,
        name: "Spell Workbook",
        isDefault: true,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:2,
        name: "The Sapphire Pages of Golmûr",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:2,
        name: "Brenna's Illustrious Manuscript",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:3,
        name: "Spell Workbook",
        isDefault: true,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:3,
        name: "Noodlebook",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:3,
        name: "😈 Evil Notes",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:3,
        name: "Song Ideas!!!",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:3,
        name: "girls room moodboard",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:4,
        name: "Spell Workbook",
        isDefault: true,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:4,
        name: "The Sapphire Pages of Golmûr",
        isDefault: false,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:4,
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
