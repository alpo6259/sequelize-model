'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Processor extends Model {
    static associate (models) {}
  }
  Processor.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: /^\s*$/,
          len: [2, 32],
        },
      },
      bitRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isIn: [[2, 4, 6, 8]],
          // msg: 'you have to choose from the range [2,4,6,8]',
        },
      },
      serialNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-z]{3}[0-9]{3}$/,
          len: [2, 32],
        },
      },
    },
    {
      sequelize,
      modelName: 'Processor',
      tableName: 'processors',
      underscored: true,
    }
  );
  return Processor;
};
