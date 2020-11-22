const router = require("express").Router();

const Question = require("../db/models/Question");

// mounted  on /api/questions
router.get("/", async (req, res, next) => {
  try {
    let data = await Question.findAll();

    res.send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
