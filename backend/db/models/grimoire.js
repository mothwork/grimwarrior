'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grimoire = sequelize.define('Grimoire', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Grimoire.associate = function(models) {
    // associations can be defined here
    Grimoire.belongsTo(models.User, {foreignKey: 'userId'})
    Grimoire.hasMany(models.Spell, {foreignKey: 'grimoireId'})
  };
  return Grimoire;
};
