'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'mith.the.grey@maiar.net',
        username: 'mithrandir',
        hashedPassword: bcrypt.hashSync('mellon')
      },
      {
        email: 'pprinceley@warwizards.cormyr',
        username: 'Poppi',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'noodlesmom1538@the-wretched.net',
        username: 'Sika',
        hashedPassword: bcrypt.hashSync('songs2die4')
      },
      {
        email: 'gstix@rbmageguild.rav',
        username: 'Gixie',
        hashedPassword: bcrypt.hashSync('Wonder!')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
