'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spell = sequelize.define('Spell', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    grimoireId: DataTypes.INTEGER
  }, {});
  Spell.associate = function(models) {
    // associations can be defined here
    Spell.belongsTo(models.User, {foreignKey: 'userId'})
    Spell.belongsTo(models.Grimoire, {foreignKey: 'grimoireId'})
  };
  return Spell;
};
