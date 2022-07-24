const { Test } = require("../models");
const { User } = require("../models");
const { v4: uuidv4 } = require("uuid");

const TestController = {
  addTest: async ({
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
  }) => {
    const newTest = await Test.create({
      id: uuidv4(),
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
    return newTest;
  },

  getAllTests: async () => {
    const allTests = await Test.findAll();
    return allTests;
  },
  getOneTest: async (id) => {
    const test = await Test.findOne({
      where: { id: id },
      include: [{ model: User, as: "user" }],
    });
    return test;
  },
};

module.exports = TestController;
