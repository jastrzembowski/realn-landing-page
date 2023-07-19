const Sequelize = require('sequelize')

const sequelize = new Sequelize("realn", "realn", "eFYmGYmHDPqE4DcK", {
  host: "37.187.155.8",
  dialect: "mysql",
});

module.exports = sequelize;