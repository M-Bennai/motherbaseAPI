const userRouter = require("express").Router();
const { User } = require("../models");

userRouter.get("/all", async (req, res) => {
  const allUser = await User.findAll();
  res.status(200).json(allUser);
});

module.exports = userRouter;
