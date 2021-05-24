const Sequelize = require("sequelize");
module.exports = new Sequelize("database_name", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false,
});
