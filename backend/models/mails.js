const { Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

class Mails extends Model {}

Mails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Mails'
  }
);

module.exports = Mails;