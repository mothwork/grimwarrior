'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spells', [
      {
        userId:1,
        grimoireId:1,
        title: "Mote of Quashing",
        content: "A spell which quashes instantly",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:1,
        grimoireId:1,
        title: "Gixie's Instant Clean Fork",
        content: "Summons one clean fork upon completion of the spell. Note: Requires that all the caster's forks be dirty.",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:1,
        grimoireId:1,
        title: "Singing Sprig",
        content: "A spell when cast causes a sprig of plant matter to sing the last words spoke to it",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:1,
        grimoireId:1,
        title: "Gixie's Shakey Awakey",
        content: "If the caster is asleep eight hours after this spell is cast, they are shaken until they wake up",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:1,
        grimoireId:2,
        title: "Tempest Shield",
        content: "A glistening sparkle covers your clothing, repelling all moisture both magical and mundane. The spell lasts for eight hours. Upon expiration, any present moisture will break through.",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        userId:1,
        grimoireId:2,
        title: "Thunder Sign",
        content: "A small rune is conjured in the air in front of you, any who try to pass within 10 feet of the rune without whispering the password are struck by a bolt of electricity. The sign can expend ten such bolts of electricity before the spell is extinguished.",
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Spells', null, {});
  }
};
