const router = require("express").Router();

const { Question } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    let questions = await Question.findAll();
    res.send(questions);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
