const Sequelize = require("sequelize");

const databaseName = "stackathon";

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false,
  }
);

// resource cleanup when tests complete
if (process.env.NODE_ENV === "test") {
  after("close database connection", () => db.close());
}

module.exports = db;
