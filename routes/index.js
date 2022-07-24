const express = require("express");
const router = express.Router();

router.use("/user", require("./userRouter"));
router.use("/test", require("./testRouter"));
//router.use("/news", require("./newsRouter"));

module.exports = router;
