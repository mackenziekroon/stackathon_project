const router = require("express").Router();

router.use("/questions", require("./questions"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
