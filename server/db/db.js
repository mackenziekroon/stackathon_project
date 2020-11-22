const Sequelize = require("sequelize");

const databaseName = "stackathon";

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, {
  logging: false,
});

module.exports = db;
