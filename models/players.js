"use strict";

module.exports = function(sequelize, DataTypes) {
  var players = sequelize.define("players", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING,
    team: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return players;
};
