"use strict";

module.exports = function(sequelize, DataTypes) {
  var usersplplayers = sequelize.define("usersplplayers", {
    userId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return usersplplayers;
};
