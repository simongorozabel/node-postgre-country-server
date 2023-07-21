const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Country = sequelize.define("country", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  languge: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "English",
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "USD",
  },
  flagUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Country;
