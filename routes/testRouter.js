const testRouter = require("express").Router();
const { Test } = require("../models");
const {
  addTest,
  getAllTests,
  getOneTest,
} = require("../controllers/testController");

testRouter.post(
  "/create",
  /*vvalidateToken,*/ async (req, res) => {
    console.log("req.body :>> ", req.body);
    const {
      testTitle,
      sndTitle,
      platform,
      gameImg,
      title1,
      block1,
      title2,
      block2,
      title3,
      block3,
      image1,
      image2,
      image3,
      rating,
      strongPoints,
      weakPoints,
      conclusion,
      video,
    } = req.body;
    try {
      const newTest = await addTest({
        testTitle,
        sndTitle,
        platform,
        gameImg,
        title1,
        block1,
        title2,
        block2,
        title3,
        block3,
        image1,
        image2,
        image3,
        rating,
        strongPoints,
        weakPoints,
        conclusion,
        video,
      });
      res.status(200).json({ msg: "success", newTest });
    } catch (error) {
      console.log("error :>> ", error);
      res.status(400).json({ msg: "an error was occured" });
    }
  }
);

testRouter.get("/all", async (req, res) => {
  try {
    const allTests = await getAllTests();
    res.status(200).json({ msg: "success", allTests });
  } catch (error) {
    console.log("error :>> ", error);
    res.status(400).json({ msg: "an error was occured", error });
  }
});

testRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneTest = await getOneTest(id);
    res.status(200).json({ msg: "success", oneTest });
  } catch (error) {
    console.log("error :>> ", error);
    res.status(400).json({ msg: "an error was occured", error });
  }
});

module.exports = testRouter;
