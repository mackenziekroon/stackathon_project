const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/stackathon", {
  logging: false,
});

db.sync();

module.exports = db;
