const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/stackathon", {
  logging: false,
});
module.exports = db;

// register models
require("./app/db");

module.exports = db;
