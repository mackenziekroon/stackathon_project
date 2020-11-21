const Sequelize = require("sequelize");
const db = require("./database");

const Question = db.define("question", {
  question: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.TEXT,
  },
  answerOne: {
    type: Sequelize.STRING,
  },
  answerTwo: {
    type: Sequelize.STRING,
  },
  answerThree: {
    type: Sequelize.STRING,
  },
  answerFour: {
    type: Sequelize.STRING,
  },
  correctAnswer: {
    type: Sequelize.STRING,
  },
});

module.exports = Question;
