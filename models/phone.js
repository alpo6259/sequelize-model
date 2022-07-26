'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate (models) {}
  }
  Phone.init(
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z][0-9]*$/,
          len: [2, 32],
        },
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z][0-9]*$/,
          len: [2, 32],
        },
      },
      manufactureDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(),
        },
      },
      ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isIn: [[1, 2, 3, 4, 6, 8, 12]],
          msg: 'you have to choose from the range [1,2,3,4,6,8,12]',
        },
      },
      cpu: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z][0-9]*$/,
          len: [2, 32],
        },
      },
      screen: { type: DataTypes.FLOAT, validate: { min: 4 } },
      nfc: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: 'Phone',
      tableName: 'phones',
      underscored: true,
    }
  );
  return Phone;
};
