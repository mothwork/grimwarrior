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
        email: 'noodlemom1538@hotmail.com',
        username: 'Sika',
        hashedPassword: bcrypt.hashSync('noodle')
      },
      {
        email: 'gstix@rbmageguild.ravensbluff',
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
